import BrandOverview from "@/components/my-brands/BrandOverview";
import Interaction from "@/components/my-brands/Interaction";
import NotesOverview from "@/components/my-brands/NotesOverview";
import OrgDetails from "@/components/my-brands/OrgDetails";
import TabSwitcher from "@/components/my-brands/TabSwitcher";

export default function Page() {
  return (
    <section className="noiseBgSec min-h-[calc(100vh-160px)] rounded-b-2xl bg-[#292d38] p-4">
      <OrgDetails />
      <BrandOverview />

      <div className="mt-6">
        <TabSwitcher />
      </div>

      <div className="mt-5 flex flex-col gap-8 lg:flex-row">
        <NotesOverview />
        <Interaction />
      </div>
    </section>
  );
}
