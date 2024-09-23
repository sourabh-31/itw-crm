import { PeopleData } from "@/data/home.data";

import Container from "../shared/Container";
import Tiles from "../shared/Tiles";

export default function Peoples() {
  return (
    <Container name="People Connect (10)" className="pb-6 text-white">
      <div className="space-y-6">
        {PeopleData.map((data) => (
          <Tiles
            key={data.id}
            name={data.name}
            details={data.details}
            className="bg-primary-100"
            imgUrl={data.img}
            imgSize={32}
            bgColor={data.bgColor}
          />
        ))}
      </div>
    </Container>
  );
}
