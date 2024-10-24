import type { Dispatch, ReactElement, ReactNode, SetStateAction } from "react";

export type SidebarDataType = {
  name: string;
  img: string;
  imgAlt: string;
  link: string;
  alt: string;
};

export type SidebarContextType = {
  openNames: string[];
  close: (name: string) => void;
  open: (name: string) => void;
};

export type SidebarFilterContextType = {
  openNames: string[];
  close: (name: string) => void;
  open: (name: string) => void;
  setOpenNames: Dispatch<SetStateAction<string[]>>;
};

export type SidebarProps = {
  children: ReactNode;
};

export type OpenProps = {
  children: ReactElement;
  opens: string;
};

export type WindowProps = {
  children: ReactElement;
  name: string;
  title: string;
  subText?: string;
  isBorderedIcon: boolean;
  icon1?: string;
  icon2?: string;
  className?: string;
};

export type FilterWindowProps = {
  children: ReactElement;
  name: string;
  title?: string;
  headerName: string;
  startIcon: string;
  isSubHeading?: boolean;
  subText?: string;
  className?: string;
};
