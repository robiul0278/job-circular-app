'use client';

import { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

type ImageWithDownloadProps = {
    src: string;
    index: number;
    title: string;
};

export default function ImageWithDownload({ src,index, title}: ImageWithDownloadProps) {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleImageDownload = async () => {
        try {
            setIsDownloading(true); // Download start
            const response = await fetch(src);
            const blob = await response.blob();

            const urlParts = src.split("/");
            const defaultFilename = urlParts[urlParts.length - 1] || "download.jpg";

            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = defaultFilename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            setIsDownloading(false); // Download finished
        } catch (error) {
            setIsDownloading(false);
            console.error("Download failed:", error);
        }
    };

    return (
        <div className="flex flex-col items-center space-y-2">
            <Image
                src={src}
                 alt={title}
                width={1200}
                height={600}
                className="w-full h-auto rounded-md"
            />
            <Button
                variant="link"
                onClick={handleImageDownload}
                className="text-sm text-green-800 hover:underline"
                disabled={isDownloading}
            >
                {isDownloading ? "ডাউনলোড হচ্ছে..." : `ডাউনলোড করুন (Image-${index + 1})`}
            </Button>
        </div>
    );
}
