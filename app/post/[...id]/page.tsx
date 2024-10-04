"use client";

import { getGuardianNewsArticleById } from "@/app/api/guardianNewsApi/getGuardianNews";
import { MoreArticles } from "@/components/MoreArticles";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Deatil() {
  const [data, setData] = useState({});

  const { id } = useParams();

  const postId = id?.join("/");

  useEffect(() => {
    getGuardianNewsArticleById(postId).then((res) => {
      setData(res);
    });
  }, [id]);

  return (
    <div className="flex flex-col py-4 gap-6 w-full">
      <div className="flex items-center gap-2 justify-center">
        <div className="bg-chip py-1 px-3 rounded-lg">
          <p className="font-poppin text-xs">{data?.content?.sectionName}</p>
        </div>
        <p className="font-poppin text-sm tetx-font-light">
          {data?.content?.webPublicationDate}
        </p>
      </div>

      <p className="font-poppin text-5xl text-center">
        {data?.content?.webTitle}
      </p>
      <div className="flex justify-center">
        <Image
          src={data?.content?.fields?.thumbnail ?? ""}
          width={100}
          height={100}
          alt=""
          className="max-w-96 w-full h-64 rounded object-cover"
        />
      </div>
      <p className="font-poppin text-sm">Description</p>
      <MoreArticles data={data?.relatedContent} />
    </div>
  );
}
