import Image from "next/image";

import Input from "../shared/Input";
import Select from "../shared/Select";
import Switch from "../shared/Switch";

export default function AddPerson() {
  return (
    <div className="px-6">
      {/* Profile image */}

      <div className="relative mx-auto my-6 flex size-[78px] items-center justify-center rounded-full border-[1.5px] border-dashed border-[#FFFFFF66] bg-[#20222E]">
        <Image
          src="/assets/svg/my-brands/profile.svg"
          alt="profile-img"
          width={30}
          height={30}
        />

        <button
          className="absolute bottom-[-2px] right-[-2px] flex size-[30px] items-center justify-center rounded-full border-2 border-[#292D38] bg-white"
          type="button"
        >
          <Image
            src="/assets/svg/my-brands/pencil-alt.svg"
            alt="pencil-alt"
            width={16}
            height={16}
          />
        </button>
      </div>

      <div>
        <h2 className="mb-4 font-recoletaAlt text-xl text-white">
          Basic Details
        </h2>
        <Input.Root name="name">
          <Input.Icon iconSrc="/assets/svg/my-brands/profile.svg" />
          <Input.Content
            label="Name"
            placeholder="Enter Name"
            isRequired
            prefixOptions={[
              {
                value: "mr",
                label: "Mr.",
                iconSrc: "/assets/svg/my-brands/poc/mr.svg",
              },
              {
                value: "ms",
                label: "Ms.",
                iconSrc: "/assets/svg/my-brands/poc/ms.svg",
              },
            ]}
          />
        </Input.Root>

        <Select
          label="Designation"
          placeholder="Select or add designation"
          options={[
            { value: "Marketing Manager", label: "Marketing Manager" },
            { value: "Business Developer", label: "Business Developer" },
            { value: "Software Developer", label: "Software Developer" },
          ]}
          iconSrc="/assets/svg/my-brands/poc/card.svg"
          isRequired
          isInput
        />

        <Input.Root name="email">
          <Input.Icon iconSrc="/assets/svg/my-brands/poc/mail.svg" />
          <Input.Content
            label="Official Email ID"
            placeholder="Enter official email ID"
          />
        </Input.Root>

        <Select
          label="Location"
          placeholder="Search and select location"
          options={[
            { value: "Bengaluru", label: "Bengaluru" },
            { value: "Hyderabad", label: "Hyderabad" },
            { value: "Gurugram", label: "Gurugram" },
          ]}
          iconSrc="/assets/svg/my-brands/poc/location.svg"
          isInput
        />

        <h2 className="mb-4 font-recoletaAlt text-xl text-white">
          Connections
        </h2>

        <Select
          label="Manager"
          placeholder="Search person or department or location"
          options={[
            { value: "Option 1", label: "Option 1" },
            { value: "Option 2", label: "Option 2" },
            { value: "Option 3", label: "Option 3" },
          ]}
          iconSrc="/assets/svg/my-brands/poc/manager.svg"
          isRequired
        />

        <h2 className="mb-4 font-recoletaAlt text-xl text-white">
          Contact Details
        </h2>

        {/* Work number */}
        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <Input.Root name="workNumber">
            <Input.Icon iconSrc="/assets/svg/my-brands/poc/phone-ring.svg" />
            <Input.Content
              label="Work Number"
              placeholder="Enter Phone Number"
              prefixOptions={[
                {
                  value: "IN",
                  label: "IN",
                  iconSrc: "/assets/svg/my-brands/poc/india-flag.svg",
                },
              ]}
            />
          </Input.Root>

          <Switch />
        </div>

        {/* Mobile number */}

        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <Input.Root name="mobileNumber">
            <Input.Icon iconSrc="/assets/svg/my-brands/poc/phone-ring.svg" />
            <Input.Content
              label="Mobile Number"
              placeholder="Enter Phone Number"
              prefixOptions={[
                {
                  value: "IN",
                  label: "IN",
                  iconSrc: "/assets/svg/my-brands/poc/india-flag.svg",
                },
              ]}
            />
          </Input.Root>

          <Switch />
        </div>

        <h2 className="mb-4 font-recoletaAlt text-xl text-white">
          Other Links
        </h2>

        <Input.Root name="linkedin">
          <Input.Icon iconSrc="/assets/svg/my-brands/poc/linkedin.svg" />
          <Input.Content
            label="Linkedin Profile"
            placeholder="Enter linkedin profile URL"
          />
        </Input.Root>
      </div>
    </div>
  );
}
