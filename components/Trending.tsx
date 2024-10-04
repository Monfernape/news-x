import React, { useMemo } from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Data } from "@/lib/types";
import { getNewsApiFormattedData } from "@/lib/utils";

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
    <Carousel className={`${className}`}>
      <CarouselContent>
        {trendingArticles.map((article, index) => (
          <CarouselItem key={index}>
            <Card className="h-60 md:h-80 relative">
              {article?.imageUrl ? (
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  sizes="100vw"
                  width={500}
                  height={300}
                  className="w-full h-48 rounded"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg">
                  <span className="text-gray-500 text-sm">
                    No Image Available
                  </span>
                </div>
              )}
              <div className="absolute bottom-4 px-4">
                <p className="font-poppin text-lg">{article.title}</p>
                <p className="font-poppin text-sm">{article.category}</p>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
