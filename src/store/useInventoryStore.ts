import { create } from "zustand";

import {
  COUNT,
  EVENT_STATUS,
  PAGE_NO,
  SEARCH_FOR,
} from "@/constants/defaultParams";

interface InventoryStore {
  pageNo: number;
  eventStatus: string;
  count: number;
  searchFor: string;
  setPageNo: (newPageNo: number) => void;
}

export const useInventoryStore = create<InventoryStore>((set) => ({
  pageNo: PAGE_NO,
  eventStatus: EVENT_STATUS,
  count: COUNT,
  searchFor: SEARCH_FOR,
  setPageNo: (newPageNo: number) => {
    set(() => ({ pageNo: newPageNo }));
  },
}));
