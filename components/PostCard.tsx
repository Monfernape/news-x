import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";

interface Props {
  className?: string;
}

export const PostCard = ({ className }: Props) => {
  return (
    <Card className={`rounded-lg p-2 ${className}`}>
      <Image src="" alt="" className="w-full h-48 rounded" />
      <div className="py-4 flex flex-col gap-2">
        <p className="font-poppin text-sm font-mediuam text-font-light">
          Category Name
        </p>
        <p className="font-poppin text-base font-medium">Title</p>
      </div>
    </Card>
  );
};
