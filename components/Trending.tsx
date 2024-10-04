import React, { useMemo } from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Data } from "@/lib/types";
import { getNewsApiFormattedData } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";

interface Props {
  className?: string;
  articles: Data[];
}

export const Trending = ({ className, articles }: Props) => {
  const trendingArticles =
    useMemo(() => {
      return getNewsApiFormattedData(articles);
    }, [articles]) || [];
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
        {trendingArticles.map((article, index) => (
          <CarouselItem key={index}>
            <Card className="h-60 md:h-80 relative rounded overflow-hidden after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-primary after:z-10 after:opacity-40">
              {article?.imageUrl ? (
                <Image
                  src={article.imageUrl}
                  alt={article.title}
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
              <p className="font-poppin text-lg text-white">{article.title}</p>
              <p className="font-poppin text-sm text-white">
                {article.category}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
