import { useState } from "react";

import Spinner from "@/components/shared/Spinner";
import { useEventData } from "@/hooks/useTasks";
import { useTaskStore } from "@/store/useTaskStore";

export default function FilterByArchivedEvents() {
  const [search, setSearch] = useState("");

  const {
    handleFilteredByArchivedEvents,
    filteredByArchivedEvents,
    removeFilteredByArchivedEvents,
  } = useTaskStore();

  const {
    data: eventData,
    isFetching,
    isError,
  } = useEventData(0, 0, true, search);

  const handleArchivedEventsCheck = (id: number) => {
    if (filteredByArchivedEvents.includes(id)) {
      removeFilteredByArchivedEvents(id);
    } else {
      handleFilteredByArchivedEvents(id);
    }
  };

  return (
    <div className="rounded-lg bg-[#1b1e25] px-3 py-px">
      <input
        type="text"
        className="w-full rounded-full bg-[#0E0E0E] p-4 font-mulish text-sm text-white outline-none placeholder:text-[#6e6e6e]"
        placeholder="Search archived events"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {isFetching ? (
        <div className="mt-10">
          <Spinner />
        </div>
      ) : isError || !eventData?.data.events.length ? (
        <div className="ml-2 mt-6 font-recoletaAltReg text-lg font-bold tracking-[0.036em] text-[#FFFFFFcc]">
          No archived events found.
        </div>
      ) : (
        eventData?.data.events.map((data) => (
          <button
            key={data.id}
            type="button"
            className={`my-4 flex w-full items-center justify-between rounded-xl bg-[#292D38] p-4 text-left text-[#ffffff] ${filteredByArchivedEvents.includes(data.id) ? "ring-1 ring-white" : ""}`}
            onClick={() => handleArchivedEventsCheck(data.id)}
          >
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                className="relative size-[14px] shrink-0 cursor-pointer appearance-none rounded-sm border border-white 
             bg-transparent checked:border-white checked:bg-transparent
             checked:before:absolute checked:before:bottom-[2.25px] checked:before:left-[3px] checked:before:h-[10px] checked:before:w-[6px] checked:before:rotate-45 checked:before:border-b-2 checked:before:border-r-2 checked:before:border-white focus:outline-none"
                onChange={() => handleArchivedEventsCheck(data.id)}
                checked={filteredByArchivedEvents.includes(data.id)}
              />
              <div className="flex items-center gap-2">
                <span className="font-mulish text-sm font-medium">
                  {data.name}
                </span>
              </div>
            </div>
          </button>
        ))
      )}
    </div>
  );
}
