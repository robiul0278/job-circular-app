'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreateJobMutation } from '@/redux/api/api';
import { JobFormType, jobSchema } from '@/types/jobSchema';
import CreateJobForm from '@/components/form/create-job-form';

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
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-foreground">নতুন চাকরির সার্কুলার যুক্ত করুন</h1>
                    <p className="text-sm mt-1 text-muted-foreground">
                        সার্কুলারের শিরোনাম, প্রতিষ্ঠান, ট্রেড, ডেডলাইন সহ প্রয়োজনীয় তথ্য যুক্ত করুন
                    </p>
                </div>
                <div className="text-right">
                    <p className="text-sm text-muted-foreground">তারিখ</p>
                    <p className="text-sm font-medium text-foreground">
                        {new Date().toLocaleDateString('bn-BD')}
                    </p>
                </div>
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
    );
}
