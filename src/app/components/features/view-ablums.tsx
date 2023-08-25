import React from "react";
import { Card, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
  folders: { name: string; path: string }[];
};

export default function ViewAlbums({ folders }: Props) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {folders.map((folder) => (
        <Card key={folder.path}>
          <CardHeader>
            <CardTitle>{folder.name}</CardTitle>
          </CardHeader>
          <CardFooter>
            <Button asChild>
                <Link href={`/albums/${folder.name}`}>View Album</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
