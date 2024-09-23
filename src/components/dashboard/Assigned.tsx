import { AssignedData } from "@/data/home.data";

import Card from "../shared/Card";
import Container from "../shared/Container";

export default function Assigned() {
  return (
    <Container
      name="Assigned for you"
      className="max-w-full overflow-x-hidden rounded-none bg-transparent p-0 text-white sm:rounded-3xl sm:bg-primary-300 sm:p-4"
      accentBoxContent="BO"
      accentBoxClassName="bg-[#B6EAFF] text-[#000080]"
      linkClassName="font-normal"
      isSwiper
    >
      {AssignedData.map((data) => (
        <Card key={data.name} bgColor={data.bgColor}>
          <Card.Header />
          <Card.Name name={data.name} />
          <div className="flex flex-col gap-4">
            {data.items.map((item) => (
              <div key={item.name}>
                <Card.Content
                  title={item.name}
                  keyword1={item.keyword1}
                  keyword2={item.keyword2}
                />
                <Card.Action name="inventory" />
              </div>
            ))}
          </div>
          <Card.Button>SHOW ALL EVENTS ({AssignedData.length})</Card.Button>
        </Card>
      ))}
    </Container>
  );
}
