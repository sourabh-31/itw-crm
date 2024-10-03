import { useState } from "react";

import { useModal } from "../shared/Modal";
import Select from "../shared/Select";

export default function MovePerson() {
  const [moveSubordinates, setMoveSubordinates] = useState(false);

  const { close } = useModal();

  return (
    <div
      className="w-[520px] rounded-xl bg-[#2D3036] p-6"
      style={{ boxShadow: "0px 0px 72px 0px #00000024" }}
    >
      <div className="text-center font-recoletaAlt text-xl text-white">
        Move Person
      </div>
      <div className="mt-[10px] text-center font-mulish text-white">
        Changing the reporting manager will move this role to report under the
        selected manager.
      </div>

      <div className="mt-2">
        <Select
          label="New Manager"
          name="new manager"
          className="bg-[#2D3036]"
          placeholder="Search people or department or location"
          options={[
            { value: "Bengaluru", label: "Bengaluru" },
            { value: "Anbarsan Krishnan", label: "Anbarsan Krishnan" },
            { value: "Marketing", label: "Marketing" },
          ]}
        />
      </div>

      <div className="-mt-4">
        <label
          htmlFor="moveSubordinates"
          className="flex cursor-pointer items-center"
        >
          <input
            type="checkbox"
            id="moveSubordinates"
            className="relative size-4 appearance-none rounded border-2 border-white bg-transparent checked:border-white 
checked:bg-transparent checked:text-black checked:after:absolute checked:after:left-[-1.5px] checked:after:top-[-4px] checked:after:text-xs checked:after:text-black checked:after:content-['✔'] 
focus:outline-none"
            checked={moveSubordinates}
            onChange={() => setMoveSubordinates(!moveSubordinates)}
          />
          <span className="ml-2 font-mulish text-sm font-medium text-white">
            Move all direct reports and subordinates with this change
          </span>
        </label>
      </div>

      <div className="mb-3 mt-6 flex items-center justify-center gap-5">
        <button
          className="h-[50px] w-[200px] rounded-full border border-[#FFFFFF66] bg-[#FFFFFF] font-mulish font-bold tracking-[0.036em] text-[#383838]"
          type="button"
          onClick={() => close()}
        >
          CANCEL
        </button>
        <button
          className="h-[50px] w-[200px] rounded-full bg-[#0094FF] font-mulish font-bold tracking-[0.036em] text-[#ffffff]"
          type="button"
        >
          MOVE
        </button>
      </div>
    </div>
  );
}
