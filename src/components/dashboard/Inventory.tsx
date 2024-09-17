import { InventoryData } from "@/data/home.data";

import Card from "../shared/Card";
import Container from "../shared/Container";

export default function Inventory() {
  return (
    <Container
      name="Your Inventory"
      className="text-white"
      accentBoxContent="PO"
      accentBoxClassName="bg-[#CEFFCE] text-[#228B22]"
      linkClassName="font-light"
    >
      <div className="grid grid-cols-2 gap-5 2xl:grid-cols-3 2xl:gap-3">
        {InventoryData.map((data) => (
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
            <Card.Button>SHOW ALL EVENTS (5)</Card.Button>
          </Card>
        ))}
      </div>
    </Container>
  );
}
