import { z } from "zod";
import { Control, FieldErrors, UseFormRegister, UseFormSetValue, UseFormHandleSubmit } from 'react-hook-form';
// Zod schema for validation
export const jobSchema = z.object({
    jobTitle: z.string().min(4, 'Job title must be at least 4 characters'),
    companyName: z.string().min(2, 'Company name is required'),
    vacancy: z.coerce.number().min(1, 'Vacancy must be at least 1'),
    applyLink: z.string().url('Enter a valid URL'),
    // file input is tricky - expect FileList with at least one file
    image: z
        .any()
        .refine((files) => files && files.length > 0, 'Image is required'),
    views: z.coerce.number().min(0),
    published: z.string().min(1, 'Published date is required'),
    startApply: z.string().min(1, 'Start apply date is required'),
    deadline: z.string().min(1, 'Deadline is required'),
    education: z.array(z.string()).min(1, 'Select at least one education'),
    description: z.string().min(20, 'Description must be at least 20 characters'),
});

export type JobFormType = z.infer<typeof jobSchema>;

export type CreateJobFormProps = {
  onSubmit: (data: JobFormType) => void;
  register: UseFormRegister<JobFormType>;
  handleSubmit: UseFormHandleSubmit<JobFormType>;
  control: Control<JobFormType>;
  errors: FieldErrors<JobFormType>;
  setValue: UseFormSetValue<JobFormType>;
  selectedEducation: string[];
  addEducation: (education: string) => void;
  removeEducation: (education: string) => void;
  isSubmitting: boolean;
};