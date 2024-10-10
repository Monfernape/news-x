'use client'
import React, { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../../components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Card } from "../../components/ui/card";
import { useRouter } from "next/navigation";

import { addEllipsis } from "@/lib/utils";
import { getGuardianNewsArticles } from "@/lib/api.service";

interface MobileCategory {
  id: string;
  webTitle: string;
  sectionName: string;
  fields: {
    thumbnail: string;
  };
}

interface Props {
  className?: string;
}

export const MobileCategory = ({ className }: Props) => {
  const [mobileCategory, setmobileCategory] = useState<MobileCategory[]>([]);

  const router = useRouter();

  useEffect(() => {
    getGuardianNewsArticles({
      searchQuery: "sport",
    }).then((res) => {
      setmobileCategory(res as unknown as MobileCategory[]);
    });
  }, []);

  const viewPost = (id: string) => {
    router.push(`/post/${id}`);
  };

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
          {mobileCategory?.slice(0, 6)?.map((item, index) => (
            <CarouselItem key={index}>
              <div className="flex gap-3 p-4 items-center" onClick={() => viewPost(item.id)}>
                <div className="rounded-md w-10 h-10 flex-shrink-0 overflow-hidden">
                  <Image
                    src={item.fields.thumbnail}
                    alt=""
                    width={40}
                    height={40}
                    className="h-full object-fill"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-news text-sm font-mediuam text-font-light">
                    {item?.sectionName}
                  </span>
                  <span className="font-news text-base">
                    {addEllipsis(item?.webTitle, 60)}
                  </span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Card>
  );
};
