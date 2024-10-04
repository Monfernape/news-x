import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Card } from "./ui/card";

interface Props {
  className?: string;
}

export const MobileCategory = ({ className }: Props) => {
  return (
    <Card className={`flex flex-col gap-2 ${className}`}>
      <Carousel
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
                <div className="rounded-md w-10 h-10 flex-shrink-0 overflow-hidden">
                  <Image
                    src={""}
                    alt=""
                    width={40}
                    height={40}
                    className="h-full object-fill"
                  />
                </div>
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
