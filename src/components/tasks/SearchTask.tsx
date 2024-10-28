import { CgClose } from "react-icons/cg";

import { useTaskStore } from "@/store/useTaskStore";

import { useModal } from "../shared/Modal";

export default function SearchTask() {
  const { search, handleSearch } = useTaskStore();
  const { close } = useModal();

  return (
    <div className="flex w-[340px] flex-col rounded-[20px] bg-[#1E2029] px-4 pb-6 pt-4 sm:w-[600px] md:w-[700px]">
      <div className="flex items-center justify-between">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label
          htmlFor="search-task"
          className="font-recoletaAlt text-xl text-[#FFFFFF66]"
        >
          Search Task
        </label>

        <button type="button" onClick={() => close()}>
          <CgClose size={20} color="white" />
        </button>
      </div>
      <input
        placeholder="Search task..."
        id="search-task"
        className="mt-3 rounded border border-[#ffffff33] bg-transparent px-3 py-2 font-mulish text-sm text-[#FFFFFFCC] outline-none"
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}
