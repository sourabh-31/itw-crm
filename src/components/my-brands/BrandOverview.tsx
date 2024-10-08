import Image from "next/image";
import Link from "next/link";

import { BrandOverviewData } from "@/data/brand.data";

import Dropdown from "./Dropdown";

export default function BrandOverview() {
  return (
    <section className="mt-5 rounded-[32px] bg-[#FFFAEA] px-5 py-[10px]">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-4">
          <span className="font-mulish text-sm font-bold text-[#121212] sm:text-base sm:tracking-[0.036em]">
            Brand Overview
          </span>
          <Dropdown />
        </div>

        <Link
          href="/my-brands/google-pvt-ltd"
          className="font-mulish text-sm font-semibold text-[#2D5978] underline sm:text-base"
        >
          EDIT
        </Link>
      </header>

      <main className="mb-[10px] mt-5 flex flex-wrap gap-4 sm:mt-4 xl:flex-nowrap">
        {BrandOverviewData.map((data) => (
          <div
            className="flex h-20 w-[135px] flex-col justify-center rounded-2xl border border-[#DCDCDC] bg-white px-2 sm:w-[190px] sm:px-4 md:w-[200px]"
            key={data.id}
          >
            <span className="font-mulish text-xs font-semibold tracking-[0.036em] text-[#121212] sm:text-xs 2xl:text-sm ">
              {data.name}
            </span>
            <div className="mt-1 flex items-center gap-[6px]">
              <Image src={data.img} alt="icon" width={24} height={24} />
              <span
                className={`font-mulish font-bold ${data.isDate ? "text-sm sm:text-lg 2xl:text-xl" : "text-lg sm:text-2xl 2xl:text-3xl"}`}
              >
                {data.subText}
                {data.isSmallText ? (
                  <i className="ml-[2px] text-xs font-medium tracking-[0.036em] text-[#121212B2]">
                    {data.smallText}
                  </i>
                ) : null}
              </span>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
}
