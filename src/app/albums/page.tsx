import React, { Suspense } from "react";
import Loading from "../loading";
import cloudinary from "cloudinary";
import ViewAlbums from "../components/features/view-ablums";

type Props = {};

export default async function Albums({}: Props) {
  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: { name: string; path: string }[];
  };

  return (
    <Suspense fallback={<Loading />}>
      <main>
        <ViewAlbums folders={folders}/>
      </main>
    </Suspense>
  );
}
