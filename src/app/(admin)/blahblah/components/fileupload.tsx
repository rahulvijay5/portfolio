"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RefreshCcwIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ImageUpload = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setError("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      console.log(response);

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const { url } = await response.json();
      console.log(url);
      setImageUrl(url);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="flex flex-col items-center h-full w-full">
      <h1 className="mb-2 text-2xl font-semibold flex items-center justify-between w-full">
        <p>Upload an Image</p>
        {/* <Button asChild onClick={() => router.refresh()} className="md:w-1/4" variant={"outline"}>
            <RefreshCcwIcon />
          </Button> */}
      </h1>
      <Input
        type="file"
        onChange={handleImageUpload}
        className="border rounded-md cursor-pointer p-8 h-full w-full flex items-center justify-center mb-4 text-center hover:shadow-sm"
      />
      {isLoading && <p>Uploading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {imageUrl && (
        <div className="mt-4 w-full">
          <Label htmlFor="imageUrl mb-2">
            <div className="flex justify-between w-full">
              <div>Image uploaded successfully: </div>
              <div className="text-muted-foreground text-sm">
                (Click to copy)
              </div>
            </div>
          </Label>
          <Input
            id="imageUrl"
            onClick={() => {
              navigator.clipboard.writeText(imageUrl);
            }}
            type="url"
            className="cursor-copy"
            placeholder={imageUrl}
          />
          <p className=""></p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
