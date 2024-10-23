import { useEditTask, useTaskDetails } from "@/hooks/useTasks";
import { useTaskStore } from "@/store/useTaskStore";

import { useModal } from "../shared/Modal";

export default function ReOpenTask() {
  const { close } = useModal();
  const { taskId } = useTaskStore();
  const { data } = useTaskDetails(taskId || 0);

  const task = data?.task;

  const { mutate: editTask } = useEditTask(taskId || 0);

  if (!task) return null;

  const reOpenTask = () => {
    editTask(
      {
        title: task.title,
        dueOn: task.dueOn,
        relatedUsers: [task.taskAssignedTo[0].user.id],
        taskType: task.taskType,
        taskStatus: "PENDING",
        description: task.description,
        ...(task?.taskRelatedBrands[0]?.brand?.id && {
          relatedBrands: [task?.taskRelatedBrands[0]?.brand?.id],
        }),
        ...(task?.taskRelatedInventory[0]?.inventory?.id && {
          relatedInventory: [task?.taskRelatedInventory[0]?.inventory?.id],
        }),
        ...(task?.taskRelatedEvents[0]?.event?.id && {
          relatedEvents: [task?.taskRelatedEvents[0]?.event?.id],
        }),
      },
      {
        onSuccess: () => {
          close();
        },
      }
    );
  };

  return (
    <div
      className="mx-auto w-[70%] rounded-xl bg-[#2D3036] p-6 sm:mx-0 sm:w-[520px]"
      style={{ boxShadow: "0px 0px 72px 0px #00000024" }}
    >
      <div className="text-center font-recoletaAlt text-xl text-white">
        Are you sure?
      </div>
      <div className="mx-auto mt-[10px] w-4/5 text-center font-mulish text-white">
        Are you sure you want to reopen this task? The task creator will be
        notified.
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
          className="h-[40px] w-[200px] rounded-full bg-[#0094FF] font-mulish font-bold tracking-[0.036em] text-white sm:h-[50px]"
          type="button"
          onClick={reOpenTask}
        >
          REOPEN
        </button>
      </div>
    </div>
  );
}
