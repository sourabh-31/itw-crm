import { AssignedData } from "@/data/home.data";

import Card from "../shared/Card";
import Container from "../shared/Container";

export default function Assigned() {
  return (
    <Container
      name="Assigned for You"
      className="text-white"
      accentBoxContent="BO"
      accentBoxClassName="bg-[#b6eaff] text-[#000080]"
      linkClassName="font-light"
    >
      <div className="grid grid-cols-2 gap-5 2xl:grid-cols-3 2xl:gap-3">
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
                  <Card.Action name="assigned" />
                </div>
              ))}
            </div>
            <Card.Button>SHOW ALL EVENTS (5)</Card.Button>
          </Card>
        ))}
      </div>
    </Container>
  );
}
