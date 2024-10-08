"use client";

import type { KeyboardEvent } from "react";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("All time");

  const options = [
    "All time",
    "Last 24 hours",
    "Last 7 days",
    "Last 30 days",
    "Last 90 days",
  ];

  const handleKeyDown = (
    event: KeyboardEvent<HTMLLIElement>,
    option: string
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      setSelected(option);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative w-28 sm:w-40">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => e.key === "Escape" && setIsOpen(false)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between rounded-lg border border-[#B4B4B4] bg-transparent px-4 py-2 font-mulish text-sm font-bold text-black focus:outline-none"
      >
        {selected}
        <BiChevronDown className="-mr-1 size-4 text-[#818181]" />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          aria-label="Time period"
          className="absolute z-10 mt-1 w-full rounded-md border border-gray-300 bg-white py-1 font-mulish shadow-lg"
        >
          {options.map((option) => (
            <li
              key={option}
              role="option"
              aria-selected={selected === option}
              tabIndex={0}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              onKeyDown={(e) => handleKeyDown(e, option)}
              className="cursor-pointer px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:outline-none"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
