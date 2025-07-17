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
import { Button } from "../ui/button";
import { Control, FieldPath, FieldValues } from "react-hook-form";

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
  const [preview, setPreview] = useState<string | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor={name}>{label}</Label>
            <FormControl>
              <Input
                id={name}
                type="file"
                accept="image/*"
                disabled={isUploading}
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;

                  setError(null);
                  setIsUploading(true);
                  setPreview(URL.createObjectURL(file));

                  const data = new FormData();
                  data.append("file", file);
                  data.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_PRESET!);
                  data.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!);

                  try {
                    const res = await axios.post(
                      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
                      data
                    );

                    const url = res.data.secure_url;
                    setUploadedUrl(url);
                    field.onChange(url); // ✅ set Cloudinary URL into RHF
                    onUpload?.(url);     // optional callback
                  } catch (err) {
                    console.error(err);
                    setError("Failed to upload image. Try again.");
                  } finally {
                    setIsUploading(false);
                  }
                }}
              />
            </FormControl>
            <FormMessage />
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}

                      {/* Show uploaded URL */}
          {uploadedUrl && (
            <div className="space-y-2 mt-4">
              <Label>আপলোড করা ছবি লিঙ্কঃ </Label>
              <div className="flex items-center gap-2">
                <Input readOnly value={uploadedUrl} />
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  className="cursor-pointer"
                  onClick={() => navigator.clipboard.writeText(uploadedUrl)}
                >
                  Copy
                </Button>
              </div>
            </div>
          )}
          </div>

          {/* Preview */}
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
