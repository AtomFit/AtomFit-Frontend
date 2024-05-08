"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import createWorkoutBgImg from "@/assets/img/create-workout.jpg";
import { FaArrowRight } from "react-icons/fa";

type Props = {
  title: string;
  smallDescription: string;
  description: string;
  img: StaticImageData;
  altImg: string;
};

export function CreateCard({
  title,
  smallDescription,
  description,
  img,
  altImg,
}: Props) {
  return (
    <>
      <Card className="group relative flex flex-1 flex-col justify-between overflow-hidden">
        <Image
          src={img}
          alt={altImg}
          fill
          sizes="95vw"
          priority
          className="absolute object-cover brightness-50 transition-all group-hover:brightness-75"
        />
        <CardHeader className="relative">
          <CardTitle className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            {title.toUpperCase()}
          </CardTitle>
          <CardDescription className="flex items-center gap-1 text-xl font-semibold">
            {smallDescription}
            <FaArrowRight className="transition-all group-hover:ml-2" />
          </CardDescription>
        </CardHeader>
        <CardContent className="relative">{description}</CardContent>
      </Card>
    </>
  );
}
