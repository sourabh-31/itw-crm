"use client";

import { useState } from "react";

import About from "./About";
import Notes from "./Notes";

export default function PeopleDetails() {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <section className="mt-5">
      <div className="mx-auto flex h-[46px] w-[284px] items-center rounded-full bg-white px-1 font-mulish">
        <button
          type="button"
          className={`h-[40px] w-[143px] rounded-full text-sm font-medium transition-colors ${
            activeTab === "About"
              ? "bg-[#0094FF] font-bold text-white"
              : "bg-white font-normal text-[#231F20]"
          }`}
          onClick={() => setActiveTab("About")}
        >
          About
        </button>
        <button
          type="button"
          className={`flex h-[40px] w-[143px] items-center justify-center rounded-full text-sm font-medium transition-colors ${
            activeTab === "Notes"
              ? "bg-[#0094FF] font-bold text-white"
              : "bg-white font-normal text-[#231F20]"
          }`}
          onClick={() => setActiveTab("Notes")}
        >
          <span>Notes</span>
          <span className="ml-1 flex size-5 items-center justify-center rounded-full bg-[#FF6161] text-xs text-white">
            10
          </span>
        </button>
      </div>

      {activeTab === "About" ? <About /> : <Notes />}
    </section>
  );
}
