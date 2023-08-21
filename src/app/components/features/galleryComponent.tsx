"use client";
import { CldUploadButton } from "next-cloudinary";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Upload } from "lucide-react";
import { searchResult } from "@/app/types/common";
import ViewImage from "./viewImage";
import { useRouter } from "next/navigation";

type Props = {
  images: searchResult[];
};

export default function GalleryComponent({ images }: Props) {
  const [imageId, setImageId] = useState("");
  const router = useRouter();

  return (
    <article>
      <section className="flex justify-between items-center p-3">
        <h1 className="text-[24px] font-semibold">Gallery</h1>
        <Button asChild>
          <CldUploadButton
            uploadPreset="hackzero"
            //find a  way then upload done
            onUpload={(result) => {
              router.refresh();
            }}
          >
            <Upload size={16} className="mr-1" />
            Upload
          </CldUploadButton>
        </Button>
      </section>
      <section className="w-ful grid grid-cols-4 gap-3 p-4">
        {images.map((image) => (
          <ViewImage
            key={image.public_id}
            publicId={image.public_id}
            tags={image.tags}
            alt={"image"}
            width={400}
            height={300}
          />
        ))}
      </section>
    </article>
  );
}
