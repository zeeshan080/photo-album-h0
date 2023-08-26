"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2, Search } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
  initialSearch: string;
};

export default function Searchbar({ initialSearch }: Props) {
  const [tagName, setTagName] = useState(initialSearch ? initialSearch : "");
  const router = useRouter();

  useEffect(() => {
    setTagName(initialSearch)
  }, [initialSearch])
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/gallery/?search=${tagName}`);
    router.refresh();
  };

  return (
    <form className="flex gap-3 w-full p-4" onSubmit={handleSubmit}>
      <div className="flex-grow">
        <Input
          className="w-full"
          placeholder="Search..."
          value={tagName}
          onChange={(e) => setTagName(e.currentTarget.value)}
        />
      </div>
      <div className="flex">
        {
          <Button type="submit">
            <Search className="mr-1" size={14} /> Search
          </Button>
        }
      </div>
    </form>
  );
}
