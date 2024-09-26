"use client";

import "swiper/css";
import "swiper/css/free-mode";

import Link from "next/link";
import type { ReactNode } from "react";
import React, { useEffect, useState } from "react";
import { Autoplay, FreeMode } from "swiper/modules";
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
  autoplay = false,
}: ContainerPropsType) {
  const [windowWidth, setWindowWidth] = useState(0);

  // Custom swiper options
  const swiperOptions = autoplay
    ? {
        modules: [FreeMode, Autoplay],
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        speed: windowWidth < 640 ? 3000 : 5000,
        spaceBetween: 20,
        freeMode: {
          enabled: true,
          momentum: true,
        },
        grabCursor: true,
      }
    : {
        modules: [FreeMode],
        spaceBetween: 20,
        freeMode: {
          enabled: true,
          momentum: true,
        },
        grabCursor: true,
      };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      <div className="mt-5 scroll-pl-10">
        {isSwiper ? (
          <Swiper
            cssMode
            slidesPerView="auto"
            className="mySwiper"
            slidesOffsetBefore={windowWidth < 640 ? 20 : 0}
            slidesOffsetAfter={windowWidth < 640 ? 20 : 0}
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
