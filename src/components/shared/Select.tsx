import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { CgChevronDown } from "react-icons/cg";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  options: SelectOption[];
  placeholder?: string;
  isInput?: boolean;
  iconSrc: string;
  onChange?: (value: string) => void;
  isRequired?: boolean;
}

const Select: React.FC<SelectProps> = ({
  label,
  options,
  placeholder = "Select an option",
  isInput = false,
  iconSrc,
  onChange,
  isRequired = false,
}) => {
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
    null
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: SelectOption) => {
    setSelectedOption(option);
    setInputValue(option.label);
    setDropdownOpen(false);
    if (onChange) onChange(option.value);
  };

  // Handle outside click to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle dropdown when clicking the field
  const handleToggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // Handle keyboard interaction
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      setDropdownOpen((prev) => !prev);
    }
  };

  // Filtered options for when `isInput` is true
  const filteredOptions = options.filter(
    (option) =>
      !isInput || option.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="mt-4">
        <Image src={iconSrc} alt="select-icon" width={22} height={22} />
      </div>

      <div className="mr-1 w-full">
        <label className="font-mulish text-sm font-bold text-[#FFFFFF99]">
          {label}
          {isRequired && "*"}
        </label>
        <div className="relative mt-[2px]">
          <div
            className="flex h-12 cursor-pointer items-center rounded-lg border border-[#b4b4b4] bg-[#292d38] px-3"
            onClick={handleToggleDropdown}
            onKeyDown={handleKeyDown}
            tabIndex={0} // Allows focus with keyboard
            role="button" // For screen readers, indicates the div acts like a button
            aria-expanded={dropdownOpen} // Indicates if dropdown is open or closed
            aria-haspopup="listbox" // Indicates the dropdown contains a list of selectable items
          >
            {/* Input field if isInput is true */}
            {isInput ? (
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={placeholder}
                className="flex-1 bg-transparent font-mulish text-sm font-bold text-[#FFFFFF99] outline-none placeholder:text-[#FFFFFF4D]"
                // onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <div className="flex-1 font-mulish text-sm font-bold text-[#FFFFFF99]">
                {selectedOption ? selectedOption.label : placeholder}
              </div>
            )}

            <div
              className="ml-1"
              onClick={(e) => {
                e.stopPropagation();
                handleToggleDropdown();
              }}
            >
              <CgChevronDown size={16} color="white" />
            </div>
          </div>

          {/* Dropdown menu */}
          {dropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute z-10 mt-1 w-full rounded-lg border border-[#b4b4b4] bg-[#20222E]"
              role="listbox"
              aria-activedescendant={selectedOption?.value || ""}
              tabIndex={-1} // Makes the dropdown focusable
            >
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <div
                    key={option.value}
                    className="flex cursor-pointer items-center rounded-lg p-3 hover:bg-[#292d38]"
                    onClick={() => handleSelect(option)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        handleSelect(option);
                      }
                    }}
                    tabIndex={0} // Makes each option focusable
                    role="option" // Indicates this is a selectable option
                    aria-selected={selectedOption?.value === option.value} // Indicates whether the option is selected
                  >
                    <span className="font-mulish text-sm font-bold text-[#FFFFFF99]">
                      {option.label}
                    </span>
                  </div>
                ))
              ) : (
                <div className="p-3 text-sm text-[#FFFFFF99]">No options</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Select;
