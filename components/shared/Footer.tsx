import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

const menuItems = [
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-12 pb-8">

      {/* Top Divider Glow */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-40"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-10 text-center">

        {/* Menu Links */}
        <nav className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm font-medium text-gray-700 dark:text-gray-300">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-green-500 after:transition-all hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* WhatsApp CTA */}
        <div className="backdrop-blur-md bg-green-100/60 dark:bg-green-800/30 border border-green-200 dark:border-green-700 rounded-xl px-6 py-4 w-fit mx-auto shadow-lg flex items-center gap-3 hover:scale-105 transition-transform duration-200">
          <MessageCircle className="w-5 h-5 text-green-700 dark:text-green-400" />
          <a
            href="https://wa.me/8801700000000?text=Hello%2C%20I%20want%20to%20post%20a%20job"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-green-800 dark:text-green-400 hover:underline"
          >
            যেকোনো তথ্যের জন্য WhatsApp-এ যোগাযোগ করুন
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-gray-700"></div>

        {/* Copyright */}
        <p className="text-xs text-gray-600 dark:text-gray-400">
          © 2024 <span className="font-semibold text-gray-800 dark:text-gray-200">Diploma Jobs BD</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
