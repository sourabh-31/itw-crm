import Bottombar from "@/components/shared/Bottombar";
import CurrentSection from "@/components/shared/CurrentSection";
import Header from "@/components/shared/Header";
import NoiseOverlay from "@/components/shared/NoiseOverlay";
import Sidebar from "@/components/shared/Sidebar";

// Blueish ellipse component
const BlueEllipse = () => <div className="ellipse" />;

// Dashboard layout component
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="relative min-h-screen bg-black">
      {/* Hydrated header component */}
      <Header />

      <Sidebar />

      {/* Sidebar for small screen size */}
      <Bottombar />

      {/* Main Dashboard Content */}
      <main className="relative z-40 overflow-y-auto sm:ml-[100px] sm:p-6">
        <div className="my-16 min-h-[calc(100vh-85px)] sm:mb-0 sm:mt-[5.5rem] sm:rounded-2xl">
          <CurrentSection />
          {children}
        </div>
      </main>

      {/* Blue ellipse with actual styling */}
      <BlueEllipse />

      <NoiseOverlay />
    </section>
  );
}
