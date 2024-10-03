import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Image from "next/image";

import { PROFILE } from "@/constants/queryKeys";
import { getProfileData } from "@/server/actions";

import Profile from "./Profile";

export default async function Header() {
  // Prefetching data
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [PROFILE],
    queryFn: getProfileData,
  });

  return (
    <header className="noiseBgPrimary fixed inset-x-0 z-30 col-start-1 col-end-3 flex items-center justify-between border-b border-gray-dark bg-background px-4 py-2 sm:px-7 sm:py-[18px]">
      {/* ITW Logo */}

      <Image
        src="/assets/svg/itw-logo.svg"
        alt="itw-logo"
        width={65}
        height={35}
        className="size-[50px] sm:h-[35px] sm:w-[65px]"
      />

      {/* Search, Notification and Profile */}

      <div className="flex items-center gap-4">
        {/* Search */}

        <button
          className="rounded-full bg-primary-200 p-2 sm:p-3"
          type="button"
        >
          <Image
            src="/assets/svg/search.svg"
            alt="search-icon"
            width={20}
            height={20}
            className="size-[15px] sm:size-[20px]"
          />
        </button>

        {/* Notification */}

        <button
          className="rounded-full bg-primary-200 p-2 sm:p-3"
          type="button"
        >
          <Image
            src="/assets/svg/bell.svg"
            alt="bell-icon"
            width={20}
            height={20}
            className="size-[15px] sm:size-[20px]"
          />
        </button>

        {/* Profile */}

        <HydrationBoundary state={dehydrate(queryClient)}>
          <Profile />
        </HydrationBoundary>
      </div>
    </header>
  );
}
