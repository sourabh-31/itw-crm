import { useTaskStore } from "@/store/useTaskStore";

export default function SortBy() {
  const { sortBy, order, handleSortBy, handleOrder } = useTaskStore();

  return (
    <div className="rounded-lg bg-[#1b1e25] px-3 py-px">
      {/* Newest created */}

      <button
        type="button"
        onClick={() => {
          handleSortBy("createdAt");
          handleOrder("ASC");
        }}
        className={`my-4 flex w-full items-center justify-between rounded-xl p-4 ${sortBy === "createdAt" && order === "ASC" ? "bg-white" : "bg-[#292D38] text-[#ffffff]"}`}
      >
        <div className="flex items-center gap-2">
          <span className="font-mulish text-sm font-medium">
            Newest created
          </span>
        </div>
      </button>

      {/* Oldest created */}

      <button
        type="button"
        onClick={() => {
          handleSortBy("createdAt");
          handleOrder("DESC");
        }}
        className={`my-4 flex w-full items-center justify-between rounded-xl p-4 ${sortBy === "createdAt" && order === "DESC" ? "bg-white" : "bg-[#292D38] text-[#ffffff]"}`}
      >
        <div className="flex items-center gap-2">
          <span className="font-mulish text-sm font-medium">
            Oldest Created
          </span>
        </div>
      </button>

      {/* Alphabetical Order (A-Z) */}

      <button
        type="button"
        onClick={() => {
          handleSortBy("title");
          handleOrder("ASC");
        }}
        className={`my-4 flex w-full items-center justify-between rounded-xl p-4 ${sortBy === "title" && order === "ASC" ? "bg-white" : "bg-[#292D38] text-[#ffffff]"}`}
      >
        <div className="flex items-center gap-2">
          <span className="font-mulish text-sm font-medium">
            Alphabetical Order (A-Z)
          </span>
        </div>
      </button>

      {/* Alphabetical Order (Z-A) */}

      <button
        type="button"
        onClick={() => {
          handleSortBy("title");
          handleOrder("DESC");
        }}
        className={`my-4 flex w-full items-center justify-between rounded-xl p-4 ${sortBy === "title" && order === "DESC" ? "bg-white" : "bg-[#292D38] text-[#ffffff]"}`}
      >
        <div className="flex items-center gap-2">
          <span className="font-mulish text-sm font-medium">
            Alphabetical Order (Z-A)
          </span>
        </div>
      </button>

      {/* Due Date (Soonest First) */}

      <button
        type="button"
        onClick={() => {
          handleSortBy("dueOn");
          handleOrder("ASC");
        }}
        className={`my-4 flex w-full items-center justify-between rounded-xl p-4 ${sortBy === "dueOn" && order === "ASC" ? "bg-white" : "bg-[#292D38] text-[#ffffff]"}`}
      >
        <div className="flex items-center gap-2">
          <span className="font-mulish text-sm font-medium">
            Due Date (Soonest First)
          </span>
        </div>
      </button>

      {/* Due Date (Farthest First) */}

      <button
        type="button"
        onClick={() => {
          handleSortBy("dueOn");
          handleOrder("DESC");
        }}
        className={`my-4 flex w-full items-center justify-between rounded-xl p-4 ${sortBy === "dueOn" && order === "DESC" ? "bg-white" : "bg-[#292D38] text-[#ffffff]"}`}
      >
        <div className="flex items-center gap-2">
          <span className="font-mulish text-sm font-medium">
            Due Date (Farthest First)
          </span>
        </div>
      </button>
    </div>
  );
}
