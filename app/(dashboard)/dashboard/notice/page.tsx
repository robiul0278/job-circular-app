"use client";

import { useForm } from "react-hook-form";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useAddNoticeMutation } from "@/redux/api/api";
import { TGenericErrorResponse, TNotice } from "@/types/types";
import { toast } from "sonner";



export default function NoticePage() {
    const [Post, {isLoading}] = useAddNoticeMutation();

    const form = useForm<TNotice>({
        defaultValues: {
            notice: "",
        },
    });

    const onSubmit = async (data: TNotice) => {
        try {
            const res = await Post(data).unwrap();
            if (res.statusCode === 200) {
                toast.success(res.message);
                 form.reset();
            }
        } catch (error: unknown) {
            console.log(error);
            const err = error as { data: TGenericErrorResponse };

            if (err?.data?.errorSources && Array.isArray(err.data.errorSources)) {
                err.data.errorSources.forEach(({ path, message }) => {
                    form.setError(path as keyof TNotice, {
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
        <div className="max-w-xl mx-auto mt-10 p-4 border rounded-lg shadow">
            <h1 className="text-xl font-bold mb-4">নতুন নোটিশ যোগ করুন</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="notice"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>নোটিশ</FormLabel>
                                <FormControl>
                                    <Textarea
                                        {...field}
                                        placeholder="এখানে নোটিশ লিখুন..."
                                        rows={5}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-end">
                        <Button variant="outline" disabled={isLoading} className="cursor-pointer" type="submit">পোস্ট করুন</Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}
