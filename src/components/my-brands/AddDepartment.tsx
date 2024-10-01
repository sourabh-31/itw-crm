import Input from "../shared/Input";
import Select from "../shared/Select";
import ColorPicker from "./ColorPicker";

export default function AddDepartment() {
  return (
    <div className="mt-6 px-6">
      <div>
        <Input.Root name="departmentName">
          <Input.Icon iconSrc="/assets/svg/my-brands/poc/company.svg" />
          <Input.Content
            label="Department Name"
            placeholder="Enter department name"
          />
        </Input.Root>

        <Select
          label="Manager"
          name="manager"
          placeholder="Search manager"
          options={[
            { value: "Option 1", label: "Option 1" },
            { value: "Option 2", label: "Option 2" },
            { value: "Option 3", label: "Option 3" },
          ]}
          iconSrc="/assets/svg/my-brands/profile.svg"
          isRequired
        />

        <ColorPicker />
      </div>
    </div>
  );
}
