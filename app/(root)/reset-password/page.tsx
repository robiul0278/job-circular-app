"use client";

import { useForm } from "react-hook-form";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";
import { TGenericErrorResponse } from "@/types/types";
import { useResetPasswordMutation } from "@/redux/api/api";
import { useState } from "react";
import { useAuthModal } from "@/context/AuthModalContext";
import { Eye, EyeOff } from "lucide-react";

type ResetPasswordFormValues = {
  newPassword: string;
};

const ResetPasswordPage = () => {
  const [serverError, setServerError] = useState<string | null>(null);
  const { setOpen, setFormType } = useAuthModal();
 const [showPassword, setShowPassword] = useState(false);
 
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const token = searchParams.get("token") || "";

  const [Reset] = useResetPasswordMutation();

  const form = useForm<ResetPasswordFormValues>({
    defaultValues: {
      newPassword: "",
    },
  });

  const onSubmit = async (data: ResetPasswordFormValues) => {
    setServerError('')
    try {
      const payload = {
        email,
        newPassword: data.newPassword,
        token,
      };
      const res = await Reset(payload).unwrap();
      if (res.statusCode === 200) {
        // Save to localStorage
        toast.success(res.message);
        // AuthModal auto open
        setFormType("login");
        setOpen(true);
      }
    } catch (error: unknown) {
      const err = error as { data: TGenericErrorResponse };

      if (err?.data?.errorSources && Array.isArray(err.data.errorSources)) {
        // শুধু field error গুলো handle করবো
        err.data.errorSources.forEach(({ path, message }) => {
          if (path === "newPassword") {
            form.setError(path as keyof ResetPasswordFormValues, {
              type: "server",
              message,
            });
          } else {
            // বাকিগুলার জন্য শুধু message show করবো
            if (err?.data?.message) {
              setServerError(err.data.message);
            } else {
              toast.error("কিছু সমস্যা হয়েছে, আবার চেষ্টা করুন!");
            }
          }
        })
      }

    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-xl border-2 border-transparent rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold dark:text-gray-300">নতুন পাসওয়ার্ড সেট করুন</CardTitle>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              {/* নতুন পাসওয়ার্ড */}
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <Label htmlFor="newPassword">নতুন পাসওয়ার্ড</Label>
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
                    <FormMessage className="text-amber-600 text-sm" />
                    {serverError && (
                      <p className="text-amber-600 text-sm">{serverError}</p>
                    )}
                  </FormItem>
                )}
              />
              <CardFooter className="p-0">
                <Button
                  type="submit"
                   disabled={form.formState.isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                   {form.formState.isSubmitting ? "আপডেট হচ্ছে..." : "পাসওয়ার্ড আপডেট করুন"}
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