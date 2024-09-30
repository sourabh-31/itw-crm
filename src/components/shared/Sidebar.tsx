"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SidebarData } from "@/data/sidebar.data";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar fixed left-0 top-1/4 z-50 hidden h-[calc(100vh-85px)] w-[120px] flex-col items-center gap-2 overflow-y-auto py-8 pb-20 sm:flex">
      {SidebarData.map((data) => (
        <Link
          key={data.name}
          href={data.link}
          className={`w-fit rounded-full bg-primary-200 p-4 transition-all duration-200 ${
            pathname === data.link ? "my-1 scale-110 bg-yellow-100" : ""
          }`}
        >
          <Image
            src={pathname === data.link ? data.imgAlt : data.img}
            alt={data.name}
            width={20}
            height={20}
          />
        </Link>
      ))}
    </aside>
  );
}
