"use client";

import Image from "next/image";
import { useState } from "react";

import Select from "../shared/Select";

export default function Notes() {
  const [activeTab, setActiveTab] = useState("Private");

  return (
    <div className="mt-5 px-6">
      <div className="mx-auto flex h-[33px] w-fit items-center gap-[10px] rounded-full font-mulish">
        <button
          type="button"
          className={`flex h-[33px] w-[101px] items-center justify-center rounded-full text-xs font-medium transition-colors ${
            activeTab === "Private"
              ? "bg-[#FFE58E] font-bold text-black"
              : "bg-[#191B28] font-normal text-white"
          }`}
          onClick={() => setActiveTab("Private")}
        >
          <span>Private</span>
          <span className="ml-1 flex size-4 items-center justify-center rounded-full bg-[#FF6161] text-[10px] text-white">
            10
          </span>
        </button>
        <button
          type="button"
          className={`flex h-[33px] w-[101px] items-center justify-center rounded-full text-xs font-medium transition-colors ${
            activeTab === "Public"
              ? "bg-[#FFE58E] font-bold text-black"
              : "bg-[#191B28] font-normal text-white"
          }`}
          onClick={() => setActiveTab("Public")}
        >
          <span>Public</span>
          <span className="ml-1 flex size-4 items-center justify-center rounded-full bg-[#FF6161] text-[10px] text-white">
            10
          </span>
        </button>
      </div>

      <input
        name="noteReason"
        type="text"
        placeholder="What's this note about?"
        className="mt-6 w-full rounded-lg border-[0.5px] border-[#D1D5DC] bg-transparent px-3 py-[14px] font-mulish text-sm text-[#FFFFFF99] outline-none placeholder:text-[#898989]"
      />

      <div className="mt-6">
        <div className="font-mulish text-sm font-bold text-white">
          This Month
        </div>

        {/* Note 1 */}
        <div className="mt-[10px] rounded-[10px] bg-[#FFD64E]">
          <div className="flex items-center justify-between border-b border-[#0000001A] p-3">
            <div className="flex items-center gap-2">
              <div className="w-fit rounded-full border-[0.4px] border-[#00000033]">
                <Image
                  src="/assets/png/member2.png"
                  alt="profile"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col font-mulish">
                <span className="text-sm font-medium">Aravind</span>
                <span className="text-xs font-semibold">10 Apr. 24</span>
              </div>
            </div>

            <button type="button">
              <Image
                src="/assets/svg/my-brands/brand-info/more.svg"
                alt="more"
                width={16}
                height={16}
              />
            </button>
          </div>
          <div className="flex flex-col gap-1 p-3">
            <span className="font-mulish font-extrabold">Header</span>
            <span className="font-mulish text-sm font-medium">
              When they add any notes it will show up here. Whatever they add,
              they only can see it. We have to allow them to edit and delete.
            </span>
          </div>
        </div>

        {/* Note 2 */}

        <div className="mt-4 rounded-[10px] bg-[#FFD64E]">
          <div className="flex items-center justify-between border-b border-[#0000001A] p-3">
            <div className="flex items-center gap-2">
              <div className="w-fit rounded-full border-[0.4px] border-[#00000033]">
                <Image
                  src="/assets/png/member2.png"
                  alt="profile"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col font-mulish">
                <span className="text-sm font-medium">Aravind</span>
                <span className="text-xs font-semibold">10 Apr. 24</span>
              </div>
            </div>

            <button type="button">
              <Image
                src="/assets/svg/my-brands/brand-info/more.svg"
                alt="more"
                width={16}
                height={16}
              />
            </button>
          </div>

          <div className="flex flex-col gap-1 p-3">
            <span className="font-mulish font-extrabold">Header</span>
            <span className="font-mulish text-sm font-medium">
              When they add any notes it will show up here. Whatever they add,
              they only can see it. We have to allow them to edit and delete.
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Select
          label="Notes added by"
          name="addedBy"
          placeholder="Select"
          options={[
            { value: "All", label: "All" },
            { value: "Me", label: "Me" },
            { value: "Anbarsan Krishnan", label: "Anbarsan Krishnan" },
          ]}
        />
      </div>
    </div>
  );
}
