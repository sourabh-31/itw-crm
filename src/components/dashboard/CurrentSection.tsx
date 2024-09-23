"use client";

import { capitalize } from "lodash";
import { usePathname } from "next/navigation";

export default function CurrentSection() {
  const pathname = usePathname();
  const currentRoute = pathname === "/" ? "dashboard" : pathname.split("/")[1];

  return (
    <header className="sm:border-b border-gray-light px-6 py-5 font-recoletaAlt text-xl text-white xl:text-2xl">
      {capitalize(currentRoute)}
    </header>
  );
}
