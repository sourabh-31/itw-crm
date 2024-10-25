import { capitalize } from "lodash";
import Image from "next/image";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { toast } from "sonner";

import { useProfile } from "@/hooks/useData";
import {
  useAssigneeData,
  useBrandData,
  useCreateTask,
  useEventData,
  useInventoryData,
} from "@/hooks/useTasks";
import type { TaskData } from "@/types/tasks.type";

import { Menu } from "../shared/Menu";
import { useModal } from "../shared/Modal";

export default function AddTask() {
  // Manage add task options state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [taskType, setTaskType] = useState("Task Type");
  const [assignee, setAssignee] = useState("Assignee");
  const [assigneeId, setAssigneeId] = useState<number | null>(null);
  const [brandName, setBrandName] = useState("Brand Name");
  const [brandId, setBrandId] = useState<number | null>(null);
  const [inventoryName, setInventoryName] = useState("Inventory Name");
  const [inventoryId, setInventoryId] = useState<number | null>(null);
  const [eventName, setEventName] = useState("Event Name");
  const [eventId, setEventId] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString();
  });
  const [error, setError] = useState(false);

  const { close } = useModal();
  const { data = null } = useProfile();
  const { isPending, mutate: createTask } = useCreateTask();

  const userId = data?.id ?? 0;
  const brandFilter = [userId];
  const userFilter = [userId];

  // Call assignee and brand data
  const { data: assigneeData } = useAssigneeData(brandFilter, 0, 0);
  const { data: brandData } = useBrandData(userFilter, 0, 0);
  const { data: inventoryData } = useInventoryData(0, 0);
  const { data: eventData } = useEventData(0, 0);

  // functions to format date
  function formatDateForInput(isoString: string) {
    return isoString.split("T")[0];
  }

  function handleDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    const date = new Date(e.target.value);
    setSelectedDate(date.toISOString());
  }

  function getTodayDate() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return formatDateForInput(tomorrow.toISOString());
  }

  // Add task api call
  function addTask() {
    if (!title || taskType === "Task Type") {
      toast.error("Some fields are required");
      setError(true);
      return;
    }

    if (taskType === "BRAND" && brandId === null) {
      toast.error("Select a brand");
      setError(true);
      return;
    }

    if (taskType === "INVENTORY" && inventoryId === null) {
      toast.error("Select a inventory");
      setError(true);
      return;
    }

    if (taskType === "EVENT" && eventId === null) {
      toast.error("Select a event");
      setError(true);
      return;
    }

    const mutateData: TaskData = {
      title,
      dueOn: selectedDate,
      relatedUsers: assigneeId ? [assigneeId] : [userId],
      taskType,
      ...(description && { description }),
      ...(brandId && { relatedBrands: [brandId] }),
      ...(inventoryId && { relatedInventory: [inventoryId] }),
      ...(eventId && { relatedEvents: [eventId] }),
    };

    createTask(mutateData, {
      onSuccess: () => {
        close();
      },
    });
  }

  return (
    <div className="w-[340px] rounded-[20px] bg-[#1E2029] sm:w-[600px] md:w-[700px] lg:w-[840px]">
      {/* Header */}

      <div className="flex items-center justify-between border-b border-gray-light p-[18px]">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/assets/svg/tasks/checklist.svg"
              alt="checklist"
              width={20}
              height={20}
            />
            <h3 className="font-recoletaAlt text-xl text-white">
              Add New Task
            </h3>
          </div>
        </div>

        <button type="button" onClick={() => close()}>
          <IoIosClose color="white" size={24} />
        </button>
      </div>

      {/* Main part */}

      <div className="px-5 pt-[10px]">
        <span
          className="textInput mt-4 block max-h-[6vh] min-h-[30px] w-full cursor-pointer overflow-y-auto pb-1 font-recoletaAlt text-xl text-[#FFFFFF66] outline-none"
          role="textbox"
          contentEditable
          aria-label="task-title"
          onInput={(e) => setTitle(e.currentTarget.textContent || "")}
        />

        <span
          className="textarea mt-4 block max-h-[30vh] min-h-[80px] cursor-pointer overflow-y-auto border-b border-gray-dark pb-2 font-mulish text-[#FFFFFFCC] outline-none"
          role="textbox"
          contentEditable
          aria-label="task-purpose"
          onInput={(e) => setDescription(e.currentTarget.textContent || "")}
        />
      </div>

      {/* Footer */}

      <div className="flex flex-wrap items-center gap-4 px-4 pb-[18px] pt-4">
        {/* Task type options */}

        <Menu>
          <Menu.Trigger>
            <button
              type="button"
              className={`flex h-[36px] w-[135px] items-center justify-between rounded-lg bg-[#FFFFFF1A] px-3 sm:w-[166px] ${error && taskType === "Task Type" ? "border border-red-500" : null}`}
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/svg/tasks/checklist.svg"
                  alt="checklist"
                  width={16}
                  height={16}
                />
                <span className="font-mulish text-sm font-medium text-[#FFFFFFCC]">
                  {taskType === "Task Type" ? taskType : capitalize(taskType)}
                </span>
              </div>
              <BiChevronDown color="white" size={18} />
            </button>
          </Menu.Trigger>

          <Menu.Items
            position="bottom"
            width="226px"
            className="mt-6 border border-[#E6E6E6] bg-white"
          >
            <Menu.Item
              imgSrc="/assets/svg/tasks/general.svg"
              btnName="General"
              onClick={() => {
                setTaskType("GENERAL");
                setError(false);
              }}
            />

            <Menu.Item
              imgSrc="/assets/svg/tasks/brand.svg"
              btnName="Brand"
              onClick={() => {
                setTaskType("BRAND");
                setError(false);
              }}
            />
            <Menu.Item
              imgSrc="/assets/svg/tasks/event.svg"
              btnName="Event"
              onClick={() => {
                setTaskType("EVENT");
                setError(false);
              }}
            />
            <Menu.Item
              imgSrc="/assets/svg/tasks/inventory.svg"
              btnName="Inventory"
              onClick={() => {
                setTaskType("INVENTORY");
                setError(false);
              }}
            />
          </Menu.Items>
        </Menu>

        {/* Separator */}
        <div className="w-4 rotate-90 border border-[#FFFFFF33]" />

        {/* Other options */}

        {/* Date */}

        <input
          type="date"
          placeholder="Today"
          className="h-[36px] rounded-lg bg-[#FFFFFF1A] px-2 font-mulish text-sm uppercase text-[#FFFFFFCC]"
          value={formatDateForInput(selectedDate)}
          onChange={handleDateChange}
          min={getTodayDate()}
        />

        {/* Assignee */}

        <Menu>
          <Menu.Trigger>
            <button
              type="button"
              className="flex h-[36px] items-center gap-[6px] rounded-lg bg-[#FFFFFF1A] px-4"
            >
              <Image
                src="/assets/svg/tasks/user-plus.svg"
                alt="user-plus"
                width={18}
                height={18}
              />
              <span className="font-mulish text-sm font-medium text-[#FFFFFFCC]">
                {assignee}
              </span>
            </button>
          </Menu.Trigger>

          <Menu.Items
            position="bottom"
            width="226px"
            className="mt-6 border border-[#E6E6E6] bg-white"
          >
            {assigneeData?.data.users.map((data) => (
              <Menu.Item
                key={data.id}
                imgSrc="/assets/svg/tasks/user.svg"
                btnName={data.firstName}
                onClick={() => {
                  setAssignee(data.firstName);
                  setAssigneeId(data.id);
                }}
              />
            ))}
          </Menu.Items>
        </Menu>

        {/* Brand Name */}

        {taskType === "BRAND" ? (
          <Menu>
            <Menu.Trigger>
              <button
                type="button"
                className={`flex h-[36px] items-center gap-[6px] rounded-lg bg-[#FFFFFF1A] px-4 ${error && brandId === null ? "border border-red-500" : ""}`}
              >
                <Image
                  src="/assets/svg/tasks/brand-icon.svg"
                  alt="brand-icon"
                  width={18}
                  height={18}
                />
                <span className="font-mulish text-sm font-medium text-[#FFFFFFCC]">
                  {brandName === "Brand Name"
                    ? brandName
                    : capitalize(brandName)}
                </span>
              </button>
            </Menu.Trigger>

            <Menu.Items
              position="bottom"
              width="226px"
              className="mt-6 border border-[#E6E6E6] bg-white"
            >
              {brandData?.data.brands.map((data) => (
                <Menu.Item
                  key={data.id}
                  imgSrc="/assets/svg/tasks/brand.svg"
                  btnName={data.name}
                  onClick={() => {
                    setBrandName(data.name);
                    setBrandId(data.id);
                  }}
                />
              ))}
            </Menu.Items>
          </Menu>
        ) : null}

        {/* Inventory Name */}

        {taskType === "INVENTORY" ? (
          <Menu>
            <Menu.Trigger>
              <button
                type="button"
                className={`flex h-[36px] items-center gap-[6px] rounded-lg bg-[#FFFFFF1A] px-4 ${error && inventoryId === null ? "border border-red-500" : ""}`}
              >
                <Image
                  src="/assets/svg/tasks/brand-icon.svg"
                  alt="brand-icon"
                  width={18}
                  height={18}
                />
                <span className="font-mulish text-sm font-medium text-[#FFFFFFCC]">
                  {inventoryName === "Inventory Name"
                    ? inventoryName
                    : capitalize(inventoryName)}
                </span>
              </button>
            </Menu.Trigger>

            <Menu.Items
              position="bottom"
              width="226px"
              className="mt-6 border border-[#E6E6E6] bg-white"
            >
              {inventoryData?.data.inventory.slice(0, 4).map((data) => (
                <Menu.Item
                  key={data.id}
                  imgSrc="/assets/svg/tasks/inventory.svg"
                  btnName={data.name}
                  onClick={() => {
                    setInventoryName(data.name);
                    setInventoryId(data.id);
                  }}
                />
              ))}
            </Menu.Items>
          </Menu>
        ) : null}

        {/* Event Name */}

        {taskType === "EVENT" ? (
          <Menu>
            <Menu.Trigger>
              <button
                type="button"
                className={`flex h-[36px] items-center gap-[6px] rounded-lg bg-[#FFFFFF1A] px-4 ${error && eventId === null ? "border border-red-500" : ""}`}
              >
                <Image
                  src="/assets/svg/tasks/brand-icon.svg"
                  alt="brand-icon"
                  width={18}
                  height={18}
                />
                <span className="font-mulish text-sm font-medium text-[#FFFFFFCC]">
                  {eventName === "Event Name"
                    ? eventName
                    : capitalize(eventName)}
                </span>
              </button>
            </Menu.Trigger>

            <Menu.Items
              position="bottom"
              width="226px"
              className="mt-6 border border-[#E6E6E6] bg-white"
            >
              {eventData?.data.events.slice(0, 4).map((data) => (
                <Menu.Item
                  key={data.id}
                  imgSrc="/assets/svg/tasks/event.svg"
                  btnName={data.name}
                  onClick={() => {
                    setEventName(data.name);
                    setEventId(data.id);
                  }}
                />
              ))}
            </Menu.Items>
          </Menu>
        ) : null}

        <button
          onClick={addTask}
          type="button"
          className="h-[40px] w-full rounded-full bg-[#0094FF] px-6 font-mulish text-sm font-bold text-white"
        >
          {isPending ? "CREATING..." : "ADD TASK"}
        </button>
      </div>
    </div>
  );
}
