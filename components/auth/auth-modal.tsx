'use client'

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";
import ForgetPasswordForm from "./forget-password";
import { useAuthModal } from "@/context/AuthModalContext";

export default function AuthModal() {
  const { open, setOpen, formType, setFormType } = useAuthModal();

  // Login ↔ Register switch করার জন্য
const switchForm = () => {
  if (formType === "login") setFormType("register");
  else setFormType("login");
};

  // Login থেকে ForgetPassword form এ যাওয়ার জন্য
  const goToForgetForm = () => {
    setFormType("forget");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="cursor-pointer text-white hover:text-white bg-green-700 hover:bg-green-800"
        >
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
            goToForgetForm={goToForgetForm}
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
