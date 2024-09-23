import CurrentSection from "@/components/dashboard/CurrentSection";
import Header from "@/components/shared/Header";
import Sidebar from "@/components/shared/Sidebar";

const NoiseOverlay = () => (
  <div className="pointer-events-none fixed inset-0 z-50 opacity-20">
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="2.4" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  </div>
);

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="min-h-screen bg-black">
      <Header />
      <Sidebar />

      {/* Main Dashboard Content */}
      <main className="sm:ml-[100px] overflow-y-auto sm:p-6">
        <div className="mt-[5.5rem] min-h-[calc(100vh-85px)] sm:rounded-2xl bg-background sm:bg-foreground">
          <CurrentSection />
          {children}
        </div>
      </main>
      <NoiseOverlay />
    </section>
  );
}
