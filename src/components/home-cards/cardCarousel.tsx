"use client";

import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import TracksCard from "@/components/home-cards/tracksCard";
import ArtistsCard from "./artistsCard";
import Autoplay from "embla-carousel-autoplay";

const CardCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 3000, loop: true }));
  return (
    <Carousel plugins={[plugin.current]} className="max-w-sm md:max-w-md">
      <CarouselContent>
        <CarouselItem>
          <TracksCard />
        </CarouselItem>
        <CarouselItem>
          <ArtistsCard />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default CardCarousel;
