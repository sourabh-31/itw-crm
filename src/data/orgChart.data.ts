import type { Edge, Node } from "@xyflow/react";

export const chartData = {
  id: "1",
  orgName: "Google Search Private Limited",
  location: "Bengaluru",
  notes: 10,
  imgSrc: null,
  type: "organisation",
  children: [
    {
      id: "2",
      memberName: "Thara Selvan",
      role: "Market Ops - Manager L1",
      location: "Bengaluru",
      imgSrc: "/assets/png/member1.png",
      type: "person",
      children: [],
    },
    {
      id: "3",
      memberName: "Anbarsan Krishnan",
      role: "Chief Marketing Officer",
      location: "Bengaluru",
      imgSrc: "/assets/png/member2.png",
      type: "person",
      children: [
        {
          id: "5",
          departmentName: "Marketing",
          color: "#b1d0a5",
          type: "department",
          children: [],
        },
      ],
    },
    {
      id: "4",
      memberName: "Aravind Anbu",
      role: "Business Development - Manager L1",
      location: "Bengaluru",
      imgSrc: "/assets/png/member3.png",
      type: "person",
      children: [],
    },
  ],
};

export const initialNodes: Node[] = [
  {
    id: "1",
    data: { label: "Main" },
    position: { x: 0, y: 0 },
    type: "customMainNode",
  },
  {
    id: "2",
    data: {
      memberName: "Thara Selvan",
      role: "Market Ops - Manager L1",
      location: "Bengaluru",
      imgSrc: "/assets/png/member1.png",
      dimensions: { width: 300, height: 150 },
    },
    position: { x: 0, y: 0 },
    type: "customChildNode",
  },
  {
    id: "3",
    data: {
      memberName: "Anbarsan Krishnan",
      role: "Chief Marketing Officer",
      location: "Bengaluru",
      imgSrc: "/assets/png/member2.png",
      dimensions: { width: 300, height: 150 },
    },
    position: { x: 0, y: 0 },
    type: "customChildNode",
  },
  {
    id: "4",
    data: {
      memberName: "Aravind Anbu",
      role: "Business Development - Manager L1",
      location: "Bengaluru",
      imgSrc: "/assets/png/member3.png",
      dimensions: { width: 300, height: 150 },
    },
    position: { x: 0, y: 0 },
    type: "customChildNode",
  },
  {
    id: "5",
    data: {
      memberName: "Aravind Anbu",
      role: "Business Development - Manager L1",
      location: "Bengaluru",
      imgSrc: "/assets/png/member3.png",
      dimensions: { width: 300, height: 70 },
    },
    position: { x: 0, y: 0 },
    type: "customSmallNode",
  },
];

export const initialEdges: Edge[] = [
  { id: "1-2", source: "1", target: "2" },
  { id: "1-3", source: "1", target: "3" },
  { id: "1-4", source: "1", target: "4" },
  { id: "3-5", source: "3", target: "5" },
];
