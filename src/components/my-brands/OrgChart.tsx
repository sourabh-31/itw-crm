"use client";

import "@xyflow/react/dist/style.css";

import type { Edge, EdgeChange, Node, NodeChange } from "@xyflow/react";
import {
  applyEdgeChanges,
  applyNodeChanges,
  Controls,
  ReactFlow,
} from "@xyflow/react";
import dagre from "dagre";
import { useEffect, useState } from "react";

import CustomChildNode from "./CustomChildNode";
import CustomMainNode from "./CustomMainNode";
import CustomSmallNode from "./CustomSmallNode";
import CustomSmoothEdge from "./CustomSmoothEdge";

interface NodeDimension {
  width?: number;
  height?: number;
}

const initialNodes: Node[] = [
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

const initialEdges: Edge[] = [
  { id: "1-2", source: "1", target: "2" },
  { id: "1-3", source: "1", target: "3" },
  { id: "1-4", source: "1", target: "4" },
  { id: "3-5", source: "3", target: "5" },
];

// Function to calculate the layout using Dagre.js
const getLayoutedElements = (
  nodes: Node[],
  edges: Edge[]
): { layoutedNodes: Node[] } => {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  dagreGraph.setGraph({ rankdir: "TB" });

  // Configure node dimensions
  nodes.forEach((node) => {
    const { width = 300, height = 150 }: NodeDimension =
      node.data?.dimensions || {};
    dagreGraph.setNode(node.id, { width, height });
  });

  // Add edges to Dagre graph
  edges.forEach(({ source, target }) => {
    dagreGraph.setEdge(source, target);
  });

  dagre.layout(dagreGraph);

  // Return nodes with updated positions
  return {
    layoutedNodes: nodes.map((node) => {
      const position = dagreGraph.node(node.id);
      return {
        ...node,
        position: { x: position.x, y: position.y },
        style: {
          ...node.style,
          width: position.width,
          height: position.height,
        },
      };
    }),
  };
};

export default function OrgChart() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const [isSpacePressed, setIsSpacePressed] = useState(false);

  // Apply layout on nodes and edges whenever the nodes/edges length changes
  useEffect(() => {
    const { layoutedNodes } = getLayoutedElements(nodes, edges);
    setNodes(layoutedNodes);
  }, [nodes.length, edges.length]);

  // Handle spacebar press for panning
  useEffect(() => {
    const handleKey = ({ code }: KeyboardEvent) => {
      if (code === "Space") setIsSpacePressed((prev) => !prev);
    };

    window.addEventListener("keydown", handleKey);
    window.addEventListener("keyup", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("keyup", handleKey);
    };
  }, []);

  return (
    <section className="min-h-[calc(100vh-160px)] w-full sm:rounded-b-2xl">
      <div className="h-[calc(100vh-160px)] sm:rounded-b-2xl">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={(changes: NodeChange[]) =>
            setNodes((nds) => applyNodeChanges(changes, nds))
          }
          onEdgesChange={(changes: EdgeChange[]) =>
            setEdges((eds) => applyEdgeChanges(changes, eds))
          }
          fitView
          zoomOnScroll={false}
          nodesConnectable={false}
          nodeTypes={{
            customMainNode: CustomMainNode,
            customChildNode: CustomChildNode,
            customSmallNode: CustomSmallNode,
          }}
          edgeTypes={{ smoothStep: CustomSmoothEdge }}
          defaultEdgeOptions={{ type: "smoothStep" }}
          nodesDraggable={false}
          panOnDrag={isSpacePressed}
          panOnScroll
          zoomOnDoubleClick={false}
          maxZoom={1.5}
          minZoom={0.35}
        >
          <Controls
            style={{ top: 0, right: 10, left: "auto", bottom: "auto" }}
            showInteractive={false}
          />
        </ReactFlow>
      </div>
    </section>
  );
}
