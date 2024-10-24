import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import {
  ALLTASKS,
  ASSIGNEE,
  BRAND,
  TASKCOMMENT,
  TASKDETAILS,
  TASKEVENT,
  TASKINVENTORY,
  TASKSTATS,
  TEAMOWNERS,
} from "@/constants/queryKeys";
import {
  addComment,
  createTask,
  deleteComment,
  deleteTask,
  editTask,
  getAssigneeData,
  getBrandData,
  getEventData,
  getInventoryData,
  getTaskComments,
  getTaskDetails,
  getTasks,
  getTasksStats,
  getTeamOwners,
} from "@/server/task.actions";
import type { TasksApiResponse } from "@/types/allTasks.type";
import type { BrandResponse } from "@/types/brand.type";
import type { CommentResponse } from "@/types/comments.type";
import type { TaskStatsResponse } from "@/types/stats.type";
import type {
  AssigneeResponse,
  EventResponse,
  InventoryResponse,
  TaskData,
  TaskResponse,
} from "@/types/tasks.type";
import type { TeamOwnersResponse } from "@/types/teamOwners.type";

export function useAssigneeData(
  brandFilter: number[],
  page: number,
  size: number,
  search?: string
) {
  return useQuery<AssigneeResponse>({
    queryKey: [ASSIGNEE, brandFilter, page, size, search],
    queryFn: () => getAssigneeData(brandFilter, page, size, search),
  });
}

export function useBrandData(
  userFilter: number[],
  page: number,
  size: number,
  search?: string
) {
  return useQuery<BrandResponse>({
    queryKey: [BRAND, userFilter, page, size, search],
    queryFn: () => getBrandData(userFilter, page, size, search),
  });
}

export function useInventoryData(page: number, size: number, search?: string) {
  return useQuery<InventoryResponse>({
    queryKey: [TASKINVENTORY, page, size, search],
    queryFn: () => getInventoryData(page, size, search),
  });
}

export function useEventData(
  page: number,
  size: number,
  archived?: boolean,
  search?: string
) {
  return useQuery<EventResponse>({
    queryKey: [TASKEVENT, page, size, archived, search],
    queryFn: () => getEventData(page, size, archived, search),
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
  order?: string,
  filteredByBrands?: number[],
  filteredByInventory?: number[],
  filteredByAddedBy?: number[]
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
      filteredByBrands,
      filteredByInventory,
      filteredByAddedBy,
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
        order,
        filteredByBrands,
        filteredByInventory,
        filteredByAddedBy
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

export function useTaskComments(taskId: number, page: number, size: number) {
  return useQuery<CommentResponse>({
    queryKey: [TASKCOMMENT, taskId, page, size],
    queryFn: () => getTaskComments(taskId, page, size),
  });
}

export function useDeleteComment() {
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: (commentId: number) => deleteComment(commentId),
    onSuccess: () => {
      toast.success("Comment deleted successfully");
      queryClient.invalidateQueries({ queryKey: [TASKCOMMENT] });
    },
    onError: () => {
      toast.error("Failed to delete comment");
    },
  });

  return { isPending, mutate };
}

export function useAddComment(taskId: number) {
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: (comment: string) => addComment(taskId, comment),
    onSuccess: () => {
      toast.success("Comment added successfully");
      queryClient.invalidateQueries({ queryKey: [TASKCOMMENT] });
    },
    onError: () => {
      toast.error("Failed to add comment");
    },
  });

  return { isPending, mutate };
}

export function useTeamOwners(page: number, searchFor?: string) {
  return useQuery<TeamOwnersResponse>({
    queryKey: [TEAMOWNERS, page, searchFor],
    queryFn: () => getTeamOwners(page, searchFor),
  });
}
