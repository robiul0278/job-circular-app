import Link from "next/link";
import { useSelector } from "react-redux";
import { Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGetBookmarkQuery } from "@/redux/api/api";
import { RootState } from "@/redux/store";
import { Badge } from "./ui/badge";

const BookmarkNavButton = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    const { data: bookmark } = useGetBookmarkQuery(user?._id, {
        skip: !user,
    });

    const count = bookmark?.data?.length || 0;

    return (
        <Link href="/bookmark" title="বুকমার্ক">
            <div className="relative group">
                {/* Bookmark Icon Button */}
                <Button
                    size="icon"
                    variant="ghost"
                    className="  hover:text-blue-600 dark:hover:text-white transition-all cursor-pointer"
                >
                    <Bookmark className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" />
                </Button>

                {/* Stylish, Visible Badge */}
                {count > 0 && (
                    <Badge className="absolute -top-1.5 -right-1.5 h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
                        {count}
                    </Badge>
                )}
            </div>
        </Link>
    );
};

export default BookmarkNavButton;
