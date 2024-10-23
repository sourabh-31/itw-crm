import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import {
  ALLTASKS,
  ASSIGNEE,
  BRAND,
  TASKDETAILS,
  TASKEVENT,
  TASKINVENTORY,
  TASKSTATS,
} from "@/constants/queryKeys";
import {
  createTask,
  deleteTask,
  editTask,
  getAssigneeData,
  getBrandData,
  getEventData,
  getInventoryData,
  getTaskDetails,
  getTasks,
  getTasksStats,
} from "@/server/task.actions";
import type { TasksApiResponse } from "@/types/allTasks.type";
import type { BrandResponse } from "@/types/brand.type";
import type { TaskStatsResponse } from "@/types/stats.type";
import type {
  AssigneeResponse,
  EventResponse,
  InventoryResponse,
  TaskData,
  TaskResponse,
} from "@/types/tasks.type";

export function useAssigneeData(
  brandFilter: number[],
  page: number,
  size: number
) {
  return useQuery<AssigneeResponse>({
    queryKey: [ASSIGNEE, brandFilter, page, size],
    queryFn: () => getAssigneeData(brandFilter, page, size),
  });
}

export function useBrandData(userFilter: number[], page: number, size: number) {
  return useQuery<BrandResponse>({
    queryKey: [BRAND, userFilter, page, size],
    queryFn: () => getBrandData(userFilter, page, size),
  });
}

export function useInventoryData(page: number, size: number) {
  return useQuery<InventoryResponse>({
    queryKey: [TASKINVENTORY, page, size],
    queryFn: () => getInventoryData(page, size),
  });
}

export function useEventData(page: number, size: number) {
  return useQuery<EventResponse>({
    queryKey: [TASKEVENT, page, size],
    queryFn: () => getEventData(page, size),
  });
}

export function useTasksData(
  taskCategory: string,
  page: number,
  size: number,
  taskStatus: string[],
  filteredByTime: string,
  taskType?: string[],
  dueOn?: string,
  sortBy?: string,
  order?: string
) {
  return useQuery<TasksApiResponse>({
    queryKey: [
      ALLTASKS,
      taskCategory,
      page,
      size,
      taskStatus,
      filteredByTime,
      taskType,
      dueOn,
      sortBy,
      order,
    ],
    queryFn: () =>
      getTasks(
        taskCategory,
        page,
        size,
        taskStatus,
        filteredByTime,
        taskType,
        dueOn,
        sortBy,
        order
      ),
  });
}

export function useTaskStats(
  taskStatus: string,
  filteredByTime: string,
  nDaysFilter: number
) {
  return useQuery<TaskStatsResponse>({
    queryKey: [TASKSTATS, taskStatus, filteredByTime, nDaysFilter],
    queryFn: () => getTasksStats(taskStatus, filteredByTime, nDaysFilter),
  });
}

export function useCreateTask() {
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: (taskData: TaskData) => createTask(taskData),
    onSuccess: () => {
      toast.success("Task create successfully");
      queryClient.invalidateQueries({ queryKey: [ALLTASKS] });
      queryClient.invalidateQueries({ queryKey: [TASKSTATS] });
    },
    onError: () => {
      toast.error("Failed to create task");
    },
  });

  return { isPending, mutate };
}

export function useEditTask(taskId: number) {
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: (taskData: TaskData) => editTask(taskData, taskId),
    onSuccess: () => {
      toast.success("Task updated successfully");
      queryClient.invalidateQueries({ queryKey: [ALLTASKS] });
      queryClient.invalidateQueries({ queryKey: [TASKDETAILS, taskId] });
    },
    onError: () => {
      toast.error("Failed to update task");
    },
  });

  return { isPending, mutate };
}

export function useDeleteTask() {
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: (taskId: number) => deleteTask(taskId),
    onSuccess: () => {
      toast.success("Task deleted successfully");
      queryClient.invalidateQueries({ queryKey: [ALLTASKS] });
      queryClient.invalidateQueries({ queryKey: [TASKSTATS] });
    },
    onError: () => {
      toast.error("Failed to delete task");
    },
  });

  return { isPending, mutate };
}

export function useTaskDetails(taskId: number) {
  return useQuery<TaskResponse>({
    queryKey: [TASKDETAILS, taskId],
    queryFn: () => getTaskDetails(taskId),
  });
}
