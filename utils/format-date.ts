export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-GB', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'Asia/Dhaka',
  });
}

export function formatDateTime(date: string) {
  return new Date(date).toLocaleString('en-GB', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Dhaka',
  });
}


export function deadlineCountdown(deadline: string | Date): string {
  // Always get "now" in Dhaka time
  const now = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" })
  );
  // Always parse "deadline" in Dhaka time
  const target = new Date(
    new Date(deadline).toLocaleString("en-US", { timeZone: "Asia/Dhaka" })
  );

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

  return "(১ সেকেন্ড বাকি)";
}

