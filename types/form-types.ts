import { Control, FieldErrors, UseFormRegister, UseFormSetValue, UseFormHandleSubmit, UseFormReturn } from 'react-hook-form';
import { TJobCircular } from './types';


export type TFormProps = {
  onSubmit: (data: TJobCircular) => void;
  register: UseFormRegister<TJobCircular>;
  handleSubmit: UseFormHandleSubmit<TJobCircular>;
  control: Control<TJobCircular>;
  errors: FieldErrors<TJobCircular>;
  setValue: UseFormSetValue<TJobCircular>;
  form: UseFormReturn<TJobCircular>;
  isSubmitting: boolean;
};