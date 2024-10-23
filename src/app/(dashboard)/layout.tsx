import Bottombar from "@/components/shared/Bottombar";
import CurrentSection from "@/components/shared/CurrentSection";
import Header from "@/components/shared/Header";
import ModalWindows from "@/components/shared/ModalWindows";
import SidebarWindows from "@/components/shared/SidebarWindows";
import SideNav from "@/components/shared/SideNav";

// Blueish ellipse component
const BlueEllipse = () => <div className="ellipse" />;

// Dashboard layout component
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="noiseBgPrimary relative min-h-screen bg-black">
      {/* Hydrated header component */}
      <Header />

      <SideNav />

      {/* Sidebar for small screen size */}
      <Bottombar />

      {/* Main Dashboard Content */}
      <main className="relative z-20 overflow-y-auto sm:ml-[100px] sm:p-6">
        <div className="my-16 min-h-[calc(100vh-85px)] sm:mb-0 sm:mt-[5.5rem] sm:rounded-2xl">
          <CurrentSection />
          {children}
        </div>
      </main>

      <SidebarWindows />
      <ModalWindows />

      {/* Blue ellipse with actual styling */}
      <BlueEllipse />
    </section>
  );
}
