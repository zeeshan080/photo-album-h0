import React, { Suspense } from "react";
import Loading from "../loading";
import GalleryComponent from "../components/features/galleryComponent";
import cloudinary from "cloudinary";
import { searchResult } from "../types/common";

type Props = {};

export default async function Gallery({}: Props) {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(10)
    .execute()) as { resources: searchResult[] };
    
  return (
    <Suspense fallback={<Loading />}>
      <main>
        <GalleryComponent images={results.resources} title={"Favorites"}/>
      </main>
    </Suspense>
  );
}
