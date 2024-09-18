import type {
  InventoryDataType,
  NewsFeedDataType,
  peopleDataType,
  ScheduleDataType,
} from "@/types/home.type";

export const NewsFeedData: NewsFeedDataType[] = [
  {
    id: "1",
    topic: "Team Discussion",
    description: "Hey team, here is the new events list for September...",
    lottieSrc: "/assets/lottie/check-badge.json",
    isActionBtn: true,
    isBorder: true,
    isBtnText: false,
  },
  {
    id: "2",
    topic: "Top Performers",
    description:
      "Congratulations to Maya, our outstanding top performer this month! Your dedication is truly remarkable.",
    lottieSrc: "/assets/lottie/medal-gold.json",
    isActionBtn: false,
    isBorder: false,
    isBtnText: true,
  },
  {
    id: "3",
    topic: "Top Performers",
    description:
      "Congratulations to Maya, our outstanding top performer this month! Your dedication is truly remarkable.",
    lottieSrc: "/assets/lottie/medal-gold.json",
    isActionBtn: false,
    isBorder: false,
    isBtnText: true,
  },
];

export const InventoryData: InventoryDataType[] = [
  {
    name: "On-Ground",
    items: [
      {
        name: "India vs Australia ODI",
        keyword1: "in 2 days",
        keyword2: "10 brands",
      },
      {
        name: "India vs Australia T20",
        keyword1: "in 10 days",
        keyword2: "10 brands",
      },
    ],
    bgColor: "#d9ead5",
  },
];

export const ScheduleData: ScheduleDataType[] = [
  {
    id: "1",
    name: "Team Discussion",
    duration: "12:00AM - 12:30AM",
    img: "/assets/png/google-logo.png",
    bgColor: "#ffffff",
  },
  {
    id: "2",
    name: "Team Discussion",
    duration: "12:00AM - 12:30AM",
    img: "/assets/png/google-logo.png",
    bgColor: "#c4d4ff",
  },
  {
    id: "3",
    name: "Team Discussion",
    duration: "12:00AM - 12:30AM",
    img: "/assets/png/google-logo.png",
    bgColor: "#efe4ff",
  },
  {
    id: "4",
    name: "Team Discussion",
    duration: "12:00AM - 12:30AM",
    img: "/assets/png/google-logo.png",
    bgColor: "#ffe7f5",
  },
];

export const AssignedData: InventoryDataType[] = [
  {
    name: "OTT",
    items: [
      {
        name: "World cup T20 2024",
        keyword1: "in 2 days",
        keyword2: "10 brands",
      },
      {
        name: "India vs Australia T20",
        keyword1: "in 10 days",
        keyword2: "10 brands",
      },
    ],
    bgColor: "#d8dfe9",
  },
  {
    name: "On-Ground",
    items: [
      {
        name: "IPL 2024",
        keyword1: "in 2 days",
        keyword2: "10 brands",
      },
      {
        name: "India vs Australia ODI",
        keyword1: "in 10 days",
        keyword2: "10 brands",
      },
    ],
    bgColor: "#d9ead5",
  },
];

export const PeopleData: peopleDataType[] = [
  {
    id: "1",
    name: "You (TO)",
    details: "86 Brands",
    img: "/assets/png/people.png",
    bgColor: "#ffe58e",
  },
  {
    id: "2",
    name: "Iniyaal",
    details: "86 Brands",
    img: "/assets/png/people.png",
    bgColor: "#c4d4ff",
  },
  {
    id: "3",
    name: "Anbarasan",
    details: "86 Brands",
    img: "/assets/png/people.png",
    bgColor: "#ffe58e",
  },
  {
    id: "4",
    name: "Iniyaal",
    details: "86 Brands",
    img: "/assets/png/people.png",
    bgColor: "#c4d4ff",
  },
];

export const BrandData: peopleDataType[] = [
  {
    id: "1",
    name: "LeagueX Gaming",
    details: "5 Events",
    img: "/assets/svg/brands/spotify.svg",
    bgColor: "#ffa300",
  },
  {
    id: "2",
    name: "LeagueX Gaming",
    details: "5 Events",
    img: "/assets/svg/brands/bmw.svg",
    bgColor: "#6800ff",
  },
  {
    id: "3",
    name: "LeagueX Gaming",
    details: "5 Events",
    img: "/assets/svg/brands/google.svg",
    bgColor: "#d1d5dc",
  },
  {
    id: "4",
    name: "LeagueX Gaming",
    details: "5 Events",
    img: "/assets/svg/brands/bmw.svg",
    bgColor: "#ee7360",
  },
];
