export function formatDateTimeBangla(date: string) {
  const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

  function toBanglaNumber(numStr: string) {
    return numStr.replace(/\d/g, (digit) => banglaDigits[parseInt(digit)]);
  }

  const dt = new Date(date);

  const datePart = dt.toLocaleDateString('bn-BD', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const hour = dt.getHours();
  const minute = dt.getMinutes();

  // ২৪ ঘন্টা থেকে ১২ ঘন্টায় রূপান্তর
  const ampmHour = hour % 12 === 0 ? 12 : hour % 12;

  // সকাল, দুপুর, বিকেল, রাত নির্ধারণ (২৪ ঘন্টা ঘড়ির উপর ভিত্তি করে)
  let period = '';
  if (hour >= 1 && hour < 12) {
    period = 'সকাল';
  } else if (hour >= 12 && hour < 15) {
    period = 'দুপুর';
  } else if (hour >= 15 && hour < 18) {
    period = 'বিকেল';
  } else {
    period = 'রাত';
  }

  const timePart = `${toBanglaNumber(ampmHour.toString())}:${toBanglaNumber(minute.toString().padStart(2, '0'))}`;

  return `${toBanglaNumber(datePart)} | ${period} ${timePart}`;
}
