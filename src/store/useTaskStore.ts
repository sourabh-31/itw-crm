import { create } from "zustand";

interface FilterType {
  id: number;
  img: string;
}

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
  search: string;
  filteredByBrands: number[];
  filteredByInventory: number[];
  filteredByAddedBy: FilterType[];
  filteredByAssignedTo: FilterType[];
  filteredByTeamOwner: FilterType[];
  filteredByCurrentEvents: number[];
  filteredByArchivedEvents: number[];
  handleTabChange: (tabName: string) => void;
  handleTaskCategory: (type: string) => void;
  handleTimeFilter: (time: string) => void;
  handleTaskId: (taskId: number) => void;
  resetTaskId: () => void;
  handleTaskType: (type: string) => void;
  handleDueOn: (due: string) => void;
  handleSortBy: (sortBy: string) => void;
  handleOrder: (order: string) => void;
  handleSearch: (search: string) => void;
  handleUserId: (userId: number) => void;
  handleUserName: (name: string) => void;
  handleFilteredByBrands: (id: number) => void;
  removeFilteredByBrands: (id: number) => void;
  handleFilteredByInventory: (id: number) => void;
  removeFilteredByInventory: (id: number) => void;
  handleFilteredByAddedBy: (id: number, img: string) => void;
  removeFilteredByAddedBy: (id: number) => void;
  handleFilteredByAssignedTo: (id: number, img: string) => void;
  removeFilteredByAssignedTo: (id: number) => void;
  handleFilteredByTeamOwner: (id: number, img: string) => void;
  removeFilteredByTeamOwner: (id: number) => void;
  handleFilteredByCurrentEvents: (id: number) => void;
  removeFilteredByCurrentEvents: (id: number) => void;
  handleFilteredByArchivedEvents: (id: number) => void;
  removeFilteredByArchivedEvents: (id: number) => void;
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
  search: "",
  filteredByBrands: [],
  filteredByInventory: [],
  filteredByAddedBy: [],
  filteredByAssignedTo: [],
  filteredByTeamOwner: [],
  filteredByCurrentEvents: [],
  filteredByArchivedEvents: [],
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
  handleSearch: (search: string) => {
    set(() => ({ search }));
  },
  handleUserId: (userId: number) => {
    set(() => ({ userId }));
  },
  handleUserName: (name: string) => {
    set(() => ({ userName: name }));
  },
  handleFilteredByBrands: (id: number) => {
    set((taskStore) => ({
      filteredByBrands: [...taskStore.filteredByBrands, id],
    }));
  },
  removeFilteredByBrands: (id: number) => {
    set((taskStore) => ({
      filteredByBrands: taskStore.filteredByBrands.filter((val) => val !== id),
    }));
  },
  handleFilteredByInventory: (id: number) => {
    set((taskStore) => ({
      filteredByInventory: [...taskStore.filteredByInventory, id],
    }));
  },
  removeFilteredByInventory: (id: number) => {
    set((taskStore) => ({
      filteredByInventory: taskStore.filteredByInventory.filter(
        (val) => val !== id
      ),
    }));
  },
  handleFilteredByAddedBy: (id: number, img: string) => {
    set((taskStore) => ({
      filteredByAddedBy: [...taskStore.filteredByAddedBy, { id, img }],
    }));
  },
  removeFilteredByAddedBy: (id: number) => {
    set((taskStore) => ({
      filteredByAddedBy: taskStore.filteredByAddedBy.filter(
        (val) => val.id !== id
      ),
    }));
  },
  handleFilteredByAssignedTo: (id: number, img: string) => {
    set((taskStore) => ({
      filteredByAssignedTo: [...taskStore.filteredByAssignedTo, { id, img }],
    }));
  },
  removeFilteredByAssignedTo: (id: number) => {
    set((taskStore) => ({
      filteredByAssignedTo: taskStore.filteredByAssignedTo.filter(
        (val) => val.id !== id
      ),
    }));
  },
  handleFilteredByTeamOwner: (id: number, img: string) => {
    set((taskStore) => ({
      filteredByTeamOwner: [...taskStore.filteredByTeamOwner, { id, img }],
    }));
  },
  removeFilteredByTeamOwner: (id: number) => {
    set((taskStore) => ({
      filteredByTeamOwner: taskStore.filteredByTeamOwner.filter(
        (val) => val.id !== id
      ),
    }));
  },
  handleFilteredByCurrentEvents: (id: number) => {
    set((taskStore) => ({
      filteredByCurrentEvents: [...taskStore.filteredByCurrentEvents, id],
    }));
  },
  removeFilteredByCurrentEvents: (id: number) => {
    set((taskStore) => ({
      filteredByCurrentEvents: taskStore.filteredByCurrentEvents.filter(
        (val) => val !== id
      ),
    }));
  },
  handleFilteredByArchivedEvents: (id: number) => {
    set((taskStore) => ({
      filteredByArchivedEvents: [...taskStore.filteredByArchivedEvents, id],
    }));
  },
  removeFilteredByArchivedEvents: (id: number) => {
    set((taskStore) => ({
      filteredByArchivedEvents: taskStore.filteredByArchivedEvents.filter(
        (val) => val !== id
      ),
    }));
  },
}));
