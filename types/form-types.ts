import { Control, FieldErrors, UseFormRegister, UseFormSetValue, UseFormHandleSubmit, UseFormReturn } from 'react-hook-form';
import { IJobCircular } from './types';


export type TFormProps = {
  onSubmit: (data: IJobCircular) => void;
  register: UseFormRegister<IJobCircular>;
  handleSubmit: UseFormHandleSubmit<IJobCircular>;
  control: Control<IJobCircular>;
  errors: FieldErrors<IJobCircular>;
  setValue: UseFormSetValue<IJobCircular>;
  form: UseFormReturn<IJobCircular>;
  isSubmitting: boolean;
};