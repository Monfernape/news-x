"use client";

import { getGuardianNewsArticleById } from "@/app/api/guardianNewsApi/getGuardianNews";
import { MoreArticles } from "@/components/MoreArticles";
import { Tags } from "@/components/Tags";
import { LoadingWrapper } from "@/components/ui/LoadingWrapper";
import { GuardianArticleViewSchema } from "@/lib/types";
import { Label } from "@radix-ui/react-label";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Deatil() {
  const [data, setData] = useState<GuardianArticleViewSchema>();

  const { id } = useParams();

  const postId = Array.isArray(id) ? id.join("/") : id;

  useEffect(() => {
    getGuardianNewsArticleById(postId).then((res) => {
      setData(res);
    });
  }, [postId]);

  return (
    <LoadingWrapper isLoading={!data}>
      <div className="flex flex-col py-4 gap-6 w-full">
        <div className="flex items-center gap-2 justify-center">
          <div className="bg-chip py-1 px-3 rounded-lg">
            <p className="font-news text-xs">{data?.content?.sectionName}</p>
          </div>
          <p className="font-news text-sm tetx-font-light">
            {data?.content?.webPublicationDate}
          </p>
        </div>

        <p className="font-news text-5xl text-center">
          {data?.content?.webTitle}
        </p>
        <hr />
        <div className="flex justify-center">
          <Image
            src={data?.content?.fields?.thumbnail ?? ""}
            width={100}
            height={100}
            alt=""
            className="max-w-96 w-full h-64 rounded object-cover"
          />
        </div>
        <div className="flex gap-4 flex-wrap md:flex-nowrap">
          <div className="flex gap-4 flex-col">
            {data?.content?.fields?.body ? (
              <>
                <Label className="font-news font-semibold text-2xl">
                  Description
                </Label>
                <div
                  className="font-news text-lg flex flex-col gap-4 [&>p>a]:font-bold"
                  dangerouslySetInnerHTML={{
                    __html: data?.content?.fields?.body,
                  }}
                />
              </>
            ) : (
              "No Description"
            )}
          </div>
          <Tags tags={data?.content?.tags} />
        </div>
        <hr className="bg-black h-1" />

        {data?.relatedContent && <MoreArticles data={data?.relatedContent} />}
      </div>
    </LoadingWrapper>
  );
}
