"use client";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { CldImage } from "next-cloudinary";
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type Props = {};

export default function EditImage({}: Props) {
  const search = useSearchParams();
  const publicId = search.get("publicId") ?? "";
  const [transformation, setTransformation] = useState<
    undefined | "generative-fill" | "blur" | "grayscale"
  >();
  const [prompt, setPrompt] = useState("");
  const [pendingPrompt, setPendingPrompt] = useState("");

  return (
    <div className="p-6">
      <div className="w-full">
        <Input
          placeholder="Enter Prompt..."
          value={pendingPrompt}
          onChange={(e) => {
            setPendingPrompt(e.currentTarget.value);
          }}
        />
        <Button
          onClick={() => {
            setTransformation("generative-fill");
            setPrompt(pendingPrompt);
          }}
        >
          Apply Generative Fill
        </Button>
      </div>
      <div className="py-3 flex gap-3">
        <Button onClick={() => setTransformation("blur")}>Apply Blur</Button>
        <Button onClick={() => setTransformation("grayscale")}>
          Convert to Gray
        </Button>
        <Button onClick={() => setTransformation(undefined)}>Clear All</Button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <CldImage
            src={publicId}
            alt={"image"}
            width={300}
            height={400}
            className="w-full"
          />
        </div>
        <div>
          {transformation === "generative-fill" && (
            <CldImage
              src={publicId}
              alt={"image"}
              width={300}
              height={400}
              crop="pad"
              fillBackground={{ prompt: prompt }}
              className="w-full"
            />
          )}

          {transformation === "blur" && (
            <CldImage
              src={publicId}
              alt={"image"}
              width={300}
              height={400}
              effects={[{ blur: "800" }]}
              className="w-full"
            />
          )}

          {transformation === "grayscale" && (
            <CldImage
              src={publicId}
              alt={"image"}
              width={300}
              height={400}
              effects={[{ grayscale: true }]}
              className="w-full"
            />
          )}
        </div>
      </div>
    </div>
  );
}

// (
//     <div className="w-full mt-20 flex flex-col justify-center items-center">
//       <span className="text-[18px]">Your Generated Image Is here</span>
//       <span className="text-[12px] py-3">Click on Any Button from Top</span>
//       <span className="p-8">
//         <Loader2 size={24} className="motion-safe:animate-spin " />
//       </span>
//     </div>
//   )
