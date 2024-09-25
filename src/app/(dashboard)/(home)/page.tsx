import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import Assigned from "@/components/dashboard/Assigned";
import Brands from "@/components/dashboard/Brands";
import Inventory from "@/components/dashboard/Inventory";
import NewsFeed from "@/components/dashboard/NewsFeed";
import Peoples from "@/components/dashboard/Peoples";
import Schedule from "@/components/dashboard/Schedule";
import Tasks from "@/components/dashboard/Tasks";
import {
  COUNT,
  EVENT_STATUS,
  PAGE_NO,
  SEARCH_FOR,
} from "@/constants/defaultParams";
import { ASSIGNED, BRANDSANDTEAM, INVENTORY } from "@/constants/queryKeys";
import {
  getAssignedData,
  getBrandsAndTeamData,
  getInventoryData,
} from "@/server/actions";

export default async function Home() {
  // Prefetching brands and team data for SSR
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: [BRANDSANDTEAM],
      queryFn: getBrandsAndTeamData,
    }),
    queryClient.prefetchQuery({
      queryKey: [INVENTORY, PAGE_NO, EVENT_STATUS, COUNT, SEARCH_FOR],
      queryFn: () => getInventoryData(PAGE_NO, EVENT_STATUS, COUNT, SEARCH_FOR),
    }),
    queryClient.prefetchQuery({
      queryKey: [ASSIGNED, PAGE_NO, EVENT_STATUS, COUNT, SEARCH_FOR],
      queryFn: () => getAssignedData(PAGE_NO, EVENT_STATUS, COUNT, SEARCH_FOR),
    }),
  ]);

  return (
    <section className="space-y-6 pb-5 sm:pt-5">
      {/* News Feed */}

      <HydrationBoundary state={dehydrate(queryClient)}>
        <NewsFeed />
      </HydrationBoundary>

      {/* Inventory + Schedule */}

      <div className="grid gap-5 lg:grid-cols-[60%_1fr] lg:px-6 xl:grid-cols-[70%_1fr]">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Inventory />
        </HydrationBoundary>

        <Schedule />
      </div>

      {/* Assigned + Task */}

      <div className="grid gap-5 lg:grid-cols-[60%_1fr] lg:px-6 xl:grid-cols-[70%_1fr]">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Assigned />
        </HydrationBoundary>

        <Tasks />
      </div>

      {/* Brands + Peoples */}

      <div className="grid gap-5 lg:grid-cols-[60%_1fr] lg:px-6 xl:grid-cols-[70%_1fr]">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Brands />
          <Peoples />
        </HydrationBoundary>
      </div>
    </section>
  );
}
