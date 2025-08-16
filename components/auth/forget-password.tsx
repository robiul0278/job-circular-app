'use client';

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "../ui/form";
import { useForgetPasswordMutation } from "@/redux/api/api";
import { toast } from "sonner";
import { TGenericErrorResponse } from "@/types/types";

type TResetForm = {
    email: string;
}

export default function ForgetPasswordForm({ switchForm, closeModal }: { switchForm: () => void, closeModal: () => void }) {
    const [Forget] = useForgetPasswordMutation();

    const form = useForm<TResetForm>({
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = async (data: TResetForm) => {
        try {
            const res = await Forget(data).unwrap();
            if (res.statusCode === 200) {
                toast.success(res.message);
                closeModal();
            }
        } catch (error: unknown) {
            const err = error as { data: TGenericErrorResponse };
            if (err?.data?.errorSources && Array.isArray(err.data.errorSources)) {
                err.data.errorSources.forEach(({ path, message }) => {
                    form.setError(path as keyof TResetForm, {
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
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <Label htmlFor="email">Email</Label>
                            <FormControl>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="রেজিস্টার করা ইমেইল লিখুন"
                                    className="focus:outline-none focus:ring-0 focus:border-transparent"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    className="w-full cursor-pointer text-white bg-green-700 hover:bg-green-800"
                    disabled={form.formState.isSubmitting}
                >
                    {form.formState.isSubmitting ? "Forgetting ..." : "Forget Password"}
                </Button>

                <p className="text-center text-sm ">
                    Password মনে আছে ?{" "}
                    <button
                        type="button"
                        onClick={switchForm}
                        className="text-green-500 hover:underline focus:outline-none"
                    >
                        লগইন করুন!
                    </button>
                </p>
            </form>
        </Form>
    );
}
