import Demo from "@/components/my-brands/Demo";
import OrgDetails from "@/components/my-brands/OrgDetails";

export default function Page() {
  return (
    <section className="noiseBgSec min-h-[calc(100vh-160px)] rounded-b-2xl bg-[#292d38] p-4">
      <OrgDetails />
      <Demo />
    </section>
  );
}
