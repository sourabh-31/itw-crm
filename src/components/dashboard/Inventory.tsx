"use client";

import { useEffect, useRef, useState } from "react";

import { InventoryData } from "@/data/home.data";

import Card from "../shared/Card";
import Container from "../shared/Container";

export default function Inventory() {
  const [numOfCardsToShow, setNumOfCardsToShow] = useState(
    InventoryData.length
  );
  const containerRef = useRef<HTMLDivElement>(null);

  // Num of Cards to show
  const calculateCardsToShow = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const cardWidth = 330;
      const gap = 30;

      const cardsToShow = Math.max(
        1,
        Math.floor((containerWidth + gap) / (cardWidth + gap))
      );

      return Math.min(cardsToShow, InventoryData.length);
    }
    return InventoryData.length;
  };

  // Show card calculation
  useEffect(() => {
    const updateCardsToShow = () => {
      const cardsToShow = calculateCardsToShow();
      setNumOfCardsToShow(cardsToShow);
    };

    // Initial calculation on mount
    updateCardsToShow();

    // Use ResizeObserver for dynamic resizing detection
    const resizeObserver = new ResizeObserver(updateCardsToShow);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <Container
      name="Your Inventory"
      className="text-white"
      accentBoxContent="PO"
      accentBoxClassName="bg-[#CEFFCE] text-[#228B22]"
      linkClassName="font-normal"
    >
      <div className="flex flex-wrap gap-5" ref={containerRef}>
        {InventoryData.slice(0, numOfCardsToShow).map((data) => (
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
      </div>
    </Container>
  );
}
