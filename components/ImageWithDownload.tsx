"use client";

import Image from "next/image";
import { Button } from "./ui/button";

type ImageWithDownloadProps = {
    src: string;
    index: number;
};

export default function ImageWithDownload({ src, index }: ImageWithDownloadProps) {
    const handleImageDownload = async () => {
        try {
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
        } catch (error) {
            console.error("Download failed:", error);
        }
    };

    return (
        <div className="flex flex-col items-center space-y-2">
            <Image
                src={src}
                alt="Image preview"
                width={1200}
                height={600}
                className="w-full h-auto rounded-md"
            />
            <Button
                variant="link"
                onClick={handleImageDownload}
                className="text-sm text-teal-600 hover:underline "
            >
                ডাউনলোড করুন (Image-{index + 1})
            </Button>
        </div>
    );
}
