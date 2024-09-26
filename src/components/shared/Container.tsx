"use client";

import "swiper/css";
import "swiper/css/free-mode";

import Link from "next/link";
import type { ReactNode } from "react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { cn } from "@/lib/utils";

interface ContainerPropsType {
  name: string;
  linkTo?: string;
  className?: string;
  children: ReactNode;
  headingClassName?: string;
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
  headingClassName,
  accentBoxClassName,
  accentBoxContent,
  linkClassName,
  isEmpty = false,
  isSwiper = false,
}: ContainerPropsType) {
  // Custom swiper options
  const swiperOptions = {
    speed: 2000,
    spaceBetween: 20,
    cssMode: true,
  };

  return (
    <div className={cn("rounded-3xl bg-primary-300 p-4", className)}>
      {/* Container Heading */}
      <div
        className={cn("flex items-center justify-between", headingClassName)}
      >
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
          <Swiper className="mySwiper" slidesPerView="auto" {...swiperOptions}>
            {React.Children.map(children, (child, index) => (
              <SwiperSlide
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className="mr-2 first:pl-4 sm:mr-6 sm:first:pl-0"
              >
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
