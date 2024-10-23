"use client";

import { truncate } from "lodash";
import Image from "next/image";

import { useTasksData } from "@/hooks/useTasks";
import { useTaskStore } from "@/store/useTaskStore";

import Container from "../shared/Container";

export default function Tasks() {
  const { taskCategory, timeFilter, taskType, dueOn, sortBy, order } =
    useTaskStore();

  const { isPending, isError, data } = useTasksData(
    taskCategory,
    1,
    4,
    ["PENDING"],
    timeFilter,
    taskType === "All" ? [] : [taskType],
    dueOn,
    sortBy,
    order
  );

  return (
    <Container
      name="Your Tasks"
      className="mx-4 text-white lg:mx-0"
      linkTo="/tasks"
    >
      {/* Show the "Coming Soon" message if there's an error or no data */}
      {isError || (!isPending && (!data || data.data.tasks.length === 0)) ? (
        <div className="mb-8 flex h-full flex-col items-center justify-center gap-2 text-center font-mulish lg:mb-0 lg:mt-16">
          <Image
            src="/assets/png/empty.png"
            alt="empty-img"
            width={150}
            height={150}
          />
          <span className="font-recoletaAlt text-xl">Coming Soon!</span>
          <div className="mt-2 flex flex-col gap-1 text-sm">
            <span>The task management feature will be available soon.</span>
            <span>Stay tuned for updates!</span>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {data?.data.tasks.map((task) => (
            <div className="flex items-start gap-3" key={task.id}>
              <div className="mt-1 shrink-0">
                <input type="checkbox" className="size-4 rounded-full" />
              </div>
              <div>
                <div className="flex flex-col">
                  <span className="font-mulish text-sm">
                    {truncate(task.title, { length: 60 })}
                  </span>
                  <span className="font-mulish text-xs font-medium tracking-[0.036em] text-[#FFFFFF99]">
                    {truncate(task.description, { length: 60 })}
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-4 font-mulish text-xs">
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
          ))}
        </div>
      )}
    </Container>
  );
}
