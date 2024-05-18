"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import { FaRegCircle, FaRegDotCircle } from "react-icons/fa";
import lebron from "../../public/assets/img/lebron.jpg";
import lebron2 from "../../public/assets/img/lebron2.jpg";
import mcgregor from "../../public/assets/img/mcgregor.jpg";
import tyson from "../../public/assets/img/tyson.jpg";
import hagi from "../../public/assets/img/hagi.jpg";

export function LandingPageCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const images = [
    {
      src: lebron,
      alt: "Lebron James Image",
    },
    {
      src: lebron2,
      alt: "Lebron James Image 2",
    },
    {
      src: mcgregor,
      alt: "Connor McGregor Image",
    },
    {
      src: tyson,
      alt: "Mike Tyson Image",
    },
    {
      src: hagi,
      alt: "Gheorghe Hagi Image",
    },
  ];
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  return (
    <>
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="flex h-screen justify-center py-4"
            >
              <Image
                src={image.src}
                alt={image.alt}
                quality={100}
                width={720}
                height={1280}
                priority
                className="size-auto select-none rounded-xl"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="pointer-events-none absolute bottom-6 flex w-full select-none justify-center gap-1 opacity-50">
          {Array.from({ length: count }).map((_, index) => {
            if (index + 1 === current) return <FaRegDotCircle key={index} />;
            return <FaRegCircle key={index} />;
          })}
        </div>
      </Carousel>
    </>
  );
}
