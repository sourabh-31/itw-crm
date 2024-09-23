"use client";

import { useEffect, useRef, useState } from "react";

import { NewsFeedData } from "@/data/home.data";

import Container from "../shared/Container";
import Feed from "../shared/Feed";
import FeedSkeleton from "../shared/FeedSkeleton";

export default function NewsFeed() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [numOfFeedsToShow, setNumOfFeedsToShow] = useState(1);
  const [isMounted, setIsMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const calculateFeedsToShow = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const feedWidth = 327 + 20; // width of a feed item + gap
      return Math.max(1, Math.floor(containerWidth / feedWidth));
    }
    return 1;
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

  // Handle num of feed visibility
  useEffect(() => {
    const updateFeedsToShow = () => {
      const feedsToShow =
        windowWidth >= 640 ? calculateFeedsToShow() : NewsFeedData.length;
      setNumOfFeedsToShow(feedsToShow);
    };

    updateFeedsToShow();
    setIsMounted(true);

    const resizeObserver = new ResizeObserver(updateFeedsToShow);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, [windowWidth]);

  return (
    <Container
      name="News Feed"
      className="bg-transparent p-0 text-white"
      linkClassName="font-normal"
      isSwiper={windowWidth <= 640}
      autoplay
    >
      <div className="flex w-full flex-wrap sm:gap-[20px]" ref={containerRef}>
        {!isMounted ? (
          <FeedSkeleton />
        ) : (
          NewsFeedData.slice(0, numOfFeedsToShow).map((data) => (
            <Feed
              key={data.id}
              topic={data.topic}
              description={data.description}
              lottieSrc={data.lottieSrc}
              isActionBtn={data.isActionBtn}
              isBorder={data.isBorder}
              isBtnText={data.isBtnText}
            />
          ))
        )}
      </div>
    </Container>
  );
}
