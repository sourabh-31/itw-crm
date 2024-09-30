"use client";

import { capitalize } from "lodash";
import { usePathname } from "next/navigation";

export default function CurrentSection() {
  const pathname = usePathname();
  const currentRoute = pathname === "/" ? "dashboard" : pathname.split("/")[1];

  return (
    <header className="border-b border-gray-light bg-foreground px-4 py-5 font-recoletaAlt text-lg text-white sm:block sm:rounded-t-2xl sm:px-6 sm:text-xl xl:text-2xl">
      {capitalize(currentRoute)}
    </header>
  );
}
