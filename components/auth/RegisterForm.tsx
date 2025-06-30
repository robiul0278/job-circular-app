'use client';

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";

const schema = z
  .object({
    name: z.string().min(2, "নাম আবশ্যক"),
    email: z.string().email("সঠিক ইমেইল দিন"),
    password: z.string().min(6, "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "পাসওয়ার্ড মিলছে না",
    path: ["confirmPassword"],
  });

type RegisterFormType = z.infer<typeof schema>;

export default function RegisterForm({
  switchForm,
}: {
  switchForm: () => void;
}) {
  const form = useForm<RegisterFormType>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: RegisterFormType) => {
    console.log("রেজিস্ট্রেশন:", data);
    toast.success("সাইনআপ সফল হয়েছে!");
    switchForm(); // Login ফর্ম দেখাবে
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="name">Name</Label>
              <FormControl>
                <Input id="name" placeholder="আপনার নাম লিখুন" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="email">Email</Label>
              <FormControl>
                <Input id="email" type="email" placeholder="আপনার ইমেইল লিখুন" {...field} />
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
                  placeholder="কমপক্ষে ৬ অক্ষর"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "সাইন আপ হচ্ছে..." : "সাইন আপ"}
        </Button>

        <p className="text-center text-sm text-gray-600">
          ইতোমধ্যে একাউন্ট আছে?{" "}
          <button
            type="button"
            onClick={switchForm}
            className="text-blue-600 hover:underline focus:outline-none"
          >
            লগইন করুন
          </button>
        </p>
      </form>
    </Form>
  );
}
