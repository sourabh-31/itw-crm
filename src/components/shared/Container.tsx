"use client";

import "swiper/css";
import "swiper/css/free-mode";

import Link from "next/link";
import type { ReactNode } from "react";
import React from "react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { cn } from "@/lib/utils";

interface ContainerPropsType {
  name: string;
  linkTo?: string;
  className?: string;
  children: ReactNode;
  accentBoxClassName?: string;
  accentBoxContent?: string;
  linkClassName?: string;
  isEmpty?: boolean;
  isSwiper?: boolean;
  autoplay?: boolean;
}

export default function Container({
  name,
  linkTo = "/",
  className,
  children,
  accentBoxClassName,
  accentBoxContent,
  linkClassName,
  isEmpty = false,
  isSwiper = false,
  autoplay = false,
}: ContainerPropsType) {
  const swiperOptions = autoplay
    ? {
        modules: [FreeMode, Autoplay],
        autoplay: {
          delay: 500,
          disableOnInteraction: false,
        },
        speed: 5000,
      }
    : {
        modules: [FreeMode],
      };

  return (
    <div className={cn("rounded-3xl bg-primary-300 p-4", className)}>
      {/* Container Heading */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-recoletaAlt text-lg xl:text-xl">{name}</span>
          <span
            className={cn(
              "rounded-lg px-2 py-1 font-mulish text-sm font-medium",
              accentBoxClassName
            )}
          >
            {accentBoxContent}
          </span>
        </div>
        {!isEmpty && (
          <Link
            href={linkTo}
            className={cn(
              "font-mulish text-sm font-medium underline",
              linkClassName
            )}
          >
            Show all
          </Link>
        )}
      </div>

      {/* Content */}
      <div className="mt-5">
        {isSwiper ? (
          <Swiper
            slidesPerView="auto"
            freeMode
            className="mySwiper"
            {...swiperOptions}
          >
            {React.Children.map(children, (child, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <SwiperSlide key={index} className="mr-2 sm:mr-6">
                {child}
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          children
        )}
      </div>
    </div>
  );
}
