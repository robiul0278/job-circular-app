"use client";

import { BookOpen, Calendar, CheckCircle, FileText} from "lucide-react";
import { toast } from "sonner";

const StatsCard = () => {
  const handleClick = (label: string) => {
    toast(`${label} সেকশনটি শীঘ্রই আপডেট হবে!`);
  };

  const stats = [
    { label: "চাকরির প্রস্তুতি", icon: BookOpen },
    { label: "পরীক্ষার সময়সূচী", icon: Calendar },
    { label: "পরীক্ষার ফলাফল", icon: CheckCircle },
    { label: "ব্লগ/নিউজ", icon: FileText },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
      {stats.map(({ label, icon: Icon }, index) => (
        <button
          key={index}
          onClick={() => handleClick(label)}
          className="bg-green-800 text-white rounded-lg p-3 flex items-center gap-2 hover:bg-green-700 transition-colors duration-200 w-full"
        >
          <Icon className="w-5 h-5" />
          <p className="text-xs sm:text-sm font-medium">{label}</p>
        </button>
      ))}
    </div>
  );
};

export default StatsCard;
