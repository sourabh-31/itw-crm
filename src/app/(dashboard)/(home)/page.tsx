import Assigned from "@/components/dashboard/Assigned";
import Brands from "@/components/dashboard/Brands";
import Inventory from "@/components/dashboard/Inventory";
import NewsFeed from "@/components/dashboard/NewsFeed";
import Peoples from "@/components/dashboard/Peoples";
import Schedule from "@/components/dashboard/Schedule";
import Tasks from "@/components/dashboard/Tasks";

export default function Home() {
  return (
    <section className="space-y-6 px-6 py-5">
      <NewsFeed />

      {/* Inventory + Schedule */}

      <div className="grid grid-cols-[70%_1fr] gap-5">
        <Inventory />
        <Schedule />
      </div>

      <div className="grid grid-cols-[70%_1fr] gap-5">
        <Assigned />
        <Tasks />
      </div>

      <div className="grid grid-cols-[70%_1fr] gap-5">
        <Brands />
        <Peoples />
      </div>
    </section>
  );
}
