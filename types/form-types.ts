import { Control, FieldErrors, UseFormRegister, UseFormSetValue, UseFormHandleSubmit, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

export const PostFormSchema = z.object({

    slug: z.string().optional(),
    title: z.string().min(1, "title is required!"),
    companyName: z.string().min(1, "company name is required!"),
    image: z.string().url("invalid image URL!"),
    vacancy: z.coerce.number().min(1, "Vacancy is required!"),
    applyLink: z.string().url("invalid apply link URL!"),
    published: z.date({required_error:"published date is required!"}),
    applyStart: z.date({required_error:"start date is required!"}),
    deadline: z.date({ required_error: "deadline is required!" }),
    technology: z.array(z.string().min(1)).min(1, "at least one technology field is required!"),
    description: z.string().min(10, "job description is too short!")
});

export type TPostCircular = z.infer<typeof PostFormSchema>;

export type TFormProps = {
  onSubmit: (data: TPostCircular) => void;
  register: UseFormRegister<TPostCircular>;
  handleSubmit: UseFormHandleSubmit<TPostCircular>;
  control: Control<TPostCircular>;
  errors: FieldErrors<TPostCircular>;
  setValue: UseFormSetValue<TPostCircular>;
  form: UseFormReturn<TPostCircular>;
  isSubmitting: boolean;
};