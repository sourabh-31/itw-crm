import type { ReactElement, ReactNode } from "react";
import { cloneElement, createContext, useContext, useState } from "react";
import { BiCross } from "react-icons/bi";

import { useOutsideClick } from "@/hooks/useOutsideClick";

type ModalContextType = {
  openName: string;
  close: () => void;
  open: (name: string) => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProps {
  children: ReactNode;
}

function Modal({ children }: ModalProps) {
  const [openName, setOpenName] = useState<string>("");

  const close = () => setOpenName("");
  const open = (name: string) => setOpenName(name);

  return (
    <ModalContext.Provider
      value={{
        openName,
        close,
        open,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

interface OpenProps {
  children: ReactElement;
  opens: string;
}

function Open({ children, opens: opensWindowName }: OpenProps) {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("Open must be used within a Modal provider");
  }

  const { open } = context;

  const handleClick = (event: React.MouseEvent) => {
    if (children.props.onClick) {
      children.props.onClick(event);
    }
    open(opensWindowName);
  };

  return cloneElement(children, {
    onClick: handleClick,
  });
}

interface WindowProps {
  children: ReactElement;
  name: string;
}

function Window({ children, name }: WindowProps) {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("Window must be used within a Modal provider");
  }

  const { openName, close } = context;

  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return (
    <div className="fixed inset-0 z-[1000] h-screen w-full bg-white bg-opacity-10 backdrop-blur-sm">
      <div
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-8 shadow-[0_2.4rem_3.2rem_rgba(0,0,0,0.12)]"
        ref={ref}
      >
        <button
          className="absolute right-4 top-3 rounded-sm border-none bg-transparent p-1 transition-all hover:bg-gray-100"
          onClick={close}
        >
          <BiCross size={20} />
        </button>
        <div>
          {cloneElement(children, {
            onCloseModal: close,
          })}
        </div>
      </div>
    </div>
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
