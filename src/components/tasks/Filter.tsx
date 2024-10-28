import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";
import { IoMdInformationCircleOutline } from "react-icons/io";

import { useTaskStore } from "@/store/useTaskStore";

import { SidebarFilter } from "./FilterBrands";

export default function Filter() {
  const {
    taskType,
    handleTaskType,
    dueOn,
    handleDueOn,
    filteredByAddedBy,
    filteredByAssignedTo,
    filteredByTeamOwner,
  } = useTaskStore();

  // Get profile img for the parent sidebar
  const assigneeProfileImg = filteredByAddedBy.map((data) => data.img);
  const assignedToProfileImg = filteredByAssignedTo.map((data) => data.img);
  const teamOwnerImg = filteredByTeamOwner.map((data) => data.img);

  // Filter options data
  const FilterBrandsBoxData = [
    {
      id: 1,
      title: "Assigned By",
      name: "filter-assignedBy",
      imgSrc: assigneeProfileImg ?? [],
      count: assigneeProfileImg?.length > 3 ? assigneeProfileImg.length : 0,
      isImg: true,
      isCount: true,
    },
    {
      id: 2,
      title: "Assigned To",
      name: "filter-assignedTo",
      imgSrc: assignedToProfileImg ?? [],
      count: assignedToProfileImg?.length > 3 ? assignedToProfileImg.length : 0,
      isImg: true,
      isCount: true,
    },
    {
      id: 3,
      title: "Team Owners",
      name: "filter-teamOwners",
      imgSrc: teamOwnerImg ?? [],
      count: teamOwnerImg?.length > 3 ? teamOwnerImg.length : 0,
      isImg: true,
      isCount: true,
    },
    {
      id: 4,
      title: "Brands",
      name: "filter-brands",
      isImg: false,
      isCount: false,
    },
    {
      id: 5,
      title: "Inventories",
      name: "filter-inventories",
      isImg: false,
      isCount: false,
    },
    {
      id: 6,
      title: "Current Events",
      name: "filter-currentEvents",
      isImg: false,
      isCount: false,
    },
    {
      id: 7,
      title: "Archived Events",
      name: "filter-archivedEvents",
      isImg: false,
      isCount: false,
    },
  ];

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
        <SidebarFilter.Open key={data.id} opens={data.name}>
          <button
            type="button"
            className="my-4 flex w-full items-center justify-between rounded-xl bg-[#292D38] p-4"
          >
            <p className="font-mulish text-sm font-medium text-white">
              {data.title}
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {data.isImg
                  ? data.imgSrc?.slice(0, 3).map((data) => (
                      <div
                        className="-mx-1 rounded-full bg-[#ffea8e]"
                        key={data}
                      >
                        <Image
                          src={data}
                          alt="member"
                          width={26}
                          height={26}
                          key={data}
                          className="aspect-square rounded-full object-cover"
                        />
                      </div>
                    ))
                  : null}

                {/* Profile images count */}

                {data.isCount && data.count !== 0 ? (
                  <div className="ml-2 font-mulish text-sm font-semibold text-[#0094FF]">
                    +{data.count && data.count - 3}
                  </div>
                ) : null}
              </div>
              <BiChevronRight color="white" size={20} />
            </div>
          </button>
        </SidebarFilter.Open>
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
      <SidebarFilter.Open opens="filter-sortBy">
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
      </SidebarFilter.Open>
    </div>
  );
}
