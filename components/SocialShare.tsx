"use client"
import {
    FacebookShareButton,
    WhatsappShareButton,
    TelegramShareButton,
    FacebookIcon,
    WhatsappIcon,
    TelegramIcon,
} from "react-share";
import { usePathname } from "next/navigation";

const SocialShare = () => {
    const pathname = usePathname();
    const slugs = decodeURIComponent(pathname);
    const fullUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${slugs}`;

    console.log(fullUrl, "SocialShare URL");

    return (
        <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
            <h3 className="text-sm font-medium mb-2">শেয়ার করুন:</h3>
            <div className="flex gap-4 items-center">
                {[FacebookShareButton, WhatsappShareButton, TelegramShareButton].map((ShareBtn, idx) => {
                    const Icon = [FacebookIcon, WhatsappIcon, TelegramIcon][idx];
                    return (
                        <ShareBtn
                            key={idx}
                            url={fullUrl}
                            className="transition-transform hover:scale-110 hover:shadow-lg rounded-full"
                        >
                            <Icon size={30} round />
                        </ShareBtn>
                    );
                })}
            </div>
        </div>
    )
}

export default SocialShare;
