"use client";

import {
  COUNT,
  EVENT_STATUS,
  PAGE_NO,
  SEARCH_FOR,
} from "@/constants/defaultParams";
import { useInventory } from "@/hooks/useData";
import useWindowWidth from "@/hooks/useWindowWidth";
import { daysRemaining } from "@/lib/utils";

import Card from "../shared/Card";
import Container from "../shared/Container";

const colors = ["#d9ead5", "#d8dfe9", "#efe4ff", "#c4d4ff"];

export default function Inventory() {
  const windowWidth = useWindowWidth();
  const { data = null, isLoading } = useInventory(
    PAGE_NO,
    EVENT_STATUS,
    COUNT,
    SEARCH_FOR
  );

  const inventoryData = data?.data.inventories ?? [];

  return (
    <Container
      name="Your Inventory"
      className="max-w-full overflow-x-hidden rounded-none bg-transparent p-0 text-white sm:mx-6 sm:rounded-3xl sm:bg-primary-300 sm:p-4 lg:mx-0"
      headingClassName="px-4 sm:px-0"
      accentBoxContent="PO"
      accentBoxClassName="bg-[#CEFFCE] text-[#228B22]"
      linkClassName="font-normal"
      isSwiper
    >
      {!isLoading
        ? inventoryData.map((data, index) => {
            const bgColor = colors[index % colors.length];
            return (
              <Card key={data.name} bgColor={bgColor}>
                <Card.Header icon={data.image} />
                <Card.Name name={data.name} />
                <div className="flex flex-col gap-4">
                  {data.events.map((item) => (
                    <div key={item.id}>
                      <Card.Content
                        title={item.name}
                        keyword1={daysRemaining(item.endDate)}
                        keyword2={item.type}
                        windowWidth={windowWidth}
                      />
                      <Card.Action name="inventory" />
                    </div>
                  ))}
                </div>
                <Card.Button>SHOW ALL EVENTS ({data.eventCount})</Card.Button>
              </Card>
            );
          })
        : null}
    </Container>
  );
}
