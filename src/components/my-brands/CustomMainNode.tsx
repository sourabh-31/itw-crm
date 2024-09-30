import type { Node, NodeProps } from "@xyflow/react";
import { Handle, Position } from "@xyflow/react";
import Image from "next/image";

export type CustomMainNodeType = Node<{
  label: string;
}>;

export default function CustomChildNode(props: NodeProps<CustomMainNodeType>) {
  return (
    <div
      className="relative h-[95px] w-[235px] rounded-[10px]"
      style={{
        boxShadow: "0px 0px 4px 2px #00000033",
        backgroundColor: "rgba(255, 255, 255, 0.08)",
      }}
    >
      {/* Org icon image */}

      <div
        className="absolute left-1/2 flex size-[55px] items-center justify-center rounded-2xl border-[3px] border-[#292D38] bg-white"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <Image
          src="/assets/svg/my-brands/org-icon.svg"
          alt="org-icon"
          width={30}
          height={50}
        />
      </div>

      {/* Org note count */}

      <div className="relative left-[10px] top-[10px] flex h-[18px] w-[34px] items-center justify-center gap-[2px] rounded bg-[#1b1e25]">
        <Image
          src="/assets/svg/my-brands/org-notes.svg"
          alt="org-note"
          width={12}
          height={12}
          className="ml-[-2px]"
        />
        <div className="font-mulish text-[10px] font-semibold text-white">
          10
        </div>
      </div>

      {/* Org details */}
      <div className="relative top-4 flex flex-col items-center justify-center">
        <p className="font-recoletaAlt text-[14px] text-white">
          Google Search Private Limited
        </p>
        <p className="mt-px font-mulish text-[12px] text-[#ffffff99]">
          Bengaluru
        </p>
      </div>

      {/* Org utility options */}

      <div
        className="absolute left-1/2 flex h-[18px] w-[84px] justify-evenly rounded-full border border-[#292d38] bg-white"
        style={{ transform: "translate(-50%, 150%)" }}
      >
        <div className="flex items-center gap-[2px]">
          <Image
            src="/assets/svg/my-brands/org-member.svg"
            alt="member-icon"
            width={12}
            height={12}
          />
          <p className="font-mulish text-[10px]">3</p>
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
