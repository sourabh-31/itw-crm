"use client";

import { Sidebar } from "../shared/Sidebar";
import AddDepartment from "./AddDepartment";
import AddLocation from "./AddLocation";
import AddPerson from "./AddPerson";

export default function SidebarWindows() {
  return (
    <>
      {/* Add Person */}
      <Sidebar.Window name="add-person">
        <AddPerson />
      </Sidebar.Window>

      {/* Add department */}
      <Sidebar.Window name="add-department">
        <AddDepartment />
      </Sidebar.Window>

      {/* Add location */}
      <Sidebar.Window name="add-location">
        <AddLocation />
      </Sidebar.Window>
    </>
  );
}
