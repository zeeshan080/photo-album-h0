"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2, Plus } from "lucide-react";
import { addImageToAlbum } from "@/app/albums/actions";

type Props = {
  open: boolean;
  publicId: string;
  handleToggle: () => void;
};

export default function AddAlbum({ open, handleToggle, publicId }: Props) {
  const [albumName, setAlbumName] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const handleAddtoAlbum = async () => {
    setisLoading(true);
    const addAlbum = await addImageToAlbum(publicId, albumName);
    if (addAlbum) {
      handleToggle();
    }
    setisLoading(false);
  };
  return (
    <div>
      <Dialog open={open} onOpenChange={handleToggle}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add to Album</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-y-4">
            <div>
              <Label className="py-3 pl-1">Album Name</Label>
              <Input
                placeholder="Enter Album Name"
                value={albumName}
                onChange={(e) => setAlbumName(e.currentTarget.value)}
              />
            </div>
            <div className="flex justify-end w-full">
              {isLoading ? (
                <Button disabled>
                  <Loader2 className="animate-spin ease-linear mr-1" size={14} /><span className="animate-pulse">
                  Adding...
                  </span>
                </Button>
              ) : (
                <Button onClick={handleAddtoAlbum}>
                  <Plus className="mr-1" size={14} /> Add
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
