'use client';

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { RegisterFormType } from "@/types/auth-types";
import { useRegisterUserMutation } from "@/redux/api/api";
import { TGenericErrorResponse } from "@/types/types";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterForm({ switchForm }: { switchForm: () => void }) {
const [showPassword, setShowPassword] = useState(false);
  const [Register] = useRegisterUserMutation()

  const form = useForm<RegisterFormType>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: RegisterFormType) => {
    try {
      const response = await Register(data).unwrap();
      toast.success(response.message);
      switchForm();
    } catch (error: unknown) {

      const err = error as { data: TGenericErrorResponse };

      if (err?.data?.errorSources && Array.isArray(err.data.errorSources)) {
        err.data.errorSources.forEach(({ path, message }) => {
          form.setError(path as keyof RegisterFormType, {
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <Label htmlFor="password">Password</Label>
                                <div className="relative">
                                    <FormControl>
                                        <Input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="আপনার পাসওয়ার্ড লিখুন"
                                            {...field}
                                        />
                                    </FormControl>

                                    {/* 👁 Toggle button */}
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute right-2 top-1/2 -translate-y-1/2"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4" />
                                        ) : (
                                            <Eye className="h-4 w-4" />
                                        )}
                                    </Button>
                                </div>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />

        <Button
          type="submit"
          className="w-full cursor-pointer text-white bg-green-700 hover:bg-green-800"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "সাইন আপ হচ্ছে..." : "সাইন আপ"}
        </Button>

        <p className="text-center text-sm">
          ইতোমধ্যে একাউন্ট আছে?{" "}
          <button
            type="button"
            onClick={switchForm}
            className="text-green-500 hover:underline focus:outline-none"
          >
            লগইন করুন
          </button>
        </p>
      </form>
    </Form>
  );
}
