import type { ReactNode } from "react";

export type CardProps = {
  children: React.ReactNode;
  className?: string;
  bgColor: string;
};

export type CardHeaderProps = {
  icon?: string;
  linkHref?: string;
};

export type CardNameProps = {
  name: string;
};

export type CardContentProps = {
  title: string;
  keyword1: string;
  keyword2: string;
  windowWidth: number;
};

export type CardActionProps = {
  name: "inventory" | "assigned";
};

export type ActionLinkProps = {
  icon: string;
  text: string;
  href: string;
};

export type ActionBtnProps = {
  children: ReactNode;
  onClick?: () => void;
};
