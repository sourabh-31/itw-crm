"use client";

import { usePathname } from "next/navigation";

import AddDepartment from "../my-brands/AddDepartment";
import AddLocation from "../my-brands/AddLocation";
import AddPerson from "../my-brands/AddPerson";
import Demo from "../my-brands/Demo";
import Details from "../my-brands/Details";
import Filter from "../tasks/Filter";
import FilterByArchivedEvents from "../tasks/filter-windows/FilterByArchivedEvents";
import FilterByAssignedBy from "../tasks/filter-windows/FilterByAssignedBy";
import FilterByAssignedTo from "../tasks/filter-windows/FilterByAssignedTo";
import FilterByBrands from "../tasks/filter-windows/FilterByBrands";
import FilterByCurrentEvents from "../tasks/filter-windows/FilterByCurrentEvents";
import FilterByInventories from "../tasks/filter-windows/FilterByInventories";
import FilterByTeamOwners from "../tasks/filter-windows/FilterByTeamOwners";
import SortBy from "../tasks/filter-windows/SortBy";
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

      {/* Filter brands */}
      <SidebarFilter.Window
        name="filter-tasks"
        startIcon="/assets/svg/tasks/funnel.svg"
        className="w-[360px]"
        headerName="Filter Tasks"
        isSubHeading
      >
        <Filter />
      </SidebarFilter.Window>

      {/* Filter by sort by */}
      <SidebarFilter.Window
        name="filter-sortBy"
        startIcon="/assets/svg/tasks/arrow-left.svg"
        className="w-[360px]"
        headerName="Sort by"
        isSubHeading
      >
        <SortBy />
      </SidebarFilter.Window>

      {/* Filter by brands */}
      <SidebarFilter.Window
        name="filter-brands"
        startIcon="/assets/svg/tasks/arrow-left.svg"
        className="w-[360px]"
        headerName="Brands"
        isSubHeading
      >
        <FilterByBrands />
      </SidebarFilter.Window>

      {/* Filter by inventories */}
      <SidebarFilter.Window
        name="filter-inventories"
        startIcon="/assets/svg/tasks/arrow-left.svg"
        className="w-[360px]"
        headerName="Inventories"
        isSubHeading
      >
        <FilterByInventories />
      </SidebarFilter.Window>

      {/* Filter by current events */}
      <SidebarFilter.Window
        name="filter-currentEvents"
        startIcon="/assets/svg/tasks/arrow-left.svg"
        className="w-[360px]"
        headerName="Current Events"
        isSubHeading
      >
        <FilterByCurrentEvents />
      </SidebarFilter.Window>

      {/* Filter by archived events */}
      <SidebarFilter.Window
        name="filter-archivedEvents"
        startIcon="/assets/svg/tasks/arrow-left.svg"
        className="w-[360px]"
        headerName="Archived Events"
        isSubHeading
      >
        <FilterByArchivedEvents />
      </SidebarFilter.Window>

      {/* Filter by assigned by */}
      <SidebarFilter.Window
        name="filter-assignedBy"
        startIcon="/assets/svg/tasks/arrow-left.svg"
        className="w-[360px]"
        headerName="Assigned By"
        isSubHeading
      >
        <FilterByAssignedBy />
      </SidebarFilter.Window>

      {/* Filter by assigned to */}
      <SidebarFilter.Window
        name="filter-assignedTo"
        startIcon="/assets/svg/tasks/arrow-left.svg"
        className="w-[360px]"
        headerName="Assigned To"
        isSubHeading
      >
        <FilterByAssignedTo />
      </SidebarFilter.Window>

      {/* Filter by team owners */}
      <SidebarFilter.Window
        name="filter-teamOwners"
        startIcon="/assets/svg/tasks/arrow-left.svg"
        className="w-[360px]"
        headerName="Team Owners"
        isSubHeading
      >
        <FilterByTeamOwners />
      </SidebarFilter.Window>

      {pathname === "/my-brands/google-pvt-ltd" ? <Demo /> : null}
    </>
  );
}
