import { InventoryData } from "@/data/home.data";

import Card from "../shared/Card";
import Container from "../shared/Container";

export default function Inventory() {
  return (
    <Container
      name="Your Inventory"
      className="max-w-full overflow-x-hidden text-white bg-transparent sm:bg-primary-300 p-0 sm:p-4 sm:rounded-3xl rounded-none"
      accentBoxContent="PO"
      accentBoxClassName="bg-[#CEFFCE] text-[#228B22]"
      linkClassName="font-normal"
      isSwiper
    >
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
          <Card.Button>SHOW ALL EVENTS ({InventoryData.length})</Card.Button>
        </Card>
      ))}
    </Container>
  );
}
