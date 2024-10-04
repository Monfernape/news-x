import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

interface Props {
  className?: string;
}

export const Trending = ({ className }: Props) => {
  return (
    <Carousel className={`${className}`}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <Card className="h-60 md:h-80 relative">
              <Image src="" alt="" />
              <div className="absolute bottom-4 px-4">
                <p className="font-poppin text-lg">Trending</p>
                <p className="font-poppin text-sm">Top 10 trending</p>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
