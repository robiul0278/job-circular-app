"use client"

import { useCreateJobMutation } from '@/redux/api/api';
import { toast } from 'sonner';
import { TGenericErrorResponse } from '@/types';
import { Form } from '@/components/ui/form';
import PostForm from '@/components/dashboard/post-form';
import { useForm } from 'react-hook-form';
import { PostFormSchema, TPostCircular } from '@/types/form-types';
import { zodResolver } from '@hookform/resolvers/zod';
import { generateSlug } from '@/utils/utils';

export default function PostCircularPage() {
    const [Post] = useCreateJobMutation();

    const form = useForm<TPostCircular>({
        resolver: zodResolver(PostFormSchema),
        defaultValues: {
            title: "",
            companyName: "",
            vacancy: 0,
            applyLink: "",
            published: undefined,
            applyStart: undefined,
            deadline: undefined,
            technology: [],
            description: "",
            image: "",
        },
    });

    const onSubmit = async (data: TPostCircular) => {
        const slug = generateSlug(data.title);
        const payload = { ...data, slug };

        console.log("Submitting with slug:", payload);
        try {
            const res = await Post(payload).unwrap();
            if (res.statusCode === 200) {
                toast.success(res.message);
                // form.reset();
            }
        } catch (error: unknown) {
            console.log(error);
            const err = error as { data: TGenericErrorResponse };
            toast.error(err?.data?.message);
        }
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
