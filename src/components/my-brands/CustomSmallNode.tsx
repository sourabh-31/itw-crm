import type { Node, NodeProps } from "@xyflow/react";
import { Handle, Position } from "@xyflow/react";
import Image from "next/image";

export type CustomMainNodeType = Node<{
  label: string;
}>;

export default function CustomSmallNode(props: NodeProps<CustomMainNodeType>) {
  return (
    <div className="relative mx-auto h-[40px] w-[173px] rounded-full bg-[#B1D0A5]">
      {/* Org details */}
      <div className="relative top-[6px] flex flex-col items-center justify-center font-recoletaAlt text-[14px] text-black">
        Marketing
      </div>

      {/* Org utility options */}

      <div
        className="absolute left-1/2 flex h-[18px] w-[84px] justify-evenly rounded-full border border-[#292d38] bg-[#B1D0A5]"
        style={{ transform: "translate(-50%, 50%)" }}
      >
        <div className="flex items-center gap-[2px]">
          <Image
            src="/assets/svg/my-brands/org-member.svg"
            alt="member-icon"
            width={12}
            height={12}
          />
          <p className="font-mulish text-[10px]">0</p>
        </div>

        <div className="flex items-center gap-[2px]">
          <Image
            src="/assets/svg/my-brands/org-npm.svg"
            alt="npm-icon"
            width={12}
            height={12}
          />
          <p className="font-mulish text-[10px]">0</p>
        </div>

        <div className="mr-[-5px] flex items-center">
          <Image
            src="/assets/svg/chevron-up.svg"
            alt="npm-icon"
            width={12}
            height={12}
          />
        </div>
      </div>

      {/* Add handles for edges */}

      <Handle
        type="target"
        position={Position.Top}
        style={{
          background: "transparent",
          border: "none",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      <Handle
        type="source"
        position={Position.Bottom}
        style={{
          background: "transparent",
          border: "none",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
    </div>
  );
}
