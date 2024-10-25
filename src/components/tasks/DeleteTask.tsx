import { useDeleteTask } from "@/hooks/useTasks";
import { useTaskStore } from "@/store/useTaskStore";

import { useModal } from "../shared/Modal";

export default function DeleteTask() {
  const { close } = useModal();
  const { taskId, resetTaskId } = useTaskStore();

  const { isPending, mutate: deleteTask } = useDeleteTask();

  // Delete task
  function handleDeleteTask() {
    if (taskId) {
      deleteTask(taskId, {
        onSuccess: () => {
          close();
          resetTaskId();
        },
      });
    }
  }

  return (
    <div
      className="mx-auto w-[70%] rounded-xl bg-[#2D3036] p-6 sm:mx-0 sm:w-[520px]"
      style={{ boxShadow: "0px 0px 72px 0px #00000024" }}
    >
      <div className="text-center font-recoletaAlt text-xl text-white">
        Are you sure?
      </div>
      <div className="mx-auto mt-[10px] w-4/5 text-center font-mulish text-white">
        Are you sure you want to delete this task? This action cannot be undone.
        The assigned person for this task will be notified.
      </div>

      <div className="mb-3 mt-6 flex items-center justify-center gap-5">
        <button
          className="h-[40px] w-[200px] rounded-full border border-[#FFFFFF66] bg-[#FFFFFF] font-mulish font-bold tracking-[0.036em] text-[#383838] sm:h-[50px]"
          type="button"
          onClick={() => {
            close();
          }}
        >
          CANCEL
        </button>
        <button
          className="h-[40px] w-[200px] rounded-full bg-[#EE7360] font-mulish font-bold tracking-[0.036em] text-[#000000] sm:h-[50px]"
          type="button"
          onClick={handleDeleteTask}
        >
          {isPending ? "DELETING..." : "DELETE"}
        </button>
      </div>
    </div>
  );
}
