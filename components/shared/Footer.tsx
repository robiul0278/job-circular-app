'use client';

import {
  Facebook,
  Instagram,
  X,
  Github,
  Youtube,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t-2 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-8">

        {/* Top Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-gray-600 dark:text-gray-400">
          {['About', 'Blog', 'Jobs', 'Press', 'Accessibility', 'Partners'].map((item, idx) => (
            <a
              key={idx}
              href="#"
              className="hover:text-black dark:hover:text-white transition duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-gray-600 dark:text-gray-400">
          <a href="#" aria-label="Facebook" className="hover:text-black dark:hover:text-white transition duration-300">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-black dark:hover:text-white transition duration-300">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Twitter / X" className="hover:text-black dark:hover:text-white transition duration-300">
            <X className="w-5 h-5" />
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-black dark:hover:text-white transition duration-300">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-black dark:hover:text-white transition duration-300">
            <Youtube className="w-5 h-5" />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-6">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2024 <span className="font-semibold">Your Company, Inc.</span> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
