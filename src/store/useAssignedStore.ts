import { create } from "zustand";

import {
  COUNT,
  EVENT_STATUS,
  PAGE_NO,
  SEARCH_FOR,
} from "@/constants/defaultParams";

interface AssignedStore {
  pageNo: number;
  eventStatus: string;
  count: number;
  searchFor: string;
  setPageNo: (newPageNo: number) => void;
  setCount: (newCount: number) => void;
}

export const useAssignedStore = create<AssignedStore>((set) => ({
  pageNo: PAGE_NO,
  eventStatus: EVENT_STATUS,
  count: COUNT,
  searchFor: SEARCH_FOR,
  setPageNo: (newPageNo: number) => {
    set(() => ({ pageNo: newPageNo }));
  },
  setCount: (newCount: number) => {
    set(() => ({ count: newCount }));
  },
}));
