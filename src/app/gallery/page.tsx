import React, { Suspense } from "react";
import Loading from "../loading";
import GalleryComponent from "../components/features/galleryComponent";
import cloudinary from "cloudinary";
import { searchResult } from "../types/common";

type Props = {
  searchParams: { search: string };
};

export default async function Gallery({ searchParams: { search } }: Props) {
  const results = (await cloudinary.v2.search
    .expression(`resource_type:image ${search ? `AND tags=${search}` : ""}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(20)
    .execute()) as { resources: searchResult[] };

  return (
    <Suspense fallback={<Loading />}>
      <main>
        <GalleryComponent images={results.resources} title={"Gallery"} search={search}/>
      </main>
    </Suspense>
  );
}
