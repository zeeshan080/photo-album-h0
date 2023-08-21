"use server";
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";

export const setAsFavorites = async (publicId: string,favoriate:boolean) => {
    favoriate ?
    await cloudinary.v2.uploader.add_tag("favorite", [publicId]) :
    await cloudinary.v2.uploader.remove_tag("favorite", [publicId]);
  revalidatePath("/gallery")
};
