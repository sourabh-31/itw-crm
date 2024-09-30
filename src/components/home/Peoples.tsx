"use client";

import { useBrandsAndTeam } from "@/hooks/useData";
import { roleCombiner } from "@/lib/utils";

import Container from "../shared/Container";
import Tiles from "../shared/Tiles";

const colors = ["#ffe58e", "#c4d4ff", "#ffe58e", "#c4d4ff"];

export default function Peoples() {
  const { data = null, isLoading, isError } = useBrandsAndTeam();
  const teamData = data?.userTeam?.teamMembers ?? [];

  return (
    <Container
      name={`People Connect (${teamData.length})`}
      className="mx-4 pb-6 text-white lg:mx-0"
    >
      <div className="space-y-6">
        {!isLoading && !isError ? (
          teamData?.slice(0, 4).map((data, index) => {
            const bgColor = colors[index % colors.length];
            return (
              <Tiles
                key={data.userId}
                name={data.userFirstName}
                details={roleCombiner(data.roles)}
                className="bg-primary-100"
                imgUrl={data.profileImageUrl}
                imgSize={64}
                bgColor={bgColor}
              />
            );
          })
        ) : (
          <div className="text-center font-mulish font-bold">
            Team data not found
          </div>
        )}
      </div>
    </Container>
  );
}
