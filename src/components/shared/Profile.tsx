"use client";

import Image from "next/image";

import { useProfile } from "@/hooks/useData";
import { roleCombiner } from "@/lib/utils";

export default function Profile() {
  const { data = null, isLoading } = useProfile();

  const userName = `${data?.firstName} ${data?.lastName}`;
  const roles = data?.roles;

  if (isLoading) {
    return null;
  }

  return (
    <div className="flex items-center gap-2">
      <div className="rounded-full border-2 border-white">
        <Image
          src={data?.profileImage ?? "/assets/png/avatar.png"}
          alt="user-profile"
          width={45}
          height={45}
          className="size-[35px] rounded-full sm:size-[45px]"
        />
      </div>

      <div className="flex flex-col">
        <span className="font-recoletaAlt text-sm text-white sm:text-lg">
          {userName}
        </span>
        <span className="font-mulish text-xs font-semibold text-[#909090] sm:text-base">
          {roleCombiner(roles ?? [])}
        </span>
      </div>
    </div>
  );
}
