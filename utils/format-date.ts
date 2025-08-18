export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('EN-GB', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function deadlineCountdown(deadline: string | Date): string {
  const now = new Date();
  const target = new Date(deadline);
  const diff = Math.floor((target.getTime() - now.getTime()) / 1000);

  if (diff <= 0) return "(সময় শেষ!)";

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
      return `${count} ${label}`;
    }
  }

  // fallback return
  return "(১ সেকেন্ড বাকি)";
}


//date formatting for job post