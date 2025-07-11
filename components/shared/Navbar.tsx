'use client';

import Link from "next/link";
import Image from "next/image";
import DarkButton from "../dark-button";
import { Button } from "../ui/button";
import AuthModal from "../auth/auth-modal";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/features/authSlice";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import BookmarkNavButton from "../bookmark-nav";

const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    dispatch(logout());
    router.replace('/');
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Category", href: "/technology" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={40} height={40} priority />
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              ডিপ্লোমা ক্যারিয়ার
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center flex-grow gap-6">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Right Side: Auth / Dark Mode / Bookmark */}
          <div className="hidden md:flex items-center gap-4">
            <DarkButton />

            {/* Bookmark Button */}
            <BookmarkNavButton />

            {user ? (
              <>
                {user.role === 'admin' && (
                  <Link href="/dashboard">
                    <span className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition cursor-pointer">
                      পোস্ট করুন
                    </span>
                  </Link>
                )}

                <Button onClick={handleLogout} className="text-sm cursor-pointer">
                  লগআউট
                </Button>
              </>
            ) : (
              <AuthModal />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
