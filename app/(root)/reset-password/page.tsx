"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { TGenericErrorResponse } from "@/types/types";
import { useResetPasswordMutation } from "@/redux/api/api";

// Zod validation
const resetPasswordSchema = z
  .object({
    password: z.string().min(6, "পাসওয়ার্ড অন্তত ৬ অক্ষরের হতে হবে"),
    confirmPassword: z.string().min(6, "পুনরায় পাসওয়ার্ড অন্তত ৬ অক্ষরের হতে হবে"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "পাসওয়ার্ড এবং পুনরায় পাসওয়ার্ড মিলছে না",
    path: ["confirmPassword"],
  });

type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

const ResetPasswordPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const token = searchParams.get("token") || "";
  const [Reset] = useResetPasswordMutation();

  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: ResetPasswordFormValues) => {
    try {
      const payload = {
        email, 
        password: data.password,
        token,
      };
      const res = await Reset(payload).unwrap();
      if (res.statusCode === 200) {
        // Save to localStorage
        toast.success(res.message);
        router.push("/");
      }
    } catch (error: unknown) {
      const err = error as { data: TGenericErrorResponse };
      if (err?.data?.errorSources && Array.isArray(err.data.errorSources)) {
        err.data.errorSources.forEach(({ path, message }) => {
          form.setError(path as keyof ResetPasswordFormValues, {
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
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-xl border-2 border-transparent rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-300">নতুন পাসওয়ার্ড সেট করুন</CardTitle>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              {/* নতুন পাসওয়ার্ড */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <Label htmlFor="password">নতুন পাসওয়ার্ড</Label>
                    <FormControl>
                      <Input
                        {...field}
                        id="password"
                        type="password"
                        placeholder="নতুন পাসওয়ার্ড লিখুন"
                        className="border-gray-300 focus:border-green-500 focus:ring focus:ring-indigo-200"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />

              {/* পুনরায় পাসওয়ার্ড */}
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <Label htmlFor="confirmPassword">পাসওয়ার্ড পুনরায় লিখুন</Label>
                    <FormControl>
                      <Input
                        {...field}
                        id="confirmPassword"
                        type="password"
                        placeholder="পাসওয়ার্ড পুনরায় লিখুন"
                        className="border-gray-300 focus:border-green-500 focus:ring focus:ring-indigo-200"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />

              <CardFooter className="p-0">
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  পাসওয়ার্ড আপডেট করুন
                </Button>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPasswordPage;
