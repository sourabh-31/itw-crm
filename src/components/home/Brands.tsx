"use client";

import { useBrandsAndTeam } from "@/hooks/useData";

import Container from "../shared/Container";
import Tiles from "../shared/Tiles";

const colors = ["#ffa300", "#6800ff", "#d1d5dc", "#ee7360"];

export default function Brands() {
  const { data = null, isLoading, isError } = useBrandsAndTeam();
  const brandsData = data?.userBrands?.brands ?? [];

  return (
    <Container
      name={`Your Brands (${brandsData.length})`}
      className="mx-4 pb-6 text-white lg:mx-0"
      linkTo="/my-brands/google-pvt-ltd"
    >
      {!isLoading && !isError ? (
        <div className="space-y-6">
          {brandsData?.slice(0, 4).map((data, index) => {
            const bgColor = colors[index % colors.length];

            return (
              <Tiles
                key={data.brandId}
                name={data.brandName}
                details={data.eventCount}
                className="-mr-4 rounded-l-full rounded-r-none bg-primary-100 pl-12 pr-4"
                headingClassName="text-lg"
                imgUrl={data.brandImageUrl}
                bgColor={bgColor}
                accentText="Events"
                imgSize={64}
                linkHref="/my-brands/google-pvt-ltd"
              />
            );
          })}
        </div>
      ) : (
        <div className="text-center font-mulish text-lg font-bold">
          Brands data not found
        </div>
      )}
    </Container>
  );
}
