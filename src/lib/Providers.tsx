"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { ReactNode } from "react";

import { Sidebar } from "@/components/shared/Sidebar";

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
      <Sidebar>{children}</Sidebar>
      {/* <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" /> */}
    </QueryClientProvider>
  );
}
