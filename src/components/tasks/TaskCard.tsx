import { capitalize, truncate } from "lodash";
import Image from "next/image";
import { GoAlertFill } from "react-icons/go";

import { useEditTask } from "@/hooks/useTasks";
import {
  calculateTimeLeft,
  calculateTimeOverdue,
  calculateTimePassed,
} from "@/lib/time.utils";
import { useTaskStore } from "@/store/useTaskStore";

import { Menu } from "../shared/Menu";
import Modal from "../shared/Modal";

interface TaskCardProps {
  taskId: number;
  createdAt: string;
  dueOn: string;
  serviceType: string;
  taskTitle: string;
  taskDescription: string;
  memberName: string;
  messageCount: number;
  tagCount: number;
  isBreached?: boolean;
  isCompleted: boolean;
  profileImg: string;
  assigneeId: number;
  brandId: number;
  inventoryId: number;
  eventId: number;
}

export default function TaskCard({
  taskId,
  createdAt,
  dueOn,
  serviceType,
  taskTitle,
  taskDescription,
  memberName,
  messageCount,
  tagCount,
  isBreached,
  isCompleted,
  profileImg,
  assigneeId,
  brandId,
  inventoryId,
  eventId,
}: TaskCardProps) {
  const { handleTaskId } = useTaskStore();
  const { mutate: editTask } = useEditTask(taskId);

  const calculateProgress = () => {
    const totalDuration =
      new Date(dueOn).getTime() - new Date(createdAt).getTime();
    const timePassed = new Date().getTime() - new Date(createdAt).getTime();

    // If totalDuration is 0 or negative (due date in the past), return 100% progress
    if (totalDuration <= 0) return 100;

    // Calculate the percentage of time passed
    const progress = Math.min((timePassed / totalDuration) * 100, 100);
    return progress;
  };

  // Calculate the progress bar width
  const progressWidth = `${calculateProgress()}%`;

  const due = calculateTimeOverdue(dueOn) || "Not overdue";

  const handleMarkAsCompleted = () => {
    editTask({
      title: taskTitle,
      dueOn,
      relatedUsers: [assigneeId],
      taskType: serviceType,
      taskStatus: "COMPLETED",
      description: taskDescription,
      ...(brandId && { relatedBrands: [brandId] }),
      ...(inventoryId && { relatedInventory: [inventoryId] }),
      ...(eventId && { relatedEvents: [eventId] }),
    });
  };

  return (
    // Task Card

    <div className="relative h-[236px] w-[400px] rounded-3xl bg-white p-4">
      {/* Card header */}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex size-[30px] items-center justify-center rounded-full bg-[#D8DFE9]">
            <Image
              src="/assets/svg/tasks/cube.svg"
              alt="cube"
              width={16}
              height={16}
            />
          </div>
          <span className="font-mulish text-sm font-medium text-[#000000B2]">
            {capitalize(serviceType)} Service
          </span>
        </div>

        <div className="flex items-center gap-2">
          {isBreached ? (
            <div className="flex items-center gap-1 rounded-full bg-[#FF6161] px-2 py-1">
              <GoAlertFill color="white" size={12} />
              <span className="font-mulish text-xs font-medium text-white">
                SLA Breached
              </span>
            </div>
          ) : null}

          <Menu>
            <Menu.Trigger>
              <button type="button" className="relative top-[3px]">
                <Image
                  src="/assets/svg/tasks/more-alt.svg"
                  alt="more-alt"
                  width={20}
                  height={20}
                />
              </button>
            </Menu.Trigger>

            <div className="relative right-28">
              <Menu.Items
                position="bottom"
                width="226px"
                className="border border-[#E6E6E6] bg-white"
              >
                <Modal.Open opens="view-task-info">
                  <Menu.Item
                    imgSrc="/assets/svg/tasks/info.svg"
                    btnName="View Info"
                    onClick={() => handleTaskId(taskId)}
                  />
                </Modal.Open>

                <Modal.Open opens="view-task-info">
                  <Menu.Item
                    imgSrc="/assets/svg/tasks/comment.svg"
                    btnName="Add Comment"
                    onClick={() => handleTaskId(taskId)}
                  />
                </Modal.Open>

                <Modal.Open opens="edit-task">
                  <Menu.Item
                    imgSrc="/assets/svg/tasks/edit.svg"
                    btnName="Edit"
                    onClick={() => handleTaskId(taskId)}
                  />
                </Modal.Open>
                <Modal.Open opens="duplicate-task">
                  <Menu.Item
                    imgSrc="/assets/svg/tasks/duplicate.svg"
                    btnName="Duplicate Task"
                    onClick={() => handleTaskId(taskId)}
                  />
                </Modal.Open>
                <div className="mx-[10px] my-2 border-b border-dashed border-[#00000033]" />
                {!isCompleted ? (
                  <>
                    <Menu.Item
                      imgSrc="/assets/svg/tasks/tick-mark.svg"
                      btnName="Mark as Completed"
                      onClick={handleMarkAsCompleted}
                    />
                    <div className="mx-[10px] my-2 border-b border-dashed border-[#00000033]" />
                  </>
                ) : null}

                <Modal.Open opens="delete-task">
                  <Menu.Item
                    imgSrc="/assets/svg/tasks/delete.svg"
                    btnName="Delete"
                    isDanger
                    onClick={() => handleTaskId(taskId)}
                  />
                </Modal.Open>
              </Menu.Items>
            </div>
          </Menu>
        </div>
      </div>

      {/* Task title */}

      {!isCompleted ? (
        <h5 className="mt-4 font-recoletaAlt">
          {truncate(taskTitle, { length: 30 })}
        </h5>
      ) : (
        <div className="mt-4 flex items-center gap-[5px]">
          <Image
            src="/assets/svg/tasks/blue-tick.svg"
            alt="blue-tick"
            width={20}
            height={20}
          />
          <h5 className="font-recoletaAlt line-through">
            {truncate(taskTitle, { length: 30 })}
          </h5>
        </div>
      )}

      {/* Task description */}

      <div className="mt-2 break-words font-mulish text-sm">
        {truncate(taskDescription, { length: 85 })}
      </div>

      <div className="absolute inset-x-4 bottom-3">
        {/* Task duration */}

        <div className="mt-[14px]">
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              {!isCompleted ? (
                <Image
                  src="/assets/svg/tasks/clock.svg"
                  alt="clock"
                  width={20}
                  height={20}
                />
              ) : (
                <Image
                  src="/assets/svg/tasks/green-tick.svg"
                  alt="clock"
                  width={20}
                  height={20}
                />
              )}

              {!isCompleted ? (
                <div className="font-mulish text-xs font-medium text-[#000000CC]">
                  {calculateTimePassed(createdAt)}{" "}
                  <span className="font-bold">passed</span>
                </div>
              ) : (
                <div className="font-mulish text-xs font-medium text-[#0EAB00]">
                  <span className="font-bold">Finished in</span>{" "}
                  {calculateTimePassed(createdAt)}
                </div>
              )}
            </div>

            {!isCompleted && due === "Not overdue" ? (
              <div className="font-mulish text-xs font-medium text-[#000000CC]">
                {calculateTimeLeft(dueOn, false)}{" "}
                <span className="font-bold">left</span>
              </div>
            ) : null}

            {due !== "Not overdue" ? (
              <div className="font-mulish text-xs font-medium text-[#FC5602]">
                {due} <span className="font-bold">late</span>
              </div>
            ) : null}
          </div>

          {/* Progress bar */}

          <div className="mt-1 h-[6px] w-full rounded-3xl bg-[#E6E6E6]">
            <div
              className="h-[6px] rounded-3xl"
              style={{
                backgroundColor: due === "Not overdue" ? "#0EAB00" : "#FC5602",
                width: progressWidth,
              }}
            />
          </div>
        </div>

        {/* Card footer */}

        <div className="mt-4 flex items-center justify-between">
          {/* Person profile and name */}

          <div className="flex items-center gap-2">
            <Image
              src={profileImg || "/assets/png/member2.png"}
              alt="profile"
              width={28}
              height={28}
              className="aspect-square rounded-full object-contain"
            />
            <span className="font-mulish text-sm font-medium text-[#000000CC]">
              {memberName}
            </span>
          </div>

          {/* Message and tag */}

          <div className="flex items-center gap-4 font-mulish text-xs font-medium text-[#000000CC]">
            <div className="flex items-center gap-[2px]">
              <Image
                src="/assets/svg/tasks/chat.svg"
                alt="chat-icon"
                width={14}
                height={14}
              />
              <span>{messageCount}</span>
            </div>
            <div className="flex items-center gap-[2px]">
              <Image
                src="/assets/svg/tasks/tag.svg"
                alt="tag-icon"
                width={16}
                height={16}
              />
              <span>{tagCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
