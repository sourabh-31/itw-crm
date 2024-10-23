export interface TasksApiResponse {
  message: string;
  data: {
    totalTasks: number;
    totalPage: number;
    tasks: Task[];
  };
}

export interface Task {
  id: number;
  commentsCount: number;
  attachmentsCount: number;
  title: string;
  description: string;
  status: "PENDING" | "COMPLETED";
  taskType: "BRAND" | "INVENTORY" | "GENERAL" | "EVENT";
  dueOn: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  dueDateReminder: null | string;
  taskOverdueReminder: null | string;
  addedBy: User;
  taskAssignedTo: TaskAssignment[];
  taskRelatedBrands: TaskBrand[];
  taskRelatedEvents: TaskEventRelation[];
  taskRelatedInventory: TaskInventoryRelation[];
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  profileImage?: string; // Optional since it's not present in taskAssignedTo
}

export interface TaskAssignment {
  id: number;
  user: User;
}

export interface Brand {
  id: number;
  name: string;
  description: string;
  brandImage: string;
}

export interface Event {
  id: number;
  name: string;
  description: string;
  revenue: string;
  brandImage: string;
}

export interface Inventory {
  id: number;
  name: string;
  description: string;
  revenue: string;
  brandImage: string;
}

export interface TaskBrand {
  id: number;
  brand: Brand;
}

export interface TaskEventRelation {
  id: number;
  event: Event;
}

export interface TaskInventoryRelation {
  id: number;
  inventory: Inventory;
}
