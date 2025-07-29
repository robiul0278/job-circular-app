"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import {
  Control,
  FieldPath,
  FieldValues,
  useWatch,
  useController,
} from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

type ImageUploadInputProps<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
  label?: string;
  onUpload?: (url: string) => void;
};

export default function ImageUploadInput<T extends FieldValues>({
  control,
  name,
  label = "Upload Image",
  onUpload,
}: ImageUploadInputProps<T>) {
  const { field } = useController({ control, name });
  const watchedValue = useWatch({ control, name });

  const [preview, setPreview] = useState<string | null>(watchedValue || null);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(watchedValue || null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
  if (watchedValue) {
    setPreview(watchedValue);
    setUploadedUrl(watchedValue);
  }
}, [watchedValue]);

  const handleUpload = async (file: File) => {
    setError(null);
    setIsUploading(true);
    const localPreview = URL.createObjectURL(file);
    setPreview(localPreview);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_PRESET!);
    formData.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!);

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        formData
      );
      const url = res.data.secure_url;
      setUploadedUrl(url);
      field.onChange(url);
      onUpload?.(url);
    } catch (err) {
      console.error(err);
      setError("Failed to upload image. Try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input
                type="file"
                accept="image/*"
                disabled={isUploading}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleUpload(file);
                }}
              />
            </FormControl>
            <FormMessage />
            {error && <p className="text-sm text-red-500">{error}</p>}

            {uploadedUrl && (
              <div className="space-y-2 mt-4">
                <Label>আপলোড করা ছবি লিঙ্কঃ</Label>
                <div className="flex items-center gap-2">
                  <Input readOnly value={uploadedUrl} />
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => navigator.clipboard.writeText(uploadedUrl)}
                  >
                    Copy
                  </Button>
                </div>
              </div>
            )}
          </div>

          {preview && (
            <div className="mt-4">
              <Image
                width={300}
                height={300}
                src={preview}
                alt="Preview"
                className="w-48 h-32 object-cover rounded border"
              />
            </div>
          )}
        </FormItem>
      )}
    />
  );
}
