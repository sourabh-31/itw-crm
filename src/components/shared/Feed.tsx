"use client";

import Lottie from "lottie-web";
import Link from "next/link";
import { useEffect, useRef } from "react";

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
      className="card transition-transform duration-300 ease-out"
      ref={feedRef}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="box shimmer-feed">
        <div className="icon">
          <div className="iconBox">
            <Link
              href="/"
              className="absolute left-2 top-0 flex h-9 w-24 items-center justify-center rounded-[30px] border border-gray-light bg-primary-400 transition-transform duration-300 ease-out hover:scale-105"
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
        <div className="content">
          <div>
            <div className="pl-5 pt-4 font-recoletaAlt text-yellow-100">
              {topic}
            </div>
            <div className="mt-3 w-3/5 pl-5 font-mulish">{description}</div>

            {isActionBtn && (
              <Link
                href="/"
                className="ml-4 mt-7 flex w-fit items-center justify-center rounded-full bg-blue px-7 py-[0.65rem] font-mulish text-sm transition-transform duration-300 ease-out hover:scale-105"
              >
                OPEN
              </Link>
            )}
          </div>
          <div
            ref={animationContainer}
            className="absolute bottom-8 right-8 w-16"
          />
        </div>
      </div>
    </div>
  );
}
