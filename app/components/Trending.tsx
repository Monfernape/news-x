import React, { useEffect, useState } from "react";
import { Card } from "../../components/ui/card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRouter } from "next/navigation";
import { GuardianArticleSchema } from "@/lib/types";
import { getGuardianNewsArticles } from "@/lib/api.service";
import Link from "next/link";

interface Props {
  className?: string;
}

export const Trending = ({ className }: Props) => {
  const [trendingNews, setTrendingNews] = useState<GuardianArticleSchema[]>([]);

  useEffect(() => {
    getGuardianNewsArticles({
      searchQuery: "news",
      orderBy: "newest",
    }).then((res) => {
      setTrendingNews(res as unknown as GuardianArticleSchema[]);
    });
  }, []);

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
        {trendingNews?.map((article) => (
          <Link href={`/post/${article.id}`} key={article.id}>
            <CarouselItem>
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
                <p className="font-news text-xl text-white">
                  {article.webTitle}
                </p>
                <p className="font-news text-sm text-white">
                  {article.sectionName}
                </p>
              </div>
            </CarouselItem>
          </Link>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
