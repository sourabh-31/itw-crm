"use client";

import { useRef } from "react";

import useCardsToShow from "@/hooks/useCardsToShow";
import { useBrandsAndTeam } from "@/hooks/useData";
import useWindowWidth from "@/hooks/useWindowWidth";

import Container from "../shared/Container";
import Feed from "../shared/Feed";
import FeedSkeleton from "../shared/FeedSkeleton";

export default function NewsFeed() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { data = null, isLoading, isError } = useBrandsAndTeam();
  const newsData = data?.news?.slice(0, 4) ?? [];
  const windowWidth = useWindowWidth();
  const { numOfFeedsToShow, isMounted } = useCardsToShow(
    windowWidth,
    newsData,
    containerRef,
    327
  );

  if (isError || !newsData.length) return null;

  return (
    <Container
      name="News Feed"
      className="bg-transparent p-0 pt-4 text-white sm:mx-4 sm:pt-0"
      headingClassName="px-4 sm:px-2"
      linkClassName="font-normal"
      isSwiper={windowWidth < 640}
    >
      <div
        className="flex w-full flex-wrap px-0 sm:gap-[20px] lg:px-2"
        ref={containerRef}
      >
        {!isMounted || isLoading ? (
          <FeedSkeleton />
        ) : (
          newsData
            ?.slice(0, numOfFeedsToShow)
            ?.map((data) => (
              <Feed
                key={data.newsId}
                topic={data.title}
                description={data.description}
                lottieSrc={data.imageUrl}
                isBtnText={data.newsType === "GENERAL"}
                isActionBtn={data.newsType === "CALENDAR"}
                isBorder={data.newsType === "CALENDAR"}
              />
            ))
        )}
      </div>
    </Container>
  );
}
