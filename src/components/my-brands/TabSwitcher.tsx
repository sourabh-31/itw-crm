"use client";

import { useState } from "react";

export default function TabSwitcher() {
  const [activeTab, setActiveTab] = useState("work");
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="mx-auto flex h-[46px] w-[594px] items-center rounded-full bg-white px-1 font-mulish">
      <button
        type="button"
        className={`h-[40px] w-[198px] rounded-full font-medium transition-colors ${
          activeTab === "work"
            ? "bg-[#0094FF] font-extrabold text-white"
            : "bg-white font-normal text-[#231F20]"
        }`}
        onClick={() => handleTabChange("work")}
      >
        Work
      </button>

      <button
        type="button"
        className={`h-[40px] w-[198px] rounded-full font-medium transition-colors ${
          activeTab === "inventories"
            ? "bg-[#0094FF] font-extrabold text-white"
            : "bg-white font-normal text-[#231F20]"
        }`}
        onClick={() => handleTabChange("inventories")}
      >
        <span>All Inventories</span>
      </button>

      <button
        type="button"
        className={`h-[40px] w-[198px] rounded-full font-medium transition-colors ${
          activeTab === "about"
            ? "bg-[#0094FF] font-extrabold text-white"
            : "bg-white font-normal text-[#231F20]"
        }`}
        onClick={() => handleTabChange("about")}
      >
        <span>About</span>
      </button>
    </div>
  );
}
