import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function formatDateInBangla(date: string) {
  const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

  // ইংরেজি সংখ্যাগুলোকে বাংলায় রূপান্তর করার ফাংশন
  function toBanglaNumber(numStr: string) {
    return numStr.replace(/\d/g, (digit) => banglaDigits[parseInt(digit)]);
  }

  const formatted = new Date(date).toLocaleDateString('bn-BD', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return toBanglaNumber(formatted);
}



export function timeAgo(date: string | Date): string {
  const now = new Date();
  const postedDate = new Date(date);
  const seconds = Math.floor((now.getTime() - postedDate.getTime()) / 1000);

  const intervals: [number, string][] = [
    [31536000, "year"],
    [2592000, "month"],
    [86400, "day"],
    [3600, "hour"],
    [60, "minute"],
    [1, "second"],
  ];

  for (const [secs, label] of intervals) {
    const count = Math.floor(seconds / secs);
    if (count >= 1) {
      return `${count} ${label}${count > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}

export function deadlineCountdown(deadline: string | Date): string {
  const now = new Date();
  const target = new Date(deadline);
  const diff = Math.floor((target.getTime() - now.getTime()) / 1000); // সেকেন্ডে

  if (diff <= 0) return "আবেদনের সময় শেষ!";

  const intervals: [number, string][] = [
    [2592000, "মাস বাকি"],
    [86400, "দিন বাকি"],
    [3600, "ঘণ্টা বাকি"],
    [60, "মিনিট বাকি"],
    [1, "সেকেন্ড বাকি"],
  ];

  for (const [secs, label] of intervals) {
    const count = Math.floor(diff / secs);
    if (count >= 1) {
      return `Deadline: ${count} ${label}`;
    }
  }

  return "এক সেকেন্ডেরও কম বাকি!";
}
