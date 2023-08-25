"use server";
import cloudinary from "cloudinary";

export const addImageToAlbum = async (publicId: string, albumName: string) => {
  const existAlbum = await cloudinary.v2.api.create_folder(albumName);
  try {
    await cloudinary.v2.uploader.rename(publicId, `${existAlbum.path}/${publicId}`);
    return true;
  } catch (error) {
    return false;
  }
};
