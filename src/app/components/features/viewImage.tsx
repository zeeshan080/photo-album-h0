"use client";
import { setAsFavorites } from "@/app/gallery/actions";
import { Pencil, Plus } from "lucide-react";
import { CldImage } from "next-cloudinary";
import { usePathname } from "next/navigation";
import React, { useState, useTransition } from "react";
import AddAlbum from "./add-album";
import Link from "next/link";

type Props = {
  publicId: string;
  alt: string;
  width: number;
  height: number;
  tags: string[];
};

export default function ViewImage({
  publicId,
  alt,
  width,
  height,
  tags,
}: Props) {
  const [transition, startTransition] = useTransition();
  const pathname = usePathname();
  const isFavorited = tags.includes("favorite");
  const [open,setOpen] = useState(false);

  const handleToggle = ()=> {
      setOpen(!open)
  }
  const handleFavorite = (favoriate: boolean) => {
    startTransition(() => {
      setAsFavorites(publicId, favoriate, pathname);
    });
  };
  return (
    <div>
      <AddAlbum open={open} handleToggle={handleToggle} publicId={publicId}/>
      <div className="relative flex justify-between items-center">
        {isFavorited ? (
          <div
            onClick={() => handleFavorite(false)}
            className="absolute top-4 left-3 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#f00"
              viewBox="0 0 24 24"
              strokeWidth={0}
              stroke="currentColor"
              className="w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
        ) : (
          <div
            onClick={() => handleFavorite(true)}
            className="absolute top-4 left-3 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#f00"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
        )}
        <div className="absolute top-4 right-3 cursor-pointer flex gap-2 ">
          <div onClick={handleToggle} className="p-[5px] cursor-pointer font-semibold bg-slate-900/40 rounded-[4px] hover:bg-slate-900">
            <Plus size={13} color="#fbfcfa" />
          </div>
          <Link href={`/edit?publicId=${publicId}`} className="p-[5px] cursor-pointer bg-slate-900/40 rounded-[4px] hover:bg-slate-900">
            <Pencil size={13} color="#fff" />
          </Link>
        </div>
      </div>
      <CldImage
        src={publicId}
        alt={alt}
        width={width}
        height={height}
        className="w-full"
      />
    </div>
  );
}
