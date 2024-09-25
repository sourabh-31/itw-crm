"use client";

import type { MutableRefObject } from "react";
import { useEffect, useState } from "react";

import type { NewsItem } from "@/types/brandsAndTeam.type";

type UseFeedsToShowReturn = {
  numOfFeedsToShow: number;
  isMounted: boolean;
};

const useFeedsToShow = (
  windowWidth: number,
  newsData: NewsItem[],
  containerRef: MutableRefObject<HTMLDivElement | null>
): UseFeedsToShowReturn => {
  const [numOfFeedsToShow, setNumOfFeedsToShow] = useState(1);
  const [isMounted, setIsMounted] = useState(false);

  const calculateFeedsToShow = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const feedWidth = 327 + 20; // width of a feed item + gap
      return Math.max(1, Math.floor(containerWidth / feedWidth));
    }
    return 1;
  };

  // Handle num of feed visibility based on window width and container size
  useEffect(() => {
    const updateFeedsToShow = () => {
      const feedsToShow =
        windowWidth >= 640 ? calculateFeedsToShow() : newsData.length;
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
  }, [windowWidth, newsData.length, containerRef]);

  return { numOfFeedsToShow, isMounted };
};

export default useFeedsToShow;
