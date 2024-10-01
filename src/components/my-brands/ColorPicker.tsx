import React, { useState } from "react";
import { BiCheck } from "react-icons/bi";
import { PiProhibitBold } from "react-icons/pi";

const colors = [
  "#FFA07A",
  "#D8BFD8",
  "#98FB98",
  "#FFFACD",
  "#AFEEEE",
  "#90EE90",
  "#FFC0CB",
  "#ADD8E6",
];

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    console.log(`Selected color: ${color}`);
    // You can perform any other operation here
  };

  const handleCancel = () => {
    setSelectedColor(null);
    console.log("Color selection cancelled");
  };

  return (
    <div>
      <div className="font-mulish text-sm font-bold text-[#FFFFFF99]">
        Color
      </div>
      <div className="mt-1 flex flex-wrap justify-between">
        {colors.map((color, index) => (
          <button
            type="button"
            key={color}
            className={`flex size-7 items-center justify-center rounded-lg transition-all duration-200 focus:outline-none sm:size-10 ${
              selectedColor === color ? "scale-110 ring-2 ring-white" : ""
            }`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorSelect(color)}
          >
            {selectedColor === color && <BiCheck size={20} color="black" />}
          </button>
        ))}
        <button
          type="button"
          className={`flex size-7 items-center justify-center rounded-lg bg-gray-700 transition-all duration-200 focus:outline-none sm:size-10 ${
            selectedColor === null ? "scale-110 ring-2 ring-white" : ""
          }`}
          onClick={handleCancel}
        >
          <PiProhibitBold size={20} color="white" />
        </button>
      </div>
    </div>
  );
};

export default ColorPicker;