import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ContainerPropsType {
  name: string;
  linkTo?: string;
  className?: string;
  children: ReactNode;
  accentBoxClassName?: string;
  accentBoxContent?: string;
  linkClassName?: string;
  isEmpty?: boolean;
}

export default function Container({
  name,
  linkTo = "/",
  className,
  children,
  accentBoxClassName,
  accentBoxContent,
  linkClassName,
  isEmpty = false,
}: ContainerPropsType) {
  return (
    <div className={cn("rounded-3xl bg-primary-300 p-4", className)}>
      {/* Container Heading */}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-recoletaAlt text-xl">{name}</span>
          <span
            className={cn(
              "rounded-lg px-2 py-1 font-mulish text-xs font-medium",
              accentBoxClassName
            )}
          >
            {accentBoxContent}
          </span>
        </div>
        {!isEmpty && (
          <Link
            href={linkTo}
            className={cn(
              "font-mulish text-sm font-medium underline",
              linkClassName
            )}
          >
            Show all
          </Link>
        )}
      </div>

      {/* Content */}

      <div className="mt-5">{children}</div>
    </div>
  );
}
