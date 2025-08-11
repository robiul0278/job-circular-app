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

export default function RegisterForm({ switchForm }: { switchForm: () => void }) {

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

      console.log(error);
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
          className="w-full cursor-pointer"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "সাইন আপ হচ্ছে..." : "সাইন আপ"}
        </Button>

        <p className="text-center text-sm text-gray-600">
          ইতোমধ্যে একাউন্ট আছে?{" "}
          <button
            type="button"
            onClick={switchForm}
            className="text-green-700 hover:underline focus:outline-none"
          >
            লগইন করুন
          </button>
        </p>
      </form>
    </Form>
  );
}
