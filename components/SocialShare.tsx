"use client"
import {
    FacebookShareButton,
    WhatsappShareButton,
    TelegramShareButton,
    FacebookIcon,
    WhatsappIcon,
    TelegramIcon,
} from "react-share";

const SocialShare = ({ title, slug }: { title: string; slug: string }) => {
    const slugs = decodeURIComponent(slug);
    return (
        <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
            <h3 className="text-sm font-medium mb-2">শেয়ার করুন:</h3>
            <div className="flex gap-4 items-center">
                {[FacebookShareButton, WhatsappShareButton, TelegramShareButton].map((ShareBtn, idx) => {
                    const Icon = [FacebookIcon, WhatsappIcon, TelegramIcon][idx];
                    return (
                        <ShareBtn
                            key={idx}
                            url={`http://localhost:3000/circular/${slugs}`}
                            title={title}
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