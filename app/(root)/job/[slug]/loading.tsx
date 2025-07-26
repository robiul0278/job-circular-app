import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-2">
      <Loader />
      <p className="text-sm text-muted-foreground">চাকরির বিস্তারিত লোড হচ্ছে...</p>
    </div>
  );
}
