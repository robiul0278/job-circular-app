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
import ForgetPasswordForm from "./forget-password";

export default function AuthModal() {
  const [open, setOpen] = useState(false);
  const [formType, setFormType] = useState<"login" | "register" | "forget">(
    "login"
  );

  const switchForm = () => {
    setFormType((prev) => (prev === "login" ? "register" : "login"));
  };

  const goToForgetForm = () => {
    setFormType("forget");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild >
        <Button variant="outline" className="cursor-pointer text-white hover:text-white bg-green-700 hover:bg-green-800">
          লগইন
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md rounded-xl dark:bg-gray-900">
        <DialogTitle className="text-lg font-bold text-green-600 text-center">
          {formType === "login"
            ? "লগইন করুন!"
            : formType === "register"
            ? "অ্যাকাউন্ট তৈরি করুন!"
            : "পাসওয়ার্ড রিসেট করুন!"}
        </DialogTitle>

        {formType === "login" ? (
          <LoginForm
            switchForm={switchForm}
            closeModal={() => setOpen(false)}
            goToForgetForm={goToForgetForm} // Login থেকে Forget এ যাওয়ার জন্য
          />
        ) : formType === "register" ? (
          <RegisterForm switchForm={switchForm} />
        ) : (
          <ForgetPasswordForm
            switchForm={() => setFormType("login")}
            closeModal={() => setOpen(false)}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
