import type { TaskType } from "@/types/tasks.type";

export const OpenTaskData: TaskType[] = [
  {
    id: 1,
    serviceType: "General Service",
    taskTitle: "New Inventories Added",
    taskDescription:
      "Call Rancho & inform about the upcoming new inventories to them and update its s...",
    timePassed: "10h 10m",
    timeLeft: "10h 10m",
    memberName: "Anbarasan Anbu",
    messageCount: 12,
    tagCount: 0,
    isBreached: false,
    isCompleted: false,
  },
  {
    id: 2,
    serviceType: "General Service",
    taskTitle: "New Inventories Requested",
    taskDescription:
      "Call Rancho & inform about the upcoming new inventories to them and update its s...",
    timePassed: "10h 10m",
    timeLeft: "10h 10m",
    memberName: "Anbarasan Anbu",
    messageCount: 12,
    tagCount: 0,
    isBreached: true,
    isCompleted: false,
  },
];

export const CompletedTaskData: TaskType[] = [
  {
    id: 1,
    serviceType: "General Service",
    taskTitle: "New Inventories Added",
    taskDescription:
      "Call Rancho & inform about the upcoming new inventories to them and update its s...",
    timePassed: "10h 10m",
    timeLeft: "10h 10m",
    memberName: "Anbarasan Anbu",
    messageCount: 12,
    tagCount: 0,
    isBreached: false,
    isCompleted: true,
  },
  {
    id: 2,
    serviceType: "General Service",
    taskTitle: "New Inventories Requested",
    taskDescription:
      "Call Rancho & inform about the upcoming new inventories to them and update its s...",
    timePassed: "10h 10m",
    timeLeft: "10h 10m",
    memberName: "Anbarasan Anbu",
    messageCount: 12,
    tagCount: 0,
    isBreached: true,
    isCompleted: true,
  },
];

export const TaskDetailData = [
  {
    id: 1,
    title: "Task status",
    imgSrc: "/assets/svg/tasks/task-details/book.svg",
    name: "Open",
    isStatus: true,
  },
  {
    id: 2,
    title: "Assigned to",
    imgSrc: "/assets/png/member.png",
    name: "You",
    isStatus: false,
  },
  {
    id: 3,
    title: "Related brand",
    imgSrc: "/assets/png/google-alt.png",
    name: "Open",
    isStatus: false,
  },
  {
    id: 4,
    title: "Time left",
    imgSrc: "/assets/svg/tasks/task-details/clock.svg",
    name: "10h 10m (10 April 2024)",
    isStatus: false,
  },
  {
    id: 5,
    title: "Time passed",
    imgSrc: "/assets/svg/tasks/task-details/clock.svg",
    name: "10h 10m",
    isStatus: false,
  },
  {
    id: 6,
    title: "Late by",
    imgSrc: "/assets/svg/tasks/task-details/clock-red.svg",
    name: "10h 10m",
    isStatus: false,
  },
  {
    id: 7,
    title: "Created by",
    imgSrc: "/assets/png/member.png",
    name: "Arul Mozhi",
    isStatus: false,
  },
  {
    id: 8,
    title: "Created on",
    imgSrc: "/assets/svg/tasks/task-details/calendar.svg",
    name: "10 April 2024, 10:10 am",
    isStatus: false,
  },
];
