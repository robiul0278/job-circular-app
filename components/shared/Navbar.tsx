'use client';

import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { logout } from "@/redux/features/authSlice";
import { RootState } from "@/redux/store";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import DarkButton from "../DarkButton";
import { Button } from "../ui/button";
import AuthModal from "../auth/auth-modal";
import BookmarkNavButton from "../BookmarkNav";

const menuItems = [
  { name: "হোম", href: "/" },
  { name: "জবস", href: "/jobs" },
  { name: "ব্লগ", href: "/blog" },
  { name: "আমাদের সম্পর্কে", href: "/about" },
  { name: "যোগাযোগ", href: "/contact" },
];

const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state: RootState) => state.auth);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    dispatch(logout());
    router.replace('/');
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-2 lg:px-0">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <Link href="/">
            <div className="border border-black dark:border-white inline-flex items-center">
              <div className="bg-green-800 dark:bg-green-800 px-1.5 py-0.5">
                <span className="text-white font-bold text-sm">Diploma</span>
              </div>
              <div className="px-1.5 py-0.5">
                <span className="text-green-800 dark:text-white font-bold text-sm">Jobs BD</span>
              </div>
            </div>

          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center flex-grow gap-6">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <span className="text-md font-medium text-gray-700 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-400 transition">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <DarkButton />
            <BookmarkNavButton />
            {user ? (
              <>
                {user.role === 'admin' && (
                  <Link href="/dashboard">
                    <span className="text-sm text-gray-700 dark:text-gray-300 hover:text-green-800 dark:hover:text-white transition cursor-pointer">
                      পোস্ট করুন
                    </span>
                  </Link>
                )}
                <Button
                  variant="default"
                  onClick={handleLogout}
                  className="text-sm cursor-pointer bg-green-800 hover:bg-green-800 dark:bg-green-800 dark:hover:bg-green-800 text-white hover:text-white"
                >
                  লগআউট
                </Button>
              </>
            ) : (
              <AuthModal />
            )}
          </div>

          {/* Mobile Right Side: Dark / Bookmark / Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <DarkButton />
            <BookmarkNavButton />
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-4 pb-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col gap-3 pt-4">
              {menuItems.map((item) => (
                <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
                  <span className="block text-base font-medium text-gray-700 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-400 transition">
                    {item.name}
                  </span>
                </Link>
              ))}
              {user ? (
                <>
                  {user.role === 'admin' && (
                    <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                      <span className="text-sm text-gray-700 dark:text-gray-300 hover:text-green-800 dark:hover:text-white transition cursor-pointer">
                        পোস্ট করুন
                      </span>
                    </Link>
                  )}
                  <Button
                    variant="outline"
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="mt-2 text-sm bg-green-800 text-white hover:bg-green-800 dark:bg-green-800 dark:hover:bg-green-800"
                  >
                    লগআউট
                  </Button>
                </>
              ) : (
                <AuthModal />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
