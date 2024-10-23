"use client";

import { usePathname } from "next/navigation";

import AddDepartment from "../my-brands/AddDepartment";
import AddLocation from "../my-brands/AddLocation";
import AddPerson from "../my-brands/AddPerson";
import Demo from "../my-brands/Demo";
import Details from "../my-brands/Details";
import Filter from "../tasks/Filter";
import { SidebarFilter } from "../tasks/FilterBrands";
import { Sidebar } from "./Sidebar";

export default function SidebarWindows() {
  const pathname = usePathname();

  return (
    <>
      {/* Add Person */}
      <Sidebar.Window
        name="add-person"
        title="Add New"
        subText="Google Search Private Limited"
        isBorderedIcon={false}
      >
        <AddPerson />
      </Sidebar.Window>

      {/* Add department */}
      <Sidebar.Window
        name="add-department"
        title="Add New"
        subText="Google Search Private Limited"
        isBorderedIcon={false}
      >
        <AddDepartment />
      </Sidebar.Window>

      {/* Add location */}
      <Sidebar.Window
        name="add-location"
        title="Add New"
        subText="Google Search Private Limited"
        isBorderedIcon={false}
      >
        <AddLocation />
      </Sidebar.Window>

      {/* People details */}
      <Sidebar.Window
        name="people-details"
        title="People Details"
        icon1="/assets/svg/people-details/edit-pencil.svg"
        icon2="/assets/svg/people-details/more-alt.svg"
        isBorderedIcon
        className="w-96"
      >
        <Details name="people-details" />
      </Sidebar.Window>

      {/* Department details */}
      <Sidebar.Window
        name="department-details"
        title="Department Details"
        icon1="/assets/svg/people-details/edit-pencil.svg"
        icon2="/assets/svg/people-details/more-alt.svg"
        isBorderedIcon
        className="w-96"
      >
        <Details name="department-details" />
      </Sidebar.Window>

      {/* Location details */}
      <Sidebar.Window
        name="location-details"
        title="Location Details"
        icon1="/assets/svg/people-details/edit-pencil.svg"
        icon2="/assets/svg/people-details/more-alt.svg"
        isBorderedIcon
        className="w-96"
      >
        <Details name="location-details" />
      </Sidebar.Window>

      <SidebarFilter.Window
        name="filter-brands"
        title="India vs Australia ODI"
        icon1="/assets/svg/people-details/edit-pencil.svg"
        icon2="/assets/svg/people-details/more-alt.svg"
        isBorderedIcon
        className="w-[360px]"
      >
        <Filter />
      </SidebarFilter.Window>

      {pathname === "/my-brands/google-pvt-ltd" ? <Demo /> : null}
    </>
  );
}
