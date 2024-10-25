import { capitalize, truncate } from "lodash";
import Image from "next/image";
import { RiCalendarTodoLine } from "react-icons/ri";

import { useEditTask } from "@/hooks/useTasks";
import { formatDueDate } from "@/lib/time.utils";
import type { Task } from "@/types/allTasks.type";

export default function TaskLine({ task }: { task: Task }) {
  const { mutate: editTask } = useEditTask(task.id || 0);

  const { text: dueDate, colorScheme } = formatDueDate(task.dueOn);

  // Mark task as complete
  const markAsComplete = () => {
    editTask({
      title: task.title,
      dueOn: task.dueOn,
      relatedUsers: [task.taskAssignedTo[0].user.id],
      taskType: task.taskType,
      taskStatus: "COMPLETED",
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
    });
  };

  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 shrink-0">
        <input
          type="checkbox"
          className="custom-checkbox size-4 rounded-full"
          onChange={markAsComplete}
        />
      </div>
      <div>
        <div className="flex flex-col">
          {/* Task title */}
          <span className="font-mulish text-sm">
            {capitalize(truncate(task.title, { length: 100 }))}
          </span>

          {/* Task description */}
          <span className="font-mulish text-xs font-medium tracking-[0.036em] text-[#FFFFFF99]">
            {capitalize(truncate(task.description, { length: 100 }))}
          </span>
        </div>
        <div className="mt-2 flex items-center gap-4 font-mulish text-xs">
          <div className="flex items-center gap-1">
            <RiCalendarTodoLine size={16} color={colorScheme.icon} />
            <span className="font-semibold" style={{ color: colorScheme.text }}>
              {dueDate}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/assets/svg/comment.svg"
              alt="comment"
              width={16}
              height={16}
            />
            <span>{task.commentsCount}</span>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/assets/svg/clip.svg"
              alt="clip"
              width={16}
              height={16}
            />
            <span>{task.attachmentsCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
