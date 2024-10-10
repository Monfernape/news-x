import React from "react";
import { PostCard } from "./PostCard";
import { Carousel, CarouselContent, CarouselItem } from "../../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRouter } from "next/navigation";
import {  GuardianArticleSchema } from "@/lib/types";

interface Props {
  newsArticles: GuardianArticleSchema[];
}

export const MoreArticles = ({ newsArticles }: Props) => {
  const router = useRouter();

  const viewPost = (id: string) => {
    router.push(`/post/${id}`);
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg font-semibold font-news">Related Artticles</p>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent >
          {newsArticles?.map((item, index: number) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
              onClick={() => viewPost(item.id || '')}
            >
              <PostCard
                article={item}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
