import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card } from "./ui/card";
import { ArrowRightIcon } from "./icons/ArrowRightIcon";
import Autoplay from "embla-carousel-autoplay";

interface Props {
  className?: string;
}

export const MobileCategory = ({ className }: Props) => {
  return (
    <Card className="flex flex-col gap-2">
      <div className="flex justify-between items-center border-b p-4">
        <p className="font-poppin text-base text-medium">Category</p>
        <ArrowRightIcon />
      </div>
      <Carousel
        className={`${className}`}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="flex gap-3 p-4">
                <div className="rounded-md bg-primary w-10 h-10"></div>
                <div className="flex flex-col gap-1">
                  <span className="font-poppin text-sm font-mediuam text-font-light">
                    Category Name
                  </span>
                  <span className="font-poppin text-base">Title</span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Card>
  );
};
