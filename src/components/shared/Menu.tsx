import Image from "next/image";
import type { ReactElement, ReactNode } from "react";
import React, { useEffect, useRef, useState } from "react";

interface MenuContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuContext = React.createContext<MenuContextType | undefined>(undefined);

interface MenuProps {
  children: ReactNode;
}

interface MenuTriggerProps {
  children: ReactElement;
}

interface MenuItemsProps {
  children: ReactNode;
  position?: string;
}

interface MenuItemProps {
  imgSrc: string;
  btnName: string;
  onClick?: () => void;
  isDanger?: boolean;
}

const Menu: React.FC<MenuProps> & {
  Trigger: React.FC<MenuTriggerProps>;
  Items: React.FC<MenuItemsProps>;
  Item: React.FC<MenuItemProps>;
} = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="relative z-50 inline-block text-left" ref={menuRef}>
        {children}
      </div>
    </MenuContext.Provider>
  );
};

const MenuTrigger: React.FC<MenuTriggerProps> = ({ children }) => {
  const context = React.useContext(MenuContext);
  if (!context) {
    throw new Error("MenuTrigger must be used within a Menu component");
  }
  const { setIsOpen } = context;

  return React.cloneElement(children, {
    onClick: () => setIsOpen((prev) => !prev),
  });
};

const MenuItems: React.FC<MenuItemsProps> = ({ children, position }) => {
  const context = React.useContext(MenuContext);
  if (!context) {
    throw new Error("MenuItems must be used within a Menu component");
  }
  const { isOpen } = context;

  if (!isOpen) return null;

  return (
    <div
      className={`absolute w-[230px] rounded-[10px] border border-[#4141414D] bg-[#FFFAEA] px-[6px] py-1 ${
        position === "left"
          ? "-top-10 right-full mr-[5px]"
          : position === "bottom"
            ? "left-1/2 top-full mt-2 -translate-x-1/2"
            : "top-full mt-2 translate-x-[-40%]"
      }`}
      style={{
        boxShadow: "2px 4px 20px 0px #00000033",
      }}
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="options-menu"
    >
      <div>{children}</div>
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({
  imgSrc,
  onClick,
  btnName,
  isDanger = false,
}) => {
  const context = React.useContext(MenuContext);
  if (!context) {
    throw new Error("MenuItem must be used within a Menu component");
  }
  const { setIsOpen } = context;

  const handleClick = () => {
    if (onClick) onClick();
    setIsOpen(false);
  };

  return (
    <button
      type="button"
      className="my-1 flex w-full items-center gap-[6px] rounded-md p-2 text-left hover:bg-[#F2D99C]"
      onClick={handleClick}
    >
      <Image src={imgSrc} alt="icon" width={20} height={20} />
      <p
        className={`font-mulish text-sm font-bold ${
          isDanger ? "mb-[-2px] text-[#FF6161]" : "text-[#000000B2]"
        }`}
      >
        {btnName}
      </p>
    </button>
  );
};

Menu.Trigger = MenuTrigger;
Menu.Items = MenuItems;
Menu.Item = MenuItem;

export { Menu };
