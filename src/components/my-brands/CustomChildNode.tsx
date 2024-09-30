import type { Node, NodeProps } from "@xyflow/react";
import { Handle, Position } from "@xyflow/react";
import { Add } from "iconsax-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoIosMove, IoMdMore } from "react-icons/io";

export type CustomChildNodeType = Node<{
  memberName: string;
  role: string;
  location: string;
  imgSrc: string;
  isStarred: boolean;
  color?: string;
}>;

export default function CustomChildNode(props: NodeProps<CustomChildNodeType>) {
  const glowColor = props.data.color || "#ffffff99";
  const [showIcons, setShowIcons] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [boxShadow, setBoxShadow] = useState("0px 0px 4px 2px #00000033");
  const transitionDuration = 250;

  // Function to show icons and update box shadow on hover
  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setShowIcons(true);
    setBoxShadow(`0px 0px 30px 5px ${glowColor}`);
  };

  // Function to hide icons with a delay and reset box shadow
  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setShowIcons(false);
      setBoxShadow("0px 0px 4px 2px #00000033");
    }, transitionDuration);
    setTimeoutId(id);
  };

  // Clear the timeout when the component unmounts
  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return (
    <div
      className="relative h-[110px] w-[220px] rounded-[10px] border-t-[3px]"
      style={{
        boxShadow,
        borderColor: "white",
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        transition: `box-shadow 0.25s ease-in-out`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Member icon image */}
      <div
        className="absolute left-1/2 flex items-center justify-center rounded-full border-[3px] border-[#292D38] bg-[#292D38]"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <Image
          src={props.data.imgSrc}
          alt="org-icon"
          width={56}
          height={56}
          className="rounded-full"
          quality={100}
        />
      </div>

      {props.data.isStarred && (
        <div
          className="absolute left-1/2 flex h-[14px] w-[22px] items-center justify-center rounded bg-[#007BFF]"
          style={{ transform: "translate(-50%, 130%)" }}
        >
          <Image
            src="/assets/svg/star.svg"
            alt="star-icon"
            width={10}
            height={10}
            quality={100}
          />
        </div>
      )}

      {/* Member note */}
      <div className="relative left-[10px] top-[10px] flex size-[18px] items-center justify-center rounded bg-[#1b1e25]">
        <Image
          src="/assets/svg/my-brands/member-notes.svg"
          alt="org-note"
          width={12}
          height={12}
        />
      </div>

      {/* Org details */}
      <div className="relative top-4 flex flex-col items-center justify-center">
        <p className="font-recoletaAlt text-[14px] text-white">
          {props.data.memberName}
        </p>
        <p className="mt-px font-mulish text-[12px] text-[#ffffff99]">
          {props.data.role}
        </p>
        <p className="font-mulish text-[12px] text-[#ffffff99]">
          {props.data.location}
        </p>
      </div>

      {/* Show icons when hovered or for the duration of the transition */}
      {showIcons && (
        <>
          {/* Move icon */}
          <button
            type="button"
            className="absolute -left-10 top-0 flex size-[30px] items-center justify-center rounded-full border border-[#50515B] bg-[#242632]"
          >
            <IoIosMove color="#ffffff" size={16} />
          </button>

          {/* More icon */}
          <button
            type="button"
            className="absolute -right-10 top-0 flex size-[30px] items-center justify-center rounded-full border border-[#50515B] bg-[#242632]"
          >
            <IoMdMore color="#ffffff" size={16} />
          </button>

          {/* Add icon */}
          <button
            type="button"
            className="absolute bottom-0 left-1/2 flex size-[30px] items-center justify-center rounded-full border border-[#50515B] bg-[#242632]"
            style={{ transform: "translate(-50%, 130%)" }}
          >
            <Add size="16" color="#ffffff" />
          </button>
        </>
      )}

      {/* Add handles for edges */}
      <Handle
        type="target"
        position={Position.Top}
        style={{
          background: "transparent",
          border: "none",
          top: "0px",
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
