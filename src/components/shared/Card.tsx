import Image from "next/image";
import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";
import type {
  ActionBtnProps,
  ActionLinkProps,
  CardActionProps,
  CardContentProps,
  CardHeaderProps,
  CardNameProps,
  CardProps,
} from "@/types/card.type";

// Main Card
const Card = ({ children, className, bgColor }: CardProps) => {
  return (
    <div
      className={cn("rounded-3xl p-3", className)}
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </div>
  );
};

// Card Header
const CardHeader = ({ icon = "", linkHref = "" }: CardHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="rounded-full bg-primary-300 p-2">
        <Image
          src={icon || "/assets/png/stadium.png"}
          alt="icon"
          width={34}
          height={34}
        />
      </div>
      <Link
        href={linkHref}
        className="flex w-fit rounded-full border-red-500 bg-white p-3"
      >
        <Image
          src="/assets/svg/arrow-up-right.svg"
          alt="arrow"
          width={24}
          height={24}
        />
      </Link>
    </div>
  );
};

// Card Name
const CardName = ({ name }: CardNameProps) => {
  return (
    <div className="mb-4 mt-2 font-recoletaAlt text-lg text-primary-300">
      {name}
    </div>
  );
};

// Card Content
const CardContent = ({ title, keyword1, keyword2 }: CardContentProps) => {
  return (
    <div className="flex items-center rounded-full bg-[#f7fbf7]">
      <div className="flex w-full flex-col gap-[2px] px-6 py-2 font-mulish">
        <span className="text-sm font-bold text-primary-300">{title}</span>
        <div className="flex items-center gap-2 text-xs font-medium">
          <div className="flex items-center gap-[2px] rounded-full bg-[#FF6161] px-2 py-[2px]">
            <Image
              src="/assets/svg/clock.svg"
              alt="clock"
              width={12}
              height={12}
            />
            <span>{keyword1}</span>
          </div>
          <span className="rounded-full bg-[#D5FF8E] px-2 py-[2px] text-primary-300">
            {keyword2}
          </span>
        </div>
      </div>
      <Link
        className="rounded-full bg-white p-5 shadow-sm"
        type="button"
        href="/"
      >
        <Image
          src="/assets/svg/chevron-right.svg"
          alt="chevron-right"
          width={24}
          height={24}
        />
      </Link>
    </div>
  );
};

// Card Action
const CardAction = ({ name }: CardActionProps) => {
  const actionName = name === "assigned" ? "PO (8)" : "Stats";
  const actionImg =
    name === "assigned"
      ? "/assets/svg/people-alt.svg"
      : "/assets/svg/stats.svg";

  return (
    <div className="float-end mr-6 flex w-fit items-center gap-2 rounded-b-full bg-white bg-opacity-[0.5] px-6 py-2 shadow-sm">
      <ActionLink icon="/assets/svg/deck.svg" text="Deck" href="/" />
      <div className="h-3 border border-gray-400" />
      <ActionLink icon={actionImg} text={actionName} href="/" />
    </div>
  );
};

// Action Link
const ActionLink = ({ icon, text, href }: ActionLinkProps) => {
  return (
    <div className="flex items-center gap-1">
      <Image src={icon} alt={`${text}-icon`} width={16} height={16} />
      <Link
        className="font-mulish text-xs font-semibold text-primary-300 underline"
        href={href}
      >
        {text}
      </Link>
    </div>
  );
};

const Button = ({ children, hrefTo = "/" }: ActionBtnProps) => {
  return (
    <Link
      href={hrefTo}
      className="mt-5 flex items-center justify-center rounded-full bg-blue p-3 font-mulish"
    >
      {children}
    </Link>
  );
};

Card.Header = CardHeader;
Card.Name = CardName;
Card.Content = CardContent;
Card.Action = CardAction;
Card.Button = Button;

export default Card;
