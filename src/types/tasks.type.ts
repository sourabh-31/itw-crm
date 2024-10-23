// All task types
export type TaskType = {
  id: number;
  serviceType: string;
  taskTitle: string;
  taskDescription: string;
  timePassed: string;
  timeLeft: string;
  memberName: string;
  messageCount: number;
  tagCount: number;
  isBreached: boolean;
  isCompleted: boolean;
};

export interface User {
  id: number;
  employeeCode: string;
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  deletedAt: string | null;
  profileImage: string;
  phoneNumberCountryCode: number;
  phoneNumber: string;
  fcmToken: string;
  gender: "MALE" | "FEMALE" | "OTHER";
  isFirstLogin: boolean;
  hasChatAccount: boolean;
  lastActiveOn: string;
  deactivated: boolean;
  deactivateReason: string | null;
  oauthRefreshToken: string | null;
  pocLasUpdatedOn: string;
}

export interface AssigneeResponse {
  message: string;
  data: {
    totalUsers: number;
    totalPage: number;
    users: User[];
  };
}

export interface TaskData {
  title: string;
  description?: string;
  dueOn: string;
  relatedUsers: number[];
  taskType: string;
  taskStatus?: string;
  relatedBrands?: number[];
  relatedEvents?: number[];
  relatedInventory?: number[];
}

// Task details types
export type TaskStatus = "PENDING" | "COMPLETED";
export type TaskTypeEnum = "GENERAL" | "BRAND" | "INVENTORY" | "EVENT";

export interface Brand {
  id: number;
  name: string;
  description: string;
  revenue: string;
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

export interface TaskBrandRelation {
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

export interface TaskUserAssignment {
  id: number;
  user: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    profileImage: string;
  };
}

export interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  taskType: TaskTypeEnum;
  dueOn: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  dueDateReminder: null | string;
  taskOverdueReminder: null | string;
  addedBy: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    profileImage: string;
  };
  taskAssignedTo: TaskUserAssignment[];
  taskRelatedBrands: TaskBrandRelation[];
  taskRelatedEvents: TaskEventRelation[];
  taskRelatedInventory: TaskInventoryRelation[];
  commentsCount: number;
  attachmentsCount: number;
}

export interface TaskResponse {
  message: string;
  task: Task;
}

// task nventory type
export interface InventoryItem {
  id: number;
  name: string;
  type: string;
  inventoryImage: string;
  deletedAt: string;
}

export interface InventoryData {
  totalInventory: number;
  totalPage: number;
  inventory: InventoryItem[];
}

export interface InventoryResponse {
  message: string;
  data: InventoryData;
}

// task event type
export interface EventItem {
  id: number;
  archived: boolean;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  closeBy: string;
  location: string;
  type: string;
  deletedAt: string;
  hasChatGroup: boolean;
}

// Define the type for events data
export interface EventData {
  totalEvents: number;
  totalPage: number;
  events: EventItem[];
}

// Define the type for the complete API response
export interface EventResponse {
  message: string;
  data: EventData;
}
