'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import DarkButton from "../DarkButton";
import { Button } from "../ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ফেক session (বাস্তবে replace করো)
  const session = null;
  const signIn = async (provider: string) => console.log(`Sign in with ${provider}`);
  const signOut = async () => console.log("Signed out");

  const menuItems = [
    { name: "হোম", href: "/" },
    { name: "সাম্প্রতিক নিয়োগ", href: "/circulars" },
    { name: "প্রতিষ্ঠান সমূহ", href: "/organizations" },
    { name: "বিভাগ অনুযায়ী", href: "/categories" },
    { name: "পরামর্শ", href: "/guides" },
  ];

  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={40} height={40} priority />
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              ডিপ্লোমা ক্যারিয়ার
            </span>
          </Link>

          {/* Desktop Menu (center) */}
          <div className="hidden md:flex items-center justify-center flex-grow gap-6">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Right Side: Auth / Dark Mode */}
          <div className="hidden md:flex items-center gap-4">
            <DarkButton />
            {session?.user ? (
              <>
                <Link href="/blog/create">
                  <span className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition">
                    পোস্ট করুন
                  </span>
                </Link>
                <Button onClick={signOut} className="text-sm">লগআউট</Button>
                <Link href={`/user/${session.id}`}>
                  <span className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition">
                    {session.user.name}
                  </span>
                </Link>
              </>
            ) : (
              <Button onClick={() => signIn("github")} variant="outline">লগইন</Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-200 focus:outline-none"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden space-y-2 pb-4 mt-2 border-t border-gray-200 dark:border-gray-700">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <span className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md text-base font-medium">
                  {item.name}
                </span>
              </Link>
            ))}

            {session?.user ? (
              <>
                <Link href="/blog/create">
                  <span className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                    পোস্ট করুন
                  </span>
                </Link>
                <button
                  onClick={signOut}
                  className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                >
                  লগআউট
                </button>
                <Link href={`/user/${session.id}`}>
                  <span className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                    {session.user.name}
                  </span>
                </Link>
              </>
            ) : (
              <button
                onClick={() => signIn("github")}
                className="block w-full text-left px-3 py-2 text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md font-semibold"
              >
                লগইন
              </button>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
