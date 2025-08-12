"use client"

import { useGetSingleJobQuery, useUpdateJobMutation } from '@/redux/api/api';
import { toast } from 'sonner';
import { TGenericErrorResponse, IJobCircular } from '@/types/types';
import { Form } from '@/components/ui/form';
import PostForm from '@/components/dashboard/PostForm';
import { useForm } from 'react-hook-form';
import { generateSlug } from '@/utils/utils';
import { use } from 'react';

type PageProps = {
    params: Promise<{ id: string }>;
};

export default function UpdateCircularPage({ params }: PageProps) {

    const { id } = use(params);
    const { data: SingleJob } = useGetSingleJobQuery(id)
    const [Update] = useUpdateJobMutation();

    const form = useForm<IJobCircular>({
        // resolver: zodResolver(PostFormSchema),
        values: SingleJob?.data || {
            title: "",
            companyName: "",
            vacancy: "",
            deadline: undefined,
            categories: undefined,
            departments: [],
            description: "",
            banner: "",
            images: [],
        },
    });

    const onSubmit = async (data: IJobCircular) => {
        const slug = generateSlug(data.title);
        const payload = { ...data, slug };

        try {
            const res = await Update(payload).unwrap();
            if (res.statusCode === 200) {
                toast.success(res.message);
                // form.reset();
            }
        } catch (error: unknown) {
            const err = error as { data: TGenericErrorResponse };

            if (err?.data?.errorSources && Array.isArray(err.data.errorSources)) {
                err.data.errorSources.forEach(({ path, message }) => {
                    form.setError(path as keyof IJobCircular, {
                        type: "server",
                        message,
                    });
                });
            } else {
                toast.error(err?.data?.message);
            }
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-foreground">চাকরির সার্কুলার Update করুন</h1>
                    <p className="text-sm mt-1 text-muted-foreground">
                        সার্কুলারের শিরোনাম, প্রতিষ্ঠান, ট্রেড, ডেডলাইন সহ প্রয়োজনীয় তথ্য Update করুন
                    </p>
                </div>
                <div className="text-right">
                    <p className="text-sm text-muted-foreground">তারিখ</p>
                    <p className="text-sm font-medium text-foreground">
                        {new Date().toLocaleDateString('bn-BD')}
                    </p>
                </div>
            </div>
            <Form {...form}>
                <PostForm
                    onSubmit={onSubmit}
                    register={form.register}
                    handleSubmit={form.handleSubmit}
                    control={form.control}
                    setValue={form.setValue}
                    errors={form.formState.errors}
                    isSubmitting={form.formState.isSubmitting}
                    form={form}
                />
            </Form>
        </div>
    );
}
