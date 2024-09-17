import { BrandData } from "@/data/home.data";

import Container from "../shared/Container";
import Tiles from "../shared/Tiles";

export default function Brands() {
  return (
    <Container name="Your Brands (100)" className="text-white">
      <div className="space-y-6">
        {BrandData.map((data) => (
          <Tiles
            key={data.id}
            name={data.name}
            details={data.details}
            className="-mr-4 rounded-l-full rounded-r-none bg-primary-100 pl-12 pr-4"
            headingClassName="text-lg"
            imgUrl={data.img}
            bgColor={data.bgColor}
          />
        ))}
      </div>
    </Container>
  );
}
