import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useState } from "react";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";

export default function AuthModal() {
  const [open, setOpen] = useState(false);
  const [formType, setFormType] = useState<"login" | "register">("login");

  const switchForm = () => {
    setFormType((prev) => (prev === "login" ? "register" : "login"));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="cursor-pointer">লগইন</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md rounded-xl px-6 py-5">
        <DialogTitle className="text-lg font-semibold text-center mb-4">
          {formType === "login" ? "লগইন করুন।" : "অ্যাকাউন্ট তৈরি করুন।"}
        </DialogTitle>

        {formType === "login" ? (
          <LoginForm switchForm={switchForm} closeModal={() => setOpen(false)}/>
        ) : (
          <RegisterForm switchForm={switchForm} />
        )}
      </DialogContent>
    </Dialog>
  );
}
