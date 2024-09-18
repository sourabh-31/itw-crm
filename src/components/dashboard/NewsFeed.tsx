"use client";

import { useEffect, useRef, useState } from "react";

import { NewsFeedData } from "@/data/home.data";

import Container from "../shared/Container";
import Feed from "../shared/Feed";
import FeedSkeleton from "../shared/FeedSkeleton";

export default function NewsFeed() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [numOfFeedsToShow, setNumOfFeedsToShow] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const calculateFeedsToShow = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const feedWidth = 327 + 20; // width of a feed item + gap
      const feedsToShow = Math.max(1, Math.floor(containerWidth / feedWidth));
      return feedsToShow;
    }
    return 1; // Fallback
  };

  useEffect(() => {
    const updateFeedsToShow = () => {
      const feedsToShow = calculateFeedsToShow();
      setNumOfFeedsToShow(feedsToShow);
    };

    // Initial calculation
    updateFeedsToShow();
    setIsMounted(true);

    // Use ResizeObserver for more reliable width changes detection
    const resizeObserver = new ResizeObserver(updateFeedsToShow);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Cleanup
    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <Container
      name="News Feed"
      className="bg-transparent p-0 text-white"
      linkClassName="font-normal"
    >
      <div className="flex w-full flex-wrap gap-[20px]" ref={containerRef}>
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
