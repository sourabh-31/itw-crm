import axios from "axios";
import Image from "next/image";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { toast } from "sonner";

import { useProfile } from "@/hooks/useData";
import {
  useAddComment,
  useAssigneeData,
  useCreateTask,
  useEditTask,
  useTaskDetails,
} from "@/hooks/useTasks";
import { convertBytesToMB } from "@/lib/size.utils";
import {
  calculateTimeLeft,
  calculateTimeOverdue,
  calculateTimePassed,
  formatDateTime,
} from "@/lib/time.utils";
import { uploadRequest } from "@/server/upload.action";
import { useTaskStore } from "@/store/useTaskStore";
import type { Attachment, UploadResponse } from "@/types/uploadRequest.type";

import { Menu } from "../shared/Menu";
import Modal, { useModal } from "../shared/Modal";
import CommentAndHistory from "./CommentAndHistory";

export default function TaskDetails() {
  const { close, open } = useModal();
  const [recordBox, setRecordBox] = useState(false);
  const [comment, setComment] = useState("");
  const { taskId, handleTaskId, handleUserId, handleUserName } = useTaskStore();
  const { data } = useTaskDetails(taskId || 0);
  const { mutate: addTask } = useCreateTask();
  const { mutate: editTask } = useEditTask(taskId || 0);

  const [attachments, setAttachments] = useState<Attachment[]>([]);

  const { data: userData = null } = useProfile();
  const userId = userData?.id ?? 0;
  const brandFilter = [userId];

  // Call assignee and brand data
  const { data: assigneeData } = useAssigneeData(brandFilter, 0, 0);
  const { mutate: addComment, isPending } = useAddComment(taskId || 0);

  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    let fileName;
    let url;

    const file = e.target.files[0];
    const fileType = file.name.split(".")[1];
    const fileSize = String(file.size);

    const response: UploadResponse = await uploadRequest(fileType);
    if (response) {
      fileName = response.data.fileName;
      url = response.data.url;
      uploadFileToS3(file, response);
    }

    const attachment: Attachment = {
      url: url || "",
      fileSize,
      fileName: fileName || "",
    };
    setAttachments((val) => [...val, attachment]);
  };

  const uploadFileToS3 = async (file: File, uploadData: UploadResponse) => {
    try {
      // Create form data for the upload
      const formData = new FormData();
      Object.entries(uploadData.data.fields).forEach(([key, value]) => {
        formData.append(key, value);
      });

      formData.append("key", uploadData.data.fileName);
      formData.append("file", file);
      await axios.post(uploadData.data.url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("File uploaded successfully!");
    } catch (error) {
      toast.error("File upload failed");
    }
  };

  const task = data?.task;
  if (!task) return null;

  // Fetch task details
  const getTaskDetailsData = () => [
    {
      id: 1,
      title: "Task status",
      imgSrc: "/assets/svg/tasks/task-details/book.svg",
      name: task.status === "PENDING" ? "Open" : "Completed",
      isStatus: true,
    },
    {
      id: 2,
      title: "Assigned to",
      imgSrc:
        task.taskAssignedTo[0]?.user.profileImage || "/assets/png/member.png",
      name: `${task.taskAssignedTo[0]?.user.firstName} ${task.taskAssignedTo[0]?.user.lastName}`,
      isStatus: false,
    },
    {
      id: 3,
      title: "Related brand",
      imgSrc: task.taskRelatedBrands[0]?.brand.brandImage,
      name: task.taskRelatedBrands[0]?.brand.name || "N/A",
      isStatus: false,
    },
    {
      id: 4,
      title: "Time left",
      imgSrc: "/assets/svg/tasks/task-details/clock.svg",
      name: calculateTimeLeft(task.dueOn, true) || "Past due",
      isStatus: false,
    },
    {
      id: 5,
      title: "Time passed",
      imgSrc: "/assets/svg/tasks/task-details/clock.svg",
      name: calculateTimePassed(task.createdAt),
      isStatus: false,
    },
    {
      id: 6,
      title: "Late by",
      imgSrc: "/assets/svg/tasks/task-details/clock-red.svg",
      name: calculateTimeOverdue(task.dueOn) || "Not overdue",
      isStatus: false,
    },
    {
      id: 7,
      title: "Created by",
      imgSrc: task.addedBy.profileImage || "/assets/png/member.png",
      name: `${task.addedBy.firstName} ${task.addedBy.lastName}`,
      isStatus: false,
    },
    {
      id: 8,
      title: "Created on",
      imgSrc: "/assets/svg/tasks/task-details/calendar.svg",
      name: formatDateTime(task.createdAt),
      isStatus: false,
    },
  ];

  // Handle duplicate task
  const handleDuplicateTask = () => {
    addTask(
      {
        title: task.title,
        dueOn: task.dueOn,
        relatedUsers: [task.taskAssignedTo[0].user.id],
        taskType: task.taskType,
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

  // Mark as complete
  const markAsComplete = () => {
    if (task.status === "PENDING") {
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
    } else {
      open("reopen-task");
    }
  };

  // Add comment
  const handleAddComment = () => {
    if (!comment) {
      toast.error("Please write comment");
      return;
    }

    if (taskId) {
      addComment(
        { comment, attachments },
        {
          onSuccess: () => {
            // Clear the contentEditable div
            const commentBox = document.querySelector(".textarea-comment");
            if (commentBox) {
              commentBox.textContent = "";
            }
            // Reset the comment state
            setComment("");
            setAttachments([]);
          },
        }
      );
    }
  };

  const handleRemoveAttachment = (name: string) => {
    setAttachments((attachments) =>
      attachments.filter((data) => data.fileName !== name)
    );
  };

  return (
    <div className="flex h-[794px] w-[958px] flex-col overflow-hidden rounded-[20px] bg-[#292D38]">
      <div className="flex items-center justify-between border-b border-gray-light px-5 py-4">
        <div className="flex items-center gap-2">
          {/* Close btn */}
          <button type="button" onClick={() => close()}>
            <IoClose color="white" size={24} />
          </button>

          {/* Task heading text */}
          <div className="flex flex-col">
            <span className="font-recoletaAlt text-xl text-white">
              Task for
            </span>
            <span className="font-mulish text-sm text-white">
              {`${task.taskAssignedTo[0]?.user.firstName} ${task.taskAssignedTo[0]?.user.lastName}`}
            </span>
          </div>
        </div>

        {/* Task utility options */}
        <div className="flex items-center gap-[14px]">
          <Menu>
            <Menu.Trigger>
              <button
                type="button"
                className="flex size-12 items-center justify-center rounded-full border border-[#50515B] bg-[#23252D]"
              >
                <Image
                  src="/assets/svg/tasks/link.svg"
                  alt="link"
                  width={20}
                  height={20}
                />
              </button>
            </Menu.Trigger>

            <div className="relative right-24 top-2">
              <Menu.Items
                position="bottom"
                width="226px"
                className="mt-6 border border-[#E6E6E6] bg-white"
              >
                {assigneeData?.data.users.map((data) => (
                  <Modal.Open opens="reassign-task" key={data.id}>
                    <Menu.Item
                      imgSrc="/assets/svg/tasks/user.svg"
                      btnName={data.firstName}
                      onClick={() => {
                        handleUserId(data.id);
                        handleUserName(data.firstName);
                      }}
                    />
                  </Modal.Open>
                ))}
              </Menu.Items>
            </div>
          </Menu>

          <Menu>
            <Menu.Trigger>
              <button
                type="button"
                className="flex size-12 items-center justify-center rounded-full border border-[#50515B] bg-[#23252D]"
              >
                <Image
                  src="/assets/svg/tasks/more-white.svg"
                  alt="more-white"
                  width={20}
                  height={20}
                />
              </button>
            </Menu.Trigger>
            <div className="relative right-24 top-2">
              <Menu.Items
                position="bottom"
                width="226px"
                className="border border-[#E6E6E6] bg-white"
              >
                <Menu.Item
                  imgSrc="/assets/svg/tasks/comment.svg"
                  btnName="Add Comment"
                />
                <Modal.Open opens="edit-task">
                  <Menu.Item
                    imgSrc="/assets/svg/tasks/edit.svg"
                    btnName="Edit"
                  />
                </Modal.Open>
                <Menu.Item
                  imgSrc="/assets/svg/tasks/duplicate.svg"
                  btnName="Duplicate Task"
                  onClick={handleDuplicateTask}
                />
                <div className="mx-[10px] my-2 border-b border-dashed border-[#00000033]" />
                <Menu.Item
                  imgSrc="/assets/svg/tasks/tick-mark.svg"
                  btnName="Mark as Completed"
                />
                <div className="mx-[10px] my-2 border-b border-dashed border-[#00000033]" />
                <Modal.Open opens="delete-task">
                  <Menu.Item
                    imgSrc="/assets/svg/tasks/delete.svg"
                    btnName="Delete"
                    isDanger
                    onClick={() => handleTaskId(data.task.id)}
                  />
                </Modal.Open>
              </Menu.Items>
            </div>
          </Menu>
        </div>
      </div>

      {/* Task details main */}
      <div className="flex flex-1">
        {/* Left part (comment and history section) */}
        <div className="flex-1 px-5 py-4">
          <div className="border-b border-gray-light pb-9">
            <div className="flex items-start gap-[14px]">
              <div className="mt-1 shrink-0">
                <input
                  type="checkbox"
                  className="custom-checkbox size-4 rounded-full"
                  onChange={markAsComplete}
                  checked={task.status === "COMPLETED"}
                />
              </div>

              <div>
                <h3
                  className={`max-w-[600px] break-words font-recoletaAlt text-xl text-white ${task.status === "COMPLETED" ? "line-through" : ""}`}
                >
                  {task.title}
                </h3>

                {/* <div className="mt-[6px] flex w-fit items-center gap-1 rounded-full bg-[#FF6161] py-[2px] pl-2 pr-3">
                    <GoAlertFill color="white" size={12} />
                    <span className="font-mulish text-xs font-medium text-white">
                      SLA Breached
                    </span>
                  </div> */}

                <p className="mt-[10px] max-w-[600px] break-words font-mulish text-sm font-normal text-[#FFFFFFCC]">
                  {task.description}
                </p>
              </div>
            </div>
          </div>

          {/* Audio record box */}
          {!recordBox ? (
            <div className="relative mt-6 w-[630px] rounded-[8px] border border-[#FFFFFF33] bg-[#FFFFFF0F] px-4 pb-12 pt-3">
              <span
                className="textarea-comment mb-4 block max-h-[15vh] min-h-[60px] cursor-pointer overflow-y-auto font-mulish text-[#FFFFFFCC] outline-none"
                role="textbox"
                contentEditable
                aria-label="comment"
                onInput={(e) => setComment(e.currentTarget.textContent || "")}
              />

              <div className="mb-6 space-y-2">
                {attachments.map((data) => (
                  <div
                    className="flex w-full items-center justify-between rounded-xl bg-[#242632] px-3 py-2"
                    key={data.url}
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/svg/tasks/file-icon.svg"
                        alt="file-icon"
                        width={24}
                        height={24}
                      />
                      <div className="relative top-[-2px]">
                        <span className="font-mulish text-sm font-medium text-white">
                          {data.fileName}
                        </span>
                        <div className="flex items-center gap-1 font-mulish text-xs">
                          <span className="text-[#D1D5DC]">
                            {convertBytesToMB(Number(data.fileSize))}MB
                          </span>
                          {/* <span className="size-[2px] bg-[#D1D5DC] rounded-full" /> */}
                          {/* <span style={{ color: "#FFE58E" }}>
                            Uploading... 10%
                          </span> */}
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleRemoveAttachment(data.fileName)}
                    >
                      <CgClose color="white" size={16} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="absolute bottom-4 right-5 mt-6 flex items-center gap-4">
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor="attachment" className="cursor-pointer">
                  <Image
                    src="/assets/svg/tasks/clip.svg"
                    alt="clip"
                    width={23}
                    height={23}
                  />
                </label>
                <input
                  type="file"
                  hidden
                  id="attachment"
                  name="attachment"
                  accept="*"
                  onChange={(e) => handleFileUpload(e)}
                />
                {/* <button type="button" onClick={() => setRecordBox(true)}>
                  <Image
                    src="/assets/svg/tasks/mic.svg"
                    alt="clip"
                    width={23}
                    height={23}
                  />
                </button> */}
                <button
                  type="button"
                  className="flex h-[40px] w-[110px] items-center justify-center rounded-full bg-blue font-mulish text-sm font-bold text-white"
                  onClick={handleAddComment}
                >
                  {isPending ? "ADDING..." : "PUBLISH"}
                </button>
              </div>
            </div>
          ) : (
            <div className="relative mt-6 flex h-[138px] w-full items-center justify-center rounded-lg border border-[#FFFFFF33] bg-[#FFFFFF0F]">
              <div className="flex h-[85%] w-[97%] flex-col items-center justify-center rounded border border-dashed border-[#FFE58E]">
                <Image
                  src="/assets/svg/tasks/mic.svg"
                  alt="mic"
                  width={23}
                  height={23}
                />
                <span className="font-mulish text-white">00:00</span>
                <button
                  type="button"
                  className="relative top-1 font-mulish text-sm font-bold text-[#FFFFFFCC] underline"
                >
                  Record
                </button>
              </div>
              <button
                type="button"
                className="absolute right-6 top-[22px]"
                onClick={() => setRecordBox(false)}
              >
                <IoClose size={20} color="#FFFFFF66" />
              </button>
            </div>
          )}

          {/* comments and history section */}
          <div className="mt-6">
            <CommentAndHistory />
          </div>
        </div>

        {/* Right part (Task details) */}
        <div className="w-[280px] rounded-br-[20px] bg-[#1E212A] px-6 py-[14px]">
          {getTaskDetailsData().map((data) => (
            <div
              className="space-y-2 border-b border-gray-white py-3"
              key={data.id}
            >
              <p className="font-mulish text-xs font-semibold text-[#FFFFFF99]">
                {data.title}
              </p>
              <div className="flex items-center gap-2">
                {data.name !== "N/A" ? (
                  <Image
                    src={data.imgSrc}
                    alt="icon"
                    width={20}
                    height={20}
                    className="aspect-square rounded-full object-contain"
                  />
                ) : null}

                <span
                  className="font-mulish text-xs"
                  style={{ color: data.isStatus ? "#FFE58E" : "#ffffff" }}
                >
                  {data.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
