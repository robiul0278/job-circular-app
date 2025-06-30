'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreateJobMutation } from '@/redux/api/api';
import { JobFormType, jobSchema } from '@/types/jobSchema';
import CreateJobForm from '@/components/form/CreateJobForm';

export default function JobForm() {
    const [selectedEducation, setSelectedEducation] = useState<string[]>([]);
    const [createJob] = useCreateJobMutation();

    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
        setValue,
    } = useForm<JobFormType>({
        resolver: zodResolver(jobSchema),
        defaultValues: {
            education: [],
            vacancy: 1,
            views: 0,
        },
    });

    const onSubmit = async (data: JobFormType) => {
        try {
            const result = await createJob(data).unwrap();
            console.log("✅ Job created successfully:", result);
            // success toast বা redirect করতে পারেন এখানে
        } catch (error) {
            console.error("❌ Failed to create job:", error);
            // error toast দেখাতে পারেন এখানে
        }
    };


    const addEducation = (education: string) => {
        if (!selectedEducation.includes(education)) {
            const updated = [...selectedEducation, education];
            setSelectedEducation(updated);
            setValue('education', updated, { shouldValidate: true });
        }
    };

    const removeEducation = (education: string) => {
        const updated = selectedEducation.filter((e) => e !== education);
        setSelectedEducation(updated);
        setValue('education', updated, { shouldValidate: true });
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                        Create Job Posting
                    </h1>
                    <p className="text-slate-600 dark:text-slate-300 text-lg">
                        Fill out the details to create a professional job listing
                    </p>
                </div>

                <CreateJobForm
                    onSubmit={onSubmit}
                    register={register}
                    handleSubmit={handleSubmit}
                    control={control}
                    errors={errors}
                    setValue={setValue}
                    selectedEducation={selectedEducation}
                    addEducation={addEducation}
                    removeEducation={removeEducation}
                    isSubmitting={isSubmitting}
                />

            </div>
        </div>
    );
}
