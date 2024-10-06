"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/shared/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { BannerType } from "./_types";

export function CarouselView({ content }: { content: BannerType[] }) {
  const plugin = React.useRef(
    Autoplay({ delay: 7000, stopOnInteraction: false }),
  );
  return (
    <Carousel
      opts={{ loop: true, duration: 60, align: "start" }}
      plugins={[plugin.current]}
    >
      <CarouselContent>
        {content.map((banner, index) => (
          <CarouselItem key={banner.id}>
            <Card className="border-0">
              <CardContent className="p-0 aspect-[16/6] relative sm:aspect-[16/3]">
                <Image
                  src={banner.image.url}
                  alt={`Banner ${index + 1}`}
                  width={banner.image.width}
                  height={banner.image.height}
                  priority
                  className="w-full h-full object-cover"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 " />
      <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2" />
    </Carousel>
  );
}
