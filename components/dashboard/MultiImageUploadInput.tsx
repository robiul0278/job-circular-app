"use client";

import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import {
    FormField,
    FormItem,
    FormControl,
    FormMessage,
} from "../ui/form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Control, FieldPath, FieldValues } from "react-hook-form";

type MultiImageUploadInputProps<T extends FieldValues> = {
    control: Control<T>;
    name: FieldPath<T>;
    label?: string;
    onUpload?: (urls: string[]) => void;
};

export default function MultiImageUploadInput<T extends FieldValues>({
    control,
    name,
    label = "Upload Images",
    onUpload,
}: MultiImageUploadInputProps<T>) {
    const [previews, setPreviews] = useState<string[]>([]);
    const [isUploading, setIsUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="space-y-2 flex gap-6">
                    <div className="space-y-2">
                        <Label htmlFor={name}>{label}</Label>
                        <FormControl>
                            <Input
                                id={name}
                                type="file"
                                accept="image/*"
                                multiple
                                disabled={isUploading}
                                className="w-56"
                                onChange={async (e) => {
                                    const files = e.target.files;
                                    if (!files || files.length === 0) return;

                                    setError(null);
                                    setIsUploading(true);

                                    const tempPreviews: string[] = [];
                                    const tempUrls: string[] = [];

                                    for (const file of Array.from(files)) {
                                        tempPreviews.push(URL.createObjectURL(file));

                                        const data = new FormData();
                                        data.append("file", file);
                                        data.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_PRESET!);
                                        data.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!);

                                        try {
                                            const res = await axios.post(
                                                `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
                                                data
                                            );
                                            tempUrls.push(res.data.secure_url);
                                        } catch (err) {
                                            console.error(err);
                                            setError("এক বা একাধিক ছবি আপলোড করতে ব্যর্থ হয়েছে।");
                                        }
                                    }

                                    setPreviews(tempPreviews);
                                    field.onChange(tempUrls); // ✅ সব URL পাঠানো হচ্ছে form-এ
                                    onUpload?.(tempUrls);
                                    setIsUploading(false);
                                }}
                            />
                        </FormControl>
                        <FormMessage />
                        <i className="text-sm text-amber-600">একাধিক ছবি থাকলে, <hr /> একসাথে সিলেক্ট করে  আপলোড করুন !</i>
                        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
                    </div>

                    {/* Preview */}
                    {previews.length > 0 && (
                        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                            {previews.map((src, idx) => (
                                <div key={idx} className="flex flex-col items-center space-y-1">
                                    <Image
                                        width={300}
                                        height={300}
                                        src={src}
                                        alt={`Preview ${idx + 1}`}
                                        className="w-48 h-32 object-cover rounded border"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </FormItem>
            )}
        />
    );
}
