import React, { useEffect, useState } from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { getGuardianNewsArticles } from "@/app/api/guardianNewsApi/getGuardianNews";
import { useRouter } from "next/navigation";
import { GuardianArticleSchema } from "@/lib/types";

interface Props {
  className?: string;
}

export const Trending = ({ className }: Props) => {
  const [data, setData] = useState<GuardianArticleSchema[]>([]);

  const router = useRouter();

  useEffect(() => {
    getGuardianNewsArticles({
      searchQuery: "news",
      orderBy: "newest",
    }).then((res) => {
      setData(res as unknown as GuardianArticleSchema[]);
    });
  }, []);

  const viewPost = (id: string) => {
    router.push(`/post/${id}`);
  };

  return (
    <Carousel
      className={`${className}`}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent>
        {data?.map((article, index) => (
          <CarouselItem key={index} onClick={() => viewPost(article.id || "")}>
            <Card className="h-60 md:h-80 relative rounded overflow-hidden after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-primary after:z-10 after:opacity-40">
              {article?.fields?.thumbnail ? (
                <Image
                  src={article.fields?.thumbnail}
                  alt={article.webTitle}
                  sizes="100vw"
                  width={500}
                  height={300}
                  className="w-full h-full rounded"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg">
                  <span className="text-gray-500 text-sm">
                    No Image Available
                  </span>
                </div>
              )}
            </Card>
            <div className="absolute bottom-4 px-4 w-full z-10">
              <p className="font-news text-xl text-white">{article.webTitle}</p>
              <p className="font-news text-sm text-white">
                {article.sectionName}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
