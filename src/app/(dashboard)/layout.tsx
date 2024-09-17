import CurrentSection from "@/components/dashboard/CurrentSection";
import Header from "@/components/shared/Header";
import Sidebar from "@/components/shared/Sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="noiseBg min-h-screen">
      <Header />
      <Sidebar />

      {/* Main Dashboard Content */}
      <main className="ml-[100px] overflow-y-auto p-6">
        <div className="min-h-[calc(100vh-85px)] rounded-2xl bg-foreground">
          <CurrentSection />
          {children}
        </div>
      </main>
    </section>
  );
}
