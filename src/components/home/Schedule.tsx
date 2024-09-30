import { ScheduleData } from "@/data/home.data";

import Container from "../shared/Container";
import Tiles from "../shared/Tiles";

export default function Schedule() {
  return (
    <Container
      name="Today's Schedule"
      className="mx-4 bg-yellow-200 pb-6 lg:mx-0"
    >
      <div className="space-y-6">
        {ScheduleData.map((data) => (
          <Tiles
            key={data.id}
            name={data.name}
            details={data.duration}
            imgUrl="/assets/png/google-logo.png"
            bgColor={data.bgColor}
            detailsClassName="xl:text-sm 2xl:text-base"
          />
        ))}
      </div>
    </Container>
  );
}
