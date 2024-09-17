"use client";

import Link from "next/link";
import Lottie from "lottie-web";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FeedPropsType {
  topic: string;
  description: string;
  isBtnText?: boolean;
  lottieSrc: string;
  isBorder?: boolean;
  className?: string;
  isActionBtn?: boolean;
  topicClassName?: string;
}

export default function Feed({
  topic,
  description,
  isBtnText = false,
  lottieSrc,
  isBorder = false,
  className,
  isActionBtn = false,
  topicClassName,
}: FeedPropsType) {
  const animationContainer = useRef<HTMLDivElement | null>(null);
  const animationInstance = useRef<any>(null);
  const feedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animationContainer.current && !animationInstance.current) {
      animationInstance.current = Lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: lottieSrc,
      });
    }

    const feed = feedRef.current;
    if (feed) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = feed.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        feed.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      };

      const handleMouseLeave = () => {
        feed.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      };

      feed.addEventListener("mousemove", handleMouseMove);
      feed.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        feed.removeEventListener("mousemove", handleMouseMove);
        feed.removeEventListener("mouseleave", handleMouseLeave);
      };
    }

    return () => {
      if (animationInstance.current) {
        animationInstance.current.destroy();
        animationInstance.current = null;
      }
    };
  }, [lottieSrc]);

  return (
    <div
      ref={feedRef}
      className={cn(
        "flex",
        "transition-transform duration-300 ease-out",
        "hover:shadow-xl",
        className
      )}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div>
        <div
          className={cn(
            `flex h-12 w-60 items-center rounded-[25px_50px_0px_0px] border border-b-0 bg-primary-400 pl-4 font-recoletaAlt text-yellow-100 ${isBorder ? "border-[#0094FF]" : "border-none"}`,
            topicClassName
          )}
        >
          {topic}
        </div>
        <div
          className={`h-[8.4rem] w-60 rounded-[0px_0px_0px_30px] border border-r-0 border-t-0 bg-primary-400 pl-5 pr-2 ${isBorder ? "border-[#0094FF]" : "border-none"}`}
        >
          <span className="font-mulish">{description}</span>

          {isActionBtn && (
            <Link
              href="/"
              className="mt-5 flex w-fit items-center justify-center rounded-full bg-blue px-7 py-[0.65rem] font-mulish text-sm transition-transform duration-300 ease-out hover:scale-105"
            >
              OPEN
            </Link>
          )}
        </div>
      </div>

      <div className="relative">
        <div
          className={`absolute bottom-0 h-[8.4rem] w-28 self-end rounded-r-[30px] border border-l-0 bg-primary-400 flex items-center justify-center ${isBorder ? "border-[#0094FF]" : "border-none"}`}
        >
          <div ref={animationContainer} className="w-16"></div>
        </div>

        <Link
          href="/"
          className="absolute left-2 top-0 flex h-9 w-24 items-center justify-center rounded-[30px] bg-primary-400 border border-gray-light transition-transform duration-300 ease-out hover:scale-105"
        >
          {isBtnText ? (
            <div className="font-mulish text-sm">
              <span>Send</span>
              <span>👋</span>
            </div>
          ) : (
            <span className="-ml-1 -mt-1">👋</span>
          )}
        </Link>
      </div>
    </div>
  );
}
