import React from "react";
import { PostCard } from "./PostCard";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRouter } from "next/navigation";
import { Data } from "@/lib/types";

interface Props {
  data: Data[];
}

export const MoreArticles = ({ data }: Props) => {
  const router = useRouter();

  const viewPost = (id: string) => {
    router.push(`/post/${id}`);
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg font-semibold font-poppin">Related Artticles</p>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {data?.map((item, index: number) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
              onClick={() => viewPost(item.id)}
            >
              <PostCard
                article={{
                  title: item.webTitle,
                  category: "Category",
                  imageUrl: item?.fields?.thumbnail ?? "",
                }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
