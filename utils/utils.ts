


export const formatQuery = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);


export function numberToBangla(num: number | string): string {
  const enToBnDigits: Record<string, string> = {
    '0': '০',
    '1': '১',
    '2': '২',
    '3': '৩',
    '4': '৪',
    '5': '৫',
    '6': '৬',
    '7': '৭',
    '8': '৮',
    '9': '৯',
  };

  return num.toString().split('').map(char => enToBnDigits[char] || char).join('');
}


export function categoryToBangla(category: string): string {
  const enToBnCategory: Record<string, string> = {
    'government': 'সরকারি চাকরি',
    'private': 'বেসরকারি চাকরি',
    'autonomous': 'স্বায়ত্তশাসিত',
  };

  return enToBnCategory[category] || category;
}



export function generateSlug(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^\u0980-\u09FFa-zA-Z0-9\s-]/g, '') // বাংলা, ইংরেজি, সংখ্যা, স্পেস রাখে
    .replace(/\s+/g, '-')         // স্পেস → dash
    .replace(/-+/g, '-')          // একাধিক dash → একটাই
    .replace(/^-+|-+$/g, '');     // শুরু ও শেষে dash কেটে ফেলে
}

