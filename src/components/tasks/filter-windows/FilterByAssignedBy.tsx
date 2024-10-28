import Image from "next/image";
import { useState } from "react";

import Spinner from "@/components/shared/Spinner";
import { useProfile } from "@/hooks/useData";
import { useAssigneeData } from "@/hooks/useTasks";
import { useTaskStore } from "@/store/useTaskStore";

export default function FilterByAssignedBy() {
  const { data = null } = useProfile();
  const [search, setSearch] = useState("");
  const userId = data?.id ?? 0;
  const brandFilter = [userId];

  const {
    handleFilteredByAddedBy,
    filteredByAddedBy,
    removeFilteredByAddedBy,
  } = useTaskStore();

  const {
    data: assigneeData,
    isFetching,
    isError,
  } = useAssigneeData(brandFilter, 0, 0, search);

  const handleAssignedByCheck = (id: number, img: string) => {
    if (filteredByAddedBy.some((data) => data.id === id)) {
      removeFilteredByAddedBy(id);
    } else {
      handleFilteredByAddedBy(id, img);
    }
  };

  return (
    <div className="rounded-lg bg-[#1b1e25] px-3 py-px">
      <input
        type="text"
        className="w-full rounded-full bg-[#0E0E0E] p-4 font-mulish text-sm text-white outline-none placeholder:text-[#6e6e6e]"
        placeholder="Search assigned by"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {isFetching ? (
        <div className="mt-10">
          <Spinner />
        </div>
      ) : isError || !assigneeData?.data.users.length ? (
        <div className="ml-2 mt-6 font-recoletaAltReg text-lg font-bold tracking-[0.036em] text-[#FFFFFFcc]">
          No assigned by found.
        </div>
      ) : (
        assigneeData?.data.users.map((data) => (
          <button
            key={data.id}
            type="button"
            className={`my-4 flex w-full items-center justify-between rounded-xl bg-[#292D38] p-4 text-left text-[#ffffff] ${filteredByAddedBy.some((val) => val.id === data.id) ? "ring-1 ring-white" : ""}`}
            onClick={() => handleAssignedByCheck(data.id, data.profileImage)}
          >
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                className="relative size-[14px] shrink-0 cursor-pointer appearance-none rounded-sm border border-white 
             bg-transparent checked:border-white checked:bg-transparent
             checked:before:absolute checked:before:bottom-[2.25px] checked:before:left-[3px] checked:before:h-[10px] checked:before:w-[6px] checked:before:rotate-45 checked:before:border-b-2 checked:before:border-r-2 checked:before:border-white focus:outline-none"
                onChange={() =>
                  handleAssignedByCheck(data.id, data.profileImage)
                }
                checked={filteredByAddedBy.some((val) => val.id === data.id)}
              />
              <div className="flex items-center gap-2">
                <Image
                  src={data.profileImage}
                  alt="brand-icon"
                  width={20}
                  height={20}
                  className="aspect-square rounded-full bg-[#ffffff] object-cover"
                />
                <span className="font-mulish text-sm font-medium">
                  {data.firstName} {data.lastName}
                </span>
              </div>
            </div>
          </button>
        ))
      )}
    </div>
  );
}
