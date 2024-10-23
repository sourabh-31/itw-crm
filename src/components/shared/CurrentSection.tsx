"use client";

import { capitalize } from "lodash";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CgChevronDown } from "react-icons/cg";

import TaskHeader from "../tasks/TaskHeader";
import { Menu } from "./Menu";
import { Sidebar } from "./Sidebar";

export default function CurrentSection() {
  const pathname = usePathname();
  const currentRoute =
    pathname === "/" ? ["dashboard"] : pathname.split("/").slice(1);

  // Function to capitalize first letter of each word
  const capitalizeWords = (str: string) => {
    return str.split(" ").map(capitalize).join(" ");
  };

  // Process the routes and capitalize each word
  const capitalizedRoutes = currentRoute.map((route) =>
    capitalizeWords(route.replace(/-/g, " "))
  );

  // Different current section header for /tasks
  if (pathname === "/tasks") {
    return (
      <header className="noiseBgSec h-28 border-b border-gray-light bg-foreground sm:rounded-t-2xl lg:h-16">
        <TaskHeader />
      </header>
    );
  }

  // Section header not for /tasks
  return (
    <header className="noiseBgSec flex h-16 items-center justify-between border-b border-gray-light bg-foreground px-4 font-recoletaAlt text-lg text-white sm:h-[4.5rem] sm:rounded-t-2xl sm:px-6 lg:text-xl">
      {/* Full Breadcrumbs on larger screens */}
      <div className="hidden items-center gap-1 lg:flex">
        {capitalizedRoutes.map((route, index) => {
          const isLast = index === capitalizedRoutes.length - 1;
          return (
            <span
              key={index}
              className={`${isLast ? "text-white" : "text-[#FFFFFF99]"}`}
            >
              {route}
              {!isLast && " / "}
            </span>
          );
        })}
      </div>

      {/* Only the last route on smaller screens */}
      <div className="lg:hidden">
        <span className="text-white">
          {capitalizedRoutes[capitalizedRoutes.length - 1]}
        </span>
      </div>

      {pathname === "/my-brands/google-pvt-ltd/org-chart" && (
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            className="flex size-10 items-center justify-center rounded-full border border-[#FFFFFF33] bg-[#242632] sm:size-12"
            type="button"
          >
            <Image
              src="/assets/svg/my-brands/clock.svg"
              width={20}
              height={20}
              alt="clock"
              className="size-4 sm:size-5"
            />
          </button>

          {/* How this works btn (shown only on large screens) */}
          <button
            className="hidden h-10 w-32 items-center justify-center rounded-full bg-[#FFFFFF] font-mulish text-sm font-bold text-black sm:h-[50px] sm:w-[200px] lg:flex"
            type="button"
          >
            HOW THIS WORKS?
          </button>

          <Menu>
            <Menu.Trigger>
              <button
                className="flex h-10 w-32 items-center justify-center gap-[6px] rounded-full bg-[#0094FF] sm:h-12 sm:w-[135px]"
                type="button"
              >
                <span className="font-mulish text-sm font-bold">ADD NEW</span>
                <CgChevronDown size={18} />
              </button>
            </Menu.Trigger>

            <div className="relative right-12 top-2">
              <Menu.Items width="230px" position="bottom">
                <Sidebar.Open opens="add-person">
                  <Menu.Item
                    imgSrc="/assets/svg/my-brands/user.svg"
                    btnName="Person"
                  />
                </Sidebar.Open>
                <Sidebar.Open opens="add-department">
                  <Menu.Item
                    imgSrc="/assets/svg/my-brands/department.svg"
                    btnName="Department"
                  />
                </Sidebar.Open>
                <Sidebar.Open opens="add-location">
                  <Menu.Item
                    imgSrc="/assets/svg/my-brands/location.svg"
                    btnName="Location"
                  />
                </Sidebar.Open>

                {/* "How This Works" button for screens <1024px */}
                <Menu.Item
                  imgSrc="/assets/svg/my-brands/question-mark-alt.svg"
                  btnName="How This Works?"
                  className="lg:hidden"
                />
              </Menu.Items>
            </div>
          </Menu>
        </div>
      )}
    </header>
  );
}
