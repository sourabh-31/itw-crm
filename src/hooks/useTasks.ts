import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
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
import type { Attachment } from "@/types/uploadRequest.type";

// Get assignee data
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

// Get brand data
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

// Get inventory data
export function useInventoryData(page: number, size: number, search?: string) {
  return useQuery<InventoryResponse>({
    queryKey: [TASKINVENTORY, page, size, search],
    queryFn: () => getInventoryData(page, size, search),
  });
}

// Get event data
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

// Get tasks data
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
  search?: string,
  filteredByBrands?: number[],
  filteredByInventory?: number[],
  filteredByAddedBy?: number[],
  filteredByAssignedTo?: number[],
  filteredByTeamOwner?: number[],
  filteredByCurrentEvents?: number[],
  filteredByArchivedEvents?: number[]
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
      search,
      filteredByBrands,
      filteredByInventory,
      filteredByAddedBy,
      filteredByAssignedTo,
      filteredByTeamOwner,
      filteredByCurrentEvents,
      filteredByArchivedEvents,
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
        search,
        filteredByBrands,
        filteredByInventory,
        filteredByAddedBy,
        filteredByAssignedTo,
        filteredByTeamOwner,
        filteredByCurrentEvents,
        filteredByArchivedEvents
      ),
  });
}

// Get task stats data
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

// Create task
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

// Edit task
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

// Delete task
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

// Get task details
export function useTaskDetails(taskId: number) {
  return useQuery<TaskResponse>({
    queryKey: [TASKDETAILS, taskId],
    queryFn: () => getTaskDetails(taskId),
  });
}

// Get comment data (lazy loading)
export const useCommentsQuery = (taskId: number, size: number = 5) => {
  return useInfiniteQuery<CommentResponse>({
    queryKey: [TASKCOMMENT, taskId, size],
    queryFn: ({ pageParam = 1 }) =>
      getTaskComments(taskId || 0, pageParam as number, size),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.comments.length === size) {
        return allPages.length + 1;
      }
      return undefined;
    },
  });
};

// Delete comment
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

// Add comment
export function useAddComment(taskId: number) {
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: ({
      comment,
      attachments,
    }: {
      comment: string;
      attachments: Attachment[];
    }) => addComment(taskId, comment, attachments),
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

// Get team owners
export function useTeamOwners(page: number, searchFor?: string) {
  return useQuery<TeamOwnersResponse>({
    queryKey: [TEAMOWNERS, page, searchFor],
    queryFn: () => getTeamOwners(page, searchFor),
  });
}
