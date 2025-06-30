'use client';

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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

const schema = z.object({
    email: z.string().email("সঠিক ইমেইল দিন"),
    password: z.string().min(6, "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে"),
});

type LoginFormType = z.infer<typeof schema>;

export default function LoginForm({
    switchForm,
}: {
    switchForm: () => void;
}) {
    const form = useForm<LoginFormType>({
        resolver: zodResolver(schema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: LoginFormType) => {
        console.log("লগইন:", data);
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
                        className="text-blue-600 hover:underline focus:outline-none"
                    >
                        পাসওয়ার্ড ভুলে গেছেন?
                    </button>
                </div>

                <Button
                    type="submit"
                    className="w-full"
                    disabled={form.formState.isSubmitting}
                >
                    {form.formState.isSubmitting ? "লগইন হচ্ছে..." : "লগইন"}
                </Button>

                <p className="text-center text-sm text-gray-600">
                    একাউন্ট নেই?{" "}
                    <button
                        type="button"
                        onClick={switchForm}
                        className="text-blue-600 hover:underline focus:outline-none"
                    >
                        রেজিস্ট্রেশন করুন
                    </button>
                </p>
            </form>
        </Form>
    );
}
