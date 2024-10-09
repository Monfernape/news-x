import React, { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Card } from "./ui/card";
import { useRouter } from "next/navigation";
import { getGuardianNewsArticles } from "@/app/api/guardianNewsApi/getGuardianNews";
import { addEllipsis } from "@/lib/utils";

interface SectionData {
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
  const [data, setData] = useState<SectionData[]>([]);

  const router = useRouter();

  useEffect(() => {
    getGuardianNewsArticles({
      searchQuery: "sport",
    }).then((res) => {
      setData(res as unknown as SectionData[]);
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
          {data?.slice(0, 6)?.map((item, index) => (
            <CarouselItem key={index}>
              <div className="flex gap-3 p-4" onClick={() => viewPost(item.id)}>
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
