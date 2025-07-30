
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const BlogPage = () => {
  return (
    <div className="max-w-4xl mx-auto min-h-[70vh] px-4 py-10">
      <h1 className="text-4xl font-bold mb-2">ফিচার ব্লগ</h1>
      <p className="text-muted-foreground mb-6">
        এখানেই ভবিষ্যতে আমাদের ব্লগ ফিচার যুক্ত হবে যেখানে আপনি নতুন নতুন টিপস, আপডেট এবং টিউটোরিয়াল পড়তে পারবেন।
      </p>
      <Separator className="mb-6" />
      <Card className="bg-muted/50 border-dashed border-2">
        <CardContent className="py-12 text-center">
          <h2 className="text-2xl font-semibold mb-2">🚧 নির্মাণাধীন</h2>
          <p className="text-muted-foreground">
            এই সেকশনটি বর্তমানে নির্মাণাধীন। শীঘ্রই এখানে ব্লগ পোস্ট দেখা যাবে।
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogPage;
