import { create } from "zustand";

interface TaskStore {
  activeTab: string;
  userId: number | null;
  userName: string;
  taskId: number | null;
  taskCategory: string;
  timeFilter: string;
  taskType: string;
  dueOn: string;
  sortBy: string;
  order: string;
  handleTabChange: (tabName: string) => void;
  handleTaskCategory: (type: string) => void;
  handleTimeFilter: (time: string) => void;
  handleTaskId: (taskId: number) => void;
  resetTaskId: () => void;
  handleTaskType: (type: string) => void;
  handleDueOn: (due: string) => void;
  handleSortBy: (sortBy: string) => void;
  handleOrder: (order: string) => void;
  handleUserId: (userId: number) => void;
  handleUserName: (name: string) => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
  activeTab: "open",
  taskId: null,
  userId: 0,
  userName: "",
  taskCategory: "all-tasks",
  timeFilter: "TODAY",
  taskType: "All",
  dueOn: "ALL",
  sortBy: "createdAt",
  order: "ASC",
  handleTabChange: (tabName: string) => {
    set(() => ({ activeTab: tabName }));
  },
  handleTaskCategory: (type: string) => {
    set(() => ({ taskCategory: type }));
  },
  handleTimeFilter: (time: string) => {
    set(() => ({ timeFilter: time }));
  },
  handleTaskId: (taskId: number) => {
    set(() => ({ taskId }));
  },
  resetTaskId: () => {
    set(() => ({ taskId: null }));
  },
  handleTaskType: (type: string) => {
    set(() => ({ taskType: type }));
  },
  handleDueOn: (due: string) => {
    set(() => ({ dueOn: due }));
  },
  handleSortBy: (sortBy: string) => {
    set(() => ({ sortBy }));
  },
  handleOrder: (order: string) => {
    set(() => ({ order }));
  },
  handleUserId: (userId: number) => {
    set(() => ({ userId }));
  },
  handleUserName: (name: string) => {
    set(() => ({ userName: name }));
  },
}));
