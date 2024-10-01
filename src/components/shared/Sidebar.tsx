import { ArrowLeft } from "iconsax-react";
import Image from "next/image";
import React, {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import type {
  OpenProps,
  SidebarContextType,
  SidebarProps,
  WindowProps,
} from "@/types/sidebar.type";

// Context
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// Main Sidebar Component
function Sidebar({ children }: SidebarProps) {
  const [openName, setOpenName] = useState<string>("");

  const open = setOpenName;
  const close = () => setOpenName("");

  // Lock the body scroll when the sidebar is opened
  useEffect(() => {
    if (openName) {
      // Disable scroll on the body
      document.body.classList.add("overflow-hidden");
    } else {
      // Enable scroll on the body
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup when component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [openName]);

  return (
    <SidebarContext.Provider value={{ openName, open, close }}>
      {children}
    </SidebarContext.Provider>
  );
}

// Custom Hook to use context
function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}

// Sidebar Open Component
function Open({ children, opens: opensWindowName }: OpenProps) {
  const { open } = useSidebar();

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
function Window({ children, name }: WindowProps) {
  const { openName, close } = useSidebar();

  if (name !== openName) return null;

  return (
    <aside className="fixed inset-0 z-50 flex justify-end">
      <div className="grow bg-slate-800 opacity-50" />
      <div className="flex h-full w-[22rem] flex-col bg-[#292D38] sm:w-[30rem] xl:w-[32rem] 2xl:w-[34rem]">
        {/* Sidebar header - fixed */}
        <div className="shrink-0 border-b border-gray-dark p-5">
          <div className="flex items-center justify-between">
            {/* Arrow + Org Name */}
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => close(openName)}>
                <ArrowLeft size="24" color="#ffffff" />
              </button>
              <div className="flex flex-col gap-[px] text-white">
                <span className="font-recoletaAlt text-xl">Add New</span>
                <span className="font-mulish text-sm">
                  Google Search Private Limited
                </span>
              </div>
            </div>

            {/* Util icons */}
            <div className="flex items-center gap-5">
              <Image
                src="/assets/svg/my-brands/trash-white.svg"
                alt="trash-icon"
                width={24}
                height={24}
              />
              <Image
                src="/assets/svg/my-brands/question-mark.svg"
                alt="question-mark-icon"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="rightSidebar-content flex-1 overflow-y-auto">
          {children}
        </div>

        {/* Sidebar footer - fixed */}
        <div className="flex shrink-0 items-center gap-5 border-t border-gray-dark p-4 font-mulish text-sm font-bold">
          <button
            type="button"
            className="w-1/2 rounded-full bg-white py-[10px]"
          >
            CANCEL
          </button>
          <button
            type="button"
            className="w-1/2 rounded-full bg-[#0094FF] py-[10px] text-white"
          >
            SAVE
          </button>
        </div>
      </div>
    </aside>
  );
}

// Assigning sub-components as Property
Sidebar.Open = Open;
Sidebar.Window = Window;

export { Sidebar, useSidebar };
