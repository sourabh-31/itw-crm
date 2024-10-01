"use client";

import "@xyflow/react/dist/style.css";

import {
  applyEdgeChanges,
  applyNodeChanges,
  Controls,
  ReactFlow,
} from "@xyflow/react";
import { useCallback, useEffect, useRef, useState } from "react";

import CustomChildNode from "./CustomChildNode";
import CustomMainNode from "./CustomMainNode";
import CustomSmoothEdge from "./CustomSmoothEdge";

// Recursive function to calculate positions and build tree
const calculatePositions = (
  tree: Record<string, string[]>,
  nodeId: string,
  x: number,
  y: number,
  vSpace: number,
  hSpace: number
): { positions: Record<string, { x: number; y: number }>; width: number } => {
  const children = tree[nodeId] || [];
  if (!children.length)
    return { positions: { [nodeId]: { x, y } }, width: hSpace };

  let totalWidth = 0;
  let positions: Record<string, { x: number; y: number }> = {};

  children.forEach((childId) => {
    const { positions: childPos, width: childWidth } = calculatePositions(
      tree,
      childId,
      x + totalWidth,
      y + vSpace,
      vSpace,
      hSpace
    );
    positions = { ...positions, ...childPos };
    totalWidth += childWidth;
  });

  positions[nodeId] = { x: x + totalWidth / 2 - hSpace / 2 - 7.5, y };
  return { positions, width: totalWidth };
};

const initialMainNode = {
  id: "1",
  data: { label: "Main" },
  position: { x: 0, y: 0 },
  type: "customMainNode",
};

const initialChildNodes = [
  {
    id: "2",
    data: {
      memberName: "Thara Selvan",
      role: "Market Ops - Manager L1",
      location: "Bengaluru",
      imgSrc: "/assets/png/member1.png",
      isStarred: false,
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
      isStarred: false,
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
      isStarred: true,
    },
    position: { x: 0, y: 0 },
    type: "customChildNode",
  },
];

const initialEdges = [
  { id: "1-2", source: "1", target: "2" },
  { id: "1-3", source: "1", target: "3" },
  { id: "1-4", source: "1", target: "4" },
];

export default function OrgChart() {
  const [nodes, setNodes] = useState([initialMainNode, ...initialChildNodes]);
  const [edges, setEdges] = useState(initialEdges);
  const [isSpacePressed, setIsSpacePressed] = useState(false);
  const lastPositions = useRef<Record<string, { x: number; y: number }> | null>(
    null
  );

  // Update node positions
  const updateNodePositions = useCallback(() => {
    const tree = edges.reduce(
      (acc, { source, target }) => {
        acc[source] = [...(acc[source] || []), target];
        return acc;
      },
      {} as Record<string, string[]>
    );
    const { positions } = calculatePositions(tree, "1", 0, 0, 200, 350);

    if (JSON.stringify(positions) !== JSON.stringify(lastPositions.current)) {
      lastPositions.current = positions;
      setNodes((nodes) =>
        nodes.map((node) => ({
          ...node,
          position: positions[node.id] || node.position,
        }))
      );
    }
  }, [edges]);

  useEffect(updateNodePositions, [updateNodePositions]);

  // Handle spacebar press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        setIsSpacePressed(true);
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        setIsSpacePressed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <section className="min-h-[calc(100vh-160px)] w-full sm:rounded-b-2xl">
      <div className="h-[calc(100vh-160px)] sm:rounded-b-2xl">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={(changes) =>
            setNodes((nds) => applyNodeChanges(changes, nds))
          }
          onEdgesChange={(changes) =>
            setEdges((eds) => applyEdgeChanges(changes, eds))
          }
          fitView
          zoomOnScroll={false}
          nodesConnectable={false}
          nodeTypes={{
            customMainNode: CustomMainNode,
            customChildNode: CustomChildNode,
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
