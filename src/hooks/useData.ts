import { useQuery } from "@tanstack/react-query";

import {
  ASSIGNED,
  BRANDSANDTEAM,
  INVENTORY,
  PROFILE,
} from "@/constants/queryKeys";
import {
  getAssignedData,
  getBrandsAndTeamData,
  getInventoryData,
  getProfileData,
} from "@/server/dashboard.actions";
import type { BrandsAndTeam } from "@/types/brandsAndTeam.type";
import type { InventoryOrAssignedResponse } from "@/types/inventory.type";
import type { UserProfile } from "@/types/user.type";

// Get profile data
export function useProfile() {
  return useQuery<UserProfile>({
    queryKey: [PROFILE],
    queryFn: getProfileData,
  });
}

// Get brand and team data
export function useBrandsAndTeam() {
  return useQuery<BrandsAndTeam>({
    queryKey: [BRANDSANDTEAM],
    queryFn: getBrandsAndTeamData,
  });
}

// Get inventory data
export function useInventory(
  pageNo: number,
  eventStatus: string,
  count: number,
  searchFor: string
) {
  return useQuery<InventoryOrAssignedResponse>({
    queryKey: [INVENTORY, pageNo, eventStatus, count, searchFor],
    queryFn: () => getInventoryData(pageNo, eventStatus, count, searchFor),
  });
}

// Get assigned data
export function useAssigned(
  pageNo: number,
  eventStatus: string,
  count: number,
  searchFor: string
) {
  return useQuery<InventoryOrAssignedResponse>({
    queryKey: [ASSIGNED, pageNo, eventStatus, count, searchFor],
    queryFn: () => getAssignedData(pageNo, eventStatus, count, searchFor),
  });
}
