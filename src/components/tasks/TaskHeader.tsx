import Image from "next/image";
import Link from "next/link";

import { useTaskStore } from "@/store/useTaskStore";

import Modal from "../shared/Modal";
import Select from "../shared/Select";
import { SidebarFilter } from "./FilterBrands";

export default function TaskHeader() {
  const { activeTab, handleTabChange, handleTaskCategory, handleTimeFilter } =
    useTaskStore();

  return (
    <div className="flex h-full flex-col-reverse justify-center gap-[6px] px-2 sm:px-4 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
      {/* Left part */}

      <div className="flex items-center justify-between gap-[18px] lg:ml-[6px] lg:justify-normal">
        {/* Task dropdown */}

        <Select
          selectStyles="text-xs sm:text-base text-white font-semibold"
          chevronStyles="ml-2"
          className="h-10 border border-[#FFFFFF4D] bg-transparent"
          name="tasks"
          onChange={(val: string) => handleTaskCategory(val)}
          placeholder="All Tasks"
          options={[
            { value: "all-tasks", label: "All Tasks" },
            { value: "your-tasks", label: "Your Tasks" },
            { value: "delegated-tasks", label: "Delegated Tasks" },
            { value: "team-tasks", label: "Team Tasks" },
            { value: "other-tasks", label: "Other Tasks" },
          ]}
        />

        {/* Open and completed task selectable */}

        <div className="flex h-[34px] w-[217px] items-center rounded-full bg-[#0E0E0E] font-mulish text-white lg:mx-auto">
          <button
            type="button"
            className={`h-[34px] w-[109px] rounded-full text-sm font-medium transition-colors ${
              activeTab === "open"
                ? "bg-[#0094FF] font-bold"
                : "bg-[#0E0E0E] font-normal"
            }`}
            onClick={() => handleTabChange("open")}
          >
            Open
          </button>

          <button
            type="button"
            className={`h-[34px] w-[109px] rounded-full text-sm font-medium transition-colors ${
              activeTab === "completed"
                ? "bg-[#0094FF] font-bold"
                : "bg-[#0E0E0E] font-normal"
            }`}
            onClick={() => handleTabChange("completed")}
          >
            Completed
          </button>
        </div>
      </div>

      {/* Right part */}

      <div className="flex items-center justify-between gap-3 lg:justify-normal">
        {/* Schedule select */}

        <Select
          selectStyles="text-white"
          chevronStyles="ml-5"
          className="border border-[#FFFFFF4D] bg-transparent px-4"
          name="schedule"
          placeholder="Today"
          onChange={(val: string) => handleTimeFilter(val)}
          options={[
            { value: "TODAY", label: "Today" },
            { value: "LAST_THREE_DAYS", label: "Last 3 Days" },
            { value: "LAST_SEVEN_DAYS", label: "Last Week" },
            { value: "LAST_FIFTEEN_DAYS", label: "Last 15 Days" },
          ]}
        />

        {/* Search icon */}

        <div className="flex gap-2 sm:gap-3">
          <Link
            href="/tasks"
            className="flex w-[4.2rem] items-center justify-center rounded-full border border-[#50515B] bg-[#23252D] sm:w-12 lg:size-12"
          >
            <Image
              src="/assets/svg/search.svg"
              alt="target"
              width={20}
              height={20}
            />
          </Link>

          {/* Funnel icon */}

          <SidebarFilter.Open opens="filter-tasks">
            <button
              type="button"
              className="flex w-[4.2rem] items-center justify-center rounded-full border border-[#50515B] bg-[#23252D] sm:w-12 lg:size-12"
            >
              <Image
                src="/assets/svg/tasks/funnel.svg"
                alt="target"
                width={20}
                height={20}
              />
            </button>
          </SidebarFilter.Open>

          {/* Add task btn */}
          <Modal.Open opens="add-task">
            <button
              type="button"
              className="flex h-[40px] w-full items-center justify-center rounded-full bg-blue font-mulish text-xs font-bold text-white sm:h-[48px] sm:w-[150px] sm:text-sm"
            >
              ADD TASK
            </button>
          </Modal.Open>
        </div>
      </div>
    </div>
  );
}
