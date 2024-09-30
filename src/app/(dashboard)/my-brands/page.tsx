import OrgChart from "@/components/my-brands/OrgChart";
import OrgChartLoader from "@/components/my-brands/OrgChartLoader";

export default function Page() {
  const isLoading = false;

  return (
    <section className="z-50 min-h-[calc(100vh-160px)] rounded-b-2xl bg-[#1B1E25]">
      {isLoading ? <OrgChartLoader /> : <OrgChart />}
    </section>
  );
}
