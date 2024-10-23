"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { ReactNode } from "react";
import { Toaster } from "sonner";

import Modal from "@/components/shared/Modal";
import { Sidebar } from "@/components/shared/Sidebar";
import { SidebarFilter } from "@/components/tasks/FilterBrands";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // refetchOnMount: false,
      // refetchOnReconnect: false,
      staleTime: 30 * 60 * 1000,
    },
  },
});

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Sidebar>
        <SidebarFilter>
          <Modal>{children}</Modal>
        </SidebarFilter>
      </Sidebar>
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
      <Toaster
        position="top-left"
        className="font-mulish"
        richColors
        duration={2500}
      />
    </QueryClientProvider>
  );
}
