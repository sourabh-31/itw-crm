import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";
import { IoMdInformationCircleOutline } from "react-icons/io";

import { FilterBrandsBoxData } from "@/data/tasks.data";
import { useTaskStore } from "@/store/useTaskStore";

import Modal from "../shared/Modal";

export default function Filter() {
  const { taskType, handleTaskType, dueOn, handleDueOn } = useTaskStore();

  return (
    <div className="px-4">
      {/* Task based on */}

      <div className="rounded-xl bg-[#292D38] px-4 py-[10px]">
        <p className="font-mulish text-sm font-medium text-white">
          Task Based On
        </p>

        {/* Btn level 1 */}

        <div className="mt-[14px] flex gap-3">
          <button
            type="button"
            className={`flex h-[30px] w-full items-center justify-center rounded-lg font-mulish text-xs font-bold ${taskType === "All" ? "bg-white" : "bg-[#1B1E25] text-[#FFFFFFCC]"}`}
            onClick={() => handleTaskType("All")}
          >
            All
          </button>
          <button
            type="button"
            className={`flex h-[30px] w-full items-center justify-center rounded-lg font-mulish text-xs font-bold ${taskType === "GENERAL" ? "bg-white" : "bg-[#1B1E25] text-[#FFFFFFCC]"}`}
            onClick={() => handleTaskType("GENERAL")}
          >
            General Service
          </button>
        </div>

        {/* Btn level 2 */}

        <div className="mt-3 flex gap-3">
          <button
            type="button"
            className={`flex h-[30px] w-full items-center justify-center rounded-lg font-mulish text-xs font-bold ${taskType === "BRAND" ? "bg-white" : "bg-[#1B1E25] text-[#FFFFFFCC]"}`}
            onClick={() => handleTaskType("BRAND")}
          >
            Brand
          </button>
          <button
            type="button"
            className={`flex h-[30px] w-full items-center justify-center rounded-lg font-mulish text-xs font-bold ${taskType === "EVENT" ? "bg-white" : "bg-[#1B1E25] text-[#FFFFFFCC]"}`}
            onClick={() => handleTaskType("EVENT")}
          >
            Event
          </button>
          <button
            type="button"
            className={`flex h-[30px] w-full items-center justify-center rounded-lg font-mulish text-xs font-bold ${taskType === "INVENTORY" ? "bg-white" : "bg-[#1B1E25] text-[#FFFFFFCC]"}`}
            onClick={() => handleTaskType("INVENTORY")}
          >
            Inventory
          </button>
        </div>
      </div>

      {/* Utils */}

      {FilterBrandsBoxData.map((data) => (
        <div
          key={data.id}
          className="my-4 flex items-center justify-between rounded-xl bg-[#292D38] p-4"
        >
          <p className="font-mulish text-sm font-medium text-white">
            {data.title}
          </p>
          <div className="flex items-center gap-2">
            {data.isImg ? (
              <Image
                src="/assets/png/member.png"
                alt="member"
                width={26}
                height={26}
              />
            ) : null}
            <BiChevronRight color="white" size={20} />
          </div>
        </div>
      ))}

      {/* Due date */}

      <div className="my-4 rounded-xl bg-[#292D38] p-4">
        <div className="flex items-center gap-[6px]">
          <span className="font-mulish text-sm font-medium text-white">
            Due Date
          </span>
          <IoMdInformationCircleOutline size={16} color="white" />
        </div>

        <div className="mt-[14px] flex gap-3">
          <button
            type="button"
            className={`flex h-[30px] w-full items-center justify-center rounded-lg font-mulish text-xs font-bold ${dueOn === "ALL" ? "bg-white" : "bg-[#1B1E25] text-[#FFFFFFCC]"}`}
            onClick={() => handleDueOn("ALL")}
          >
            All
          </button>
          <button
            type="button"
            className={`flex h-[30px] w-full items-center justify-center rounded-lg font-mulish text-xs font-bold ${dueOn === "UPCOMING" ? "bg-white" : "bg-[#1B1E25] text-[#FFFFFFCC]"}`}
            onClick={() => handleDueOn("UPCOMING")}
          >
            Upcoming
          </button>
          <button
            type="button"
            className={`flex h-[30px] w-full items-center justify-center rounded-lg font-mulish text-xs font-bold ${dueOn === "OVERDUE" ? "bg-white" : "bg-[#1B1E25] text-[#FFFFFFCC]"}`}
            onClick={() => handleDueOn("OVERDUE")}
          >
            Overdue
          </button>
        </div>
      </div>

      {/* Sort by */}
      <Modal.Open opens="taskSortBy">
        <button
          type="button"
          className="my-4 flex w-full items-center justify-between rounded-xl bg-[#292D38] p-4"
        >
          <p className="font-mulish text-sm font-medium text-white">Sort by</p>
          <div className="flex items-center gap-2">
            <span className="font-mulish text-sm font-medium text-[#0094FF] ">
              Newest Created
            </span>
            <BiChevronRight color="white" size={20} />
          </div>
        </button>
      </Modal.Open>
    </div>
  );
}
