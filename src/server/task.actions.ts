import axios from "axios";

import type { TaskData } from "@/types/tasks.type";

export async function getAssigneeData(
  brandFilter: number[],
  page: number,
  size: number,
  search?: string | null
) {
  try {
    const response = await axios.post(
      `https://beta-api.itwcrm.com/tasks/users`,
      {
        brandFilter,
        page,
        size,
        ...(search && { search }),
      },
      {
        headers: {
          "X-authorization-token": process.env.NEXT_PUBLIC_AUTHORIZATION_TOKEN,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch assignee data");
  }
}

export async function getBrandData(
  userFilter: number[],
  page: number,
  size: number,
  search?: string
) {
  try {
    const response = await axios.post(
      `https://beta-api.itwcrm.com/tasks/brands`,
      {
        userFilter,
        page,
        size,
        ...(search && { search }),
      },
      {
        headers: {
          "X-authorization-token": process.env.NEXT_PUBLIC_AUTHORIZATION_TOKEN,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch brand data");
  }
}

export async function getInventoryData(
  page: number,
  size: number,
  search?: string
) {
  try {
    const response = await axios.post(
      `https://beta-api.itwcrm.com/tasks/inventories`,
      {
        page,
        size,
        ...(search && { search }),
      },
      {
        headers: {
          "X-authorization-token": process.env.NEXT_PUBLIC_AUTHORIZATION_TOKEN,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch brand data");
  }
}

export async function getEventData(
  page: number,
  size: number,
  archived?: boolean,
  search?: string
) {
  try {
    const response = await axios.post(
      `https://beta-api.itwcrm.com/tasks/events`,
      {
        page,
        size,
        archived,
        ...(search && { search }),
      },
      {
        headers: {
          "X-authorization-token": process.env.NEXT_PUBLIC_AUTHORIZATION_TOKEN,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch brand data");
  }
}

export async function getTasks(
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
  try {
    const response = await axios.post(
      `https://beta-api.itwcrm.com/tasks/${taskCategory}`,
      {
        page,
        size,
        taskStatus,
        filteredByTime,
        taskType,
        dueOn,
        sortBy,
        order,
        ...(filteredByBrands?.length && {
          filteredByBrands: {
            ids: filteredByBrands,
            selectionType: "EXCLUDE",
          },
        }),
        ...(filteredByInventory?.length && {
          filteredByInventory: {
            ids: filteredByInventory,
            selectionType: "EXCLUDE",
          },
        }),
        ...(filteredByAddedBy?.length && {
          filteredByAddedBy: {
            ids: filteredByAddedBy,
            selectionType: "EXCLUDE",
          },
        }),
      },
      {
        headers: {
          "X-authorization-token": process.env.NEXT_PUBLIC_AUTHORIZATION_TOKEN,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch tasks data");
  }
}

export async function getTasksStats(
  taskStatus: string,
  filteredByTime: string,
  nDaysFilter: number
) {
  try {
    const response = await axios.post(
      `https://beta-api.itwcrm.com/tasks/stats`,
      {
        taskStatus,
        filteredByTime,
        nDaysFilter,
      },
      {
        headers: {
          "X-authorization-token": process.env.NEXT_PUBLIC_AUTHORIZATION_TOKEN,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch tasks data");
  }
}

export async function createTask(taskData: TaskData): Promise<any> {
  const response = await axios.post(
    `https://beta-api.itwcrm.com/tasks`,
    taskData,
    {
      headers: {
        "X-authorization-token": process.env.NEXT_PUBLIC_AUTHORIZATION_TOKEN,
      },
    }
  );
  return response.data;
}

export async function editTask(
  taskData: TaskData,
  taskId: number
): Promise<any> {
  const response = await axios.patch(
    `https://beta-api.itwcrm.com/tasks?taskId=${taskId}`,
    taskData,
    {
      headers: {
        "X-authorization-token": process.env.NEXT_PUBLIC_AUTHORIZATION_TOKEN,
      },
    }
  );
  return response.data;
}

export async function deleteTask(taskId: number): Promise<any> {
  const response = await axios.delete(
    `https://beta-api.itwcrm.com/tasks?taskId=${taskId}`,
    {
      headers: {
        "X-authorization-token": process.env.NEXT_PUBLIC_AUTHORIZATION_TOKEN,
      },
    }
  );
  return response.data;
}

export async function getTaskDetails(taskId: number) {
  try {
    const response = await axios.get(
      `https://beta-api.itwcrm.com/tasks/details?taskId=${taskId}`,
      {
        headers: {
          "X-authorization-token": process.env.NEXT_PUBLIC_AUTHORIZATION_TOKEN,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch task details");
  }
}

export async function getTaskComments(
  taskId: number,
  page: number,
  size: number
) {
  try {
    const response = await axios.post(
      `https://beta-api.itwcrm.com/tasks/comments?taskId=${taskId}&page=${page}&size=${size}&isTimeline=false`,
      {},
      {
        headers: {
          "X-authorization-token": process.env.NEXT_PUBLIC_AUTHORIZATION_TOKEN,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch comments");
  }
}

export async function deleteComment(commentId: number): Promise<any> {
  const response = await axios.delete(
    `https://beta-api.itwcrm.com/tasks/comments?commentId=${commentId}`,
    {
      headers: {
        "X-authorization-token": process.env.NEXT_PUBLIC_AUTHORIZATION_TOKEN,
      },
    }
  );
  return response.data;
}

export async function addComment(
  taskId: number,
  comment: string
): Promise<any> {
  const response = await axios.post(
    `https://beta-api.itwcrm.com/tasks/new-comment`,
    {
      taskId,
      comment,
    },
    {
      headers: {
        "X-authorization-token": process.env.NEXT_PUBLIC_AUTHORIZATION_TOKEN,
      },
    }
  );
  return response.data;
}

export async function getTeamOwners(page: number, searchFor?: string) {
  const url = searchFor
    ? `https://beta-api.itwcrm.com/user/team-owners?pageNo=${page}&searchFor=${searchFor}`
    : `https://beta-api.itwcrm.com/user/team-owners?pageNo=${page}`;

  try {
    const response = await axios.get(url, {
      headers: {
        "X-authorization-token": process.env.NEXT_PUBLIC_AUTHORIZATION_TOKEN,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch team owners");
  }
}
