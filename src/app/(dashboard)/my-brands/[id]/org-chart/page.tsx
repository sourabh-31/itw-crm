"use client";

import { useEffect, useState } from "react";

import OrgChart from "@/components/my-brands/OrgChart";
import OrgChartLoader from "@/components/my-brands/OrgChartLoader";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-[calc(100vh-160px)] rounded-b-2xl bg-[#1B1E25]">
      {isLoading ? <OrgChartLoader /> : <OrgChart />}
    </section>
  );
}
