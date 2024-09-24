"use client";

import { capitalize } from "lodash";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

import { SidebarData } from "@/data/sidebar.data";
import type { sidebarDataType } from "@/types/sidebar.type";

export default function Bottombar() {
  const pathname = usePathname();
  const [visibleItems, setVisibleItems] = useState<sidebarDataType[]>([]);
  const [overflowItems, setOverflowItems] = useState<sidebarDataType[]>([]);
  const [showMore, setShowMore] = useState(false);
  const bottombarRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (bottombarRef.current) {
        const containerWidth = bottombarRef.current.offsetWidth;
        const itemWidth = 80;
        const maxItems = Math.floor(containerWidth / itemWidth);

        setVisibleItems(SidebarData.slice(0, maxItems - 1));
        setOverflowItems(SidebarData.slice(maxItems - 1));
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderLink = (data: sidebarDataType) => (
    <Link
      key={data.name}
      href={data.link}
      className={`flex items-center justify-center gap-1 rounded-full transition-all duration-200 ${
        pathname === data.link
          ? `bg-yellow-100 ${!showMore ? "h-12 w-32" : "size-12"}`
          : "size-12 bg-primary-200"
      }`}
      onClick={() => setShowMore(false)}
    >
      {pathname === data.link && !showMore && (
        <span className="font-mulish font-bold">{capitalize(data.name)}</span>
      )}

      <Image
        src={pathname === data.link ? data.imgAlt : data.img}
        alt={data.name}
        width={20}
        height={20}
      />
    </Link>
  );

  return (
    <aside
      ref={bottombarRef}
      className="sidebar pb-safe fixed bottom-0 left-0 z-50 flex w-full flex-row items-center justify-around gap-2 overflow-x-auto border-t border-gray-light bg-background px-4 py-3 sm:hidden"
    >
      {visibleItems.map(renderLink)}
      {overflowItems.length > 0 && (
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowMore(!showMore)}
            className="flex size-12 items-center justify-center rounded-full bg-primary-200"
          >
            <Image
              src="/assets/svg/sidebar/more.svg"
              alt="More"
              width={24}
              height={24}
            />
          </button>
          {showMore && (
            <button
              type="button"
              className="fixed inset-0 z-[60]"
              onClick={() => setShowMore(false)}
            >
              <div
                className="absolute bottom-20 right-4 flex flex-col gap-2 rounded-full border border-gray-light bg-primary-100 p-2 shadow-lg"
                role="button"
                tabIndex={0}
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.stopPropagation();
                  }
                }}
              >
                {overflowItems.map(renderLink)}
              </div>
            </button>
          )}
        </div>
      )}
    </aside>
  );
}
