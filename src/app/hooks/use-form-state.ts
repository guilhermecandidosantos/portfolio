import { SubmitEvent, useState, useTransition } from 'react';

interface FormState {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
}

export function useFormState(
  action: (data: FormData) => Promise<FormState>,
  onSuccess?: () => Promise<void> | void,
  initialState?: FormState,
) {
  const [isPending, startTransition] = useTransition();

  const [formState, setFormState] = useState<FormState>(
    initialState ?? {
      success: false,
      message: '',
      errors: {},
    },
  );

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    const data = new FormData(form);

    startTransition(async () => {
      const state = await action(data);
      setFormState(state);
      if (state.success && onSuccess) {
        await onSuccess();
      }
    });
  }

  return [formState, handleSubmit, isPending] as const;
}
