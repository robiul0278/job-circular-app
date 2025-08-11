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
import { LoginFormType } from "@/types/auth-types";
import { useLoginUserMutation } from "@/redux/api/api";
import { toast } from "sonner";
import { TGenericErrorResponse } from "@/types/types";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/redux/features/authSlice";

export default function LoginForm({ switchForm, closeModal }: { switchForm: () => void, closeModal: () => void }) {
    const dispatch = useDispatch();
    const [login] = useLoginUserMutation();

    const form = useForm<LoginFormType>({
        defaultValues: {
            email: "",
            password: "",
        },
    });


    const onSubmit = async (data: LoginFormType) => {
        try {
            const res = await login(data).unwrap();
            if (res.statusCode === 200) {
                const { accessToken, user } = res.data;
                // Save to Redux store
                dispatch(setCredentials({ user }));
                // Save to localStorage
                localStorage.setItem("accessToken", accessToken);
                toast.success(res.message);
                closeModal();
            }
        } catch (error: unknown) {
            console.log(error);
            const err = error as { data: TGenericErrorResponse };

            if (err?.data?.errorSources && Array.isArray(err.data.errorSources)) {
                err.data.errorSources.forEach(({ path, message }) => {
                    form.setError(path as keyof LoginFormType, {
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
                                    placeholder="আপনার ইমেইল লিখুন"
                                    className="focus:outline-none focus:ring-0 focus:border-transparent"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />


                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <Label htmlFor="password">Password</Label>
                            <FormControl>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="আপনার পাসওয়ার্ড লিখুন"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* 👉 Forget Password link */}
                <div className="text-sm text-right">
                    <button
                        type="button"
                        onClick={() => {
                            // তুমি চাইলে এখানে modal/modal trigger বা router.push("/forgot-password") করতে পারো
                            alert("পাসওয়ার্ড রিসেট ফিচার এখনও অ্যাক্টিভ না!");
                        }}
                        className="text-green-700 hover:underline focus:outline-none"
                    >
                        পাসওয়ার্ড ভুলে গেছেন?
                    </button>
                </div>

                <Button
                    type="submit"
                    className="w-full cursor-pointer"
                    disabled={form.formState.isSubmitting}
                >
                    {form.formState.isSubmitting ? "লগইন হচ্ছে..." : "লগইন"}
                </Button>

                <p className="text-center text-sm text-gray-600">
                    একাউন্ট নেই?{" "}
                    <button
                        type="button"
                        onClick={switchForm}
                        className="text-green-700 hover:underline focus:outline-none"
                    >
                        রেজিস্ট্রেশন করুন
                    </button>
                </p>
            </form>
        </Form>
    );
}
