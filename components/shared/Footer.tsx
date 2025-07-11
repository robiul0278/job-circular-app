'use client';

import {
  Facebook,
  Instagram,
  X,
  Github,
  Youtube,
} from 'lucide-react';
import Link from 'next/link';

type IMenu = {
  name: string;
  href: string;
}

const menuItems: IMenu[] = [
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t-2 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-8">

        {/* Top Links */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-gray-600 dark:text-gray-400" aria-label="Footer Navigation">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="hover:text-black dark:hover:text-white transition duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-gray-600 dark:text-gray-400" aria-label="Social Media Links">
          <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-black dark:hover:text-white transition duration-300">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-black dark:hover:text-white transition duration-300">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="hover:text-black dark:hover:text-white transition duration-300">
            <X className="w-5 h-5" />
          </a>
          <a href="https://github.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-black dark:hover:text-white transition duration-300">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://youtube.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-black dark:hover:text-white transition duration-300">
            <Youtube className="w-5 h-5" />
          </a>
        </div>

        {/* Divider and Copyright */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-6">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2024 <span className="font-semibold">Diploma Jobs BD</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
