import Image from "next/image";
import React, {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { IoClose } from "react-icons/io5";

import { cn } from "@/lib/utils";
import type {
  FilterWindowProps,
  OpenProps,
  SidebarFilterContextType,
  SidebarProps,
} from "@/types/sidebar.type";

// Context
const SidebarContext = createContext<SidebarFilterContextType | undefined>(
  undefined
);

// Main Sidebar Component
function SidebarFilter({ children }: SidebarProps) {
  const [openNames, setOpenNames] = useState<string[]>([]);

  const open = (name: string) => setOpenNames((prev) => [...prev, name]);
  const close = (name: string) =>
    setOpenNames((prev) => prev.filter((n) => n !== name));

  // Lock the body scroll when the sidebar is opened
  useEffect(() => {
    if (openNames.length) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [openNames.length]);

  return (
    <SidebarContext.Provider value={{ openNames, setOpenNames, open, close }}>
      {children}
    </SidebarContext.Provider>
  );
}

// Custom Hook to use context
function useSidebarFilter() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}

// Sidebar Open Component
function Open({ children, opens: opensWindowName }: OpenProps) {
  const { open } = useSidebarFilter();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (children.props.onClick) {
      children.props.onClick(event);
    }
    open(opensWindowName);
  };

  return cloneElement(children, {
    onClick: handleClick,
  });
}

// Sidebar Window Component
function Window({
  children,
  name,
  title,
  className,
  headerName,
  startIcon,
  isSubHeading = false,
}: FilterWindowProps) {
  const { openNames, close, setOpenNames } = useSidebarFilter();

  if (!openNames.includes(name)) return null;

  const isFirstOpen = openNames[0] === name;

  return (
    <aside className="fixed inset-0 z-50 flex justify-end">
      {isFirstOpen && <div className="grow bg-slate-800 opacity-50" />}
      <div
        className={cn(
          "flex h-full flex-col bg-[#1B1E25]",
          className || "w-[22rem] sm:w-[30rem] xl:w-[32rem] 2xl:w-[34rem]"
        )}
      >
        {/* Sidebar header - fixed */}
        <div className="shrink-0 px-5 py-4">
          <div className="flex items-center justify-between">
            {/* Arrow + Org Name */}
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => close(name)}>
                <Image src={startIcon} alt="filter" width={24} height={24} />
              </button>
              <div className="flex flex-col gap-[px] text-white">
                <span className="font-recoletaAlt">{headerName}</span>
                {isSubHeading ? (
                  <span className="font-mulish text-sm">{title}</span>
                ) : null}
              </div>
            </div>

            {/* Close btn */}
            <button type="button" onClick={() => setOpenNames([])}>
              <IoClose color="white" size={24} />
            </button>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="rightSidebar-content flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </aside>
  );
}

// Assigning sub-components as Property
SidebarFilter.Open = Open;
SidebarFilter.Window = Window;

export { SidebarFilter, useSidebarFilter };
