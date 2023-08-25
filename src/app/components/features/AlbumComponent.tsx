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
  title: string;
};
const MAX_COLUMNS = 4;

export default function AlbumComponent({ images, title }: Props) {
  const router = useRouter();
  function getColumns(colIndex: number) {
    return images.filter((resource, idx) => idx % MAX_COLUMNS === colIndex);
  }

  return (
    <article className="m-3">
      <section className="flex justify-between items-center p-3">
        <h1 className="text-[24px] font-semibold">{title}</h1>
      </section>
      <section className="w-full grid grid-cols-4 gap-4">
        {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
          (images, idx) =>
          <div key={idx} className="flex flex-col gap-4">
            {images.map((image) => (
              <ViewImage
                key={image.public_id}
                publicId={image.public_id}
                tags={image.tags}
                alt={"image"}
                width={image.width}
                height={image.height}
              />
            ))}
            </div>
        )}
      </section>
    </article>
  );
}
