export type NewsFeedDataType = {
  id: string;
  topic: string;
  description: string;
  lottieSrc: string;
  isActionBtn: boolean;
  isBorder: boolean;
  isBtnText: boolean;
};

export type InventoryDataType = {
  name: string;
  items: InventoryItemType[];
  bgColor: string;
};

export type InventoryItemType = {
  name: string;
  keyword1: string;
  keyword2: string;
};

export type ScheduleDataType = {
  id: string;
  name: string;
  duration: string;
  img: string;
  bgColor: string;
};

export type peopleDataType = {
  id: string;
  name: string;
  details: string;
  img: string;
  bgColor: string;
};
