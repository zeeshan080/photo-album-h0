import React, { Suspense } from "react";
import cloudinary from "cloudinary";
import { searchResult } from "@/app/types/common";
import Loading from "@/app/loading";
import AlbumComponent from "@/app/components/features/AlbumComponent";

type Props = {
    params: {albumName: string}
};

export default async function AlbumName({params}: Props) {
  const results = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${params.albumName}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(10)
    .execute()) as { resources: searchResult[] };

  return (
    <Suspense fallback={<Loading />}>
      <main>
        <AlbumComponent images={results.resources} title={`Album ${params.albumName}`}/>
      </main>
    </Suspense>
  );
}
