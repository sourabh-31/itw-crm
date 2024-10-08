import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface TilesPropsType {
  name: string;
  details: number | string;
  className?: string;
  imgUrl?: string;
  headingClassName?: string;
  imgSize?: number;
  bgColor?: string;
  detailsClassName?: string;
  accentText?: string;
  linkHref?: string;
}

export default function Tiles({
  name,
  details,
  className,
  imgUrl,
  headingClassName,
  imgSize = 32,
  bgColor = "#ffffff",
  detailsClassName,
  accentText,
  linkHref = "/",
}: TilesPropsType) {
  return (
    <div className="flex items-center">
      {/* Image */}

      <div
        className="z-10 flex size-16 items-center justify-center rounded-full "
        style={{ backgroundColor: bgColor }}
      >
        <Image
          src={imgUrl ?? ""}
          alt="img"
          width={imgSize}
          height={imgSize}
          className="aspect-square rounded-full object-contain"
        />
      </div>

      {/* Schedule */}

      <div
        className={cn(
          "-ml-8 flex flex-1 items-center justify-between rounded-full bg-primary-300 py-3 pl-10 pr-2",
          className
        )}
      >
        {/* Schedule Details */}

        <div className="flex flex-col justify-center text-white">
          <span
            className={cn(
              "font-recoletaAlt text-lg lg:text-base xl:text-lg",
              headingClassName
            )}
          >
            {name}
          </span>
          <span className={cn("font-mulish font-medium", detailsClassName)}>
            {details} {accentText}
          </span>
        </div>

        {/* CTA Btn */}
        <Link href={linkHref}>
          <Image
            src="/assets/svg/chevron-right-white.svg"
            alt="chevron-right"
            width={30}
            height={30}
          />
        </Link>
      </div>
    </div>
  );
}
