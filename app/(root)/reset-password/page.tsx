"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const ResetPasswordPage = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-muted px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">পাসওয়ার্ড রিসেট</CardTitle>
          <CardDescription>নতুন পাসওয়ার্ড সেট করুন</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="password">নতুন পাসওয়ার্ড</Label>
            <Input id="password" type="password" placeholder="নতুন পাসওয়ার্ড লিখুন" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">পাসওয়ার্ড পুনরায় লিখুন</Label>
            <Input id="confirmPassword" type="password" placeholder="পাসওয়ার্ড পুনরায় লিখুন" />
          </div>
        </CardContent>

        <CardFooter>
          <Button className="w-full">পাসওয়ার্ড আপডেট করুন</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ResetPasswordPage;
