import { ScheduleData } from "@/data/home.data";

import Container from "../shared/Container";
import Tiles from "../shared/Tiles";

export default function Schedule() {
  return (
    <Container name="Today's Schedule" className="bg-yellow-200">
      <div className="space-y-6">
        {ScheduleData.map((data) => (
          <Tiles
            key={data.id}
            name={data.name}
            details={data.duration}
            imgUrl="/assets/png/google-logo.png"
            bgColor={data.bgColor}
          />
        ))}
      </div>
    </Container>
  );
}
