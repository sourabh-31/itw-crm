import dynamic from "next/dynamic";
import Image from "next/image";

import { useTaskStats } from "@/hooks/useTasks";
import { useTaskStore } from "@/store/useTaskStore";

const SimpleBarChartWithoutSSR = dynamic(() => import("./OpenTaskChart"), {
  ssr: false,
});

const GeneralPieChartWithoutSSR = dynamic(() => import("./GeneralPieChart"), {
  ssr: false,
});

export default function OpenDashboardCount() {
  const { timeFilter } = useTaskStore();

  const { data } = useTaskStats("PENDING", timeFilter, 0);

  return (
    <section
      style={{ backdropFilter: "blur(84px)" }}
      className="flex h-[145px] items-center justify-between rounded-[20px] bg-[#FFFFFF] pl-6 pr-16"
    >
      {/* Total task */}
      <div className="flex w-[165px] flex-col items-center gap-[10px]">
        <div className="flex items-center gap-[6px]">
          <Image
            src="/assets/svg/tasks/cube.svg"
            alt="cube"
            width={20}
            height={20}
          />
          <span className="font-mulish text-sm text-[#00000099]">
            Total task created
          </span>
        </div>
        <div className="font-recoletaAlt text-4xl text-[#171F25]">
          {data?.data?.totalTasks?.totalCount ?? 0}
        </div>
        <div className="relative left-[22px] mt-[-6px] flex w-[90%] items-start gap-[2px] self-end">
          {data &&
            data?.data.totalTasks.changeFromLastNDaysBeforeThat !==
              "NO_CHANGE" && (
              <Image
                src={
                  data?.data.totalTasks.changeFromLastNDaysBeforeThat ===
                  "INCREASE"
                    ? "/assets/svg/tasks/rise-positive.svg"
                    : "/assets/svg/tasks/rise-negative.svg"
                }
                alt="change"
                width={12}
                height={12}
                className="mt-1"
              />
            )}
          {data?.data.totalTasks.changeFromLastNDaysBeforeThat ===
            "INCREASE" && (
            <span className="font-mulish text-xs font-semibold text-[#0EAB00]">
              +{data.data.totalTasks.changeNumber} more than last week
            </span>
          )}
          {data?.data.totalTasks.changeFromLastNDaysBeforeThat ===
            "DECREASE" && (
            <span className="font-mulish text-xs font-semibold text-[#FF6161]">
              -{data.data.totalTasks.changeNumber} fewer than last week
            </span>
          )}
        </div>
      </div>

      <div className="w-[60px] rotate-90 border border-[#0000001A]" />

      {/* Open tasks */}
      <div className="flex items-end gap-1">
        <div className="flex w-[165px] flex-col items-center gap-[10px]">
          <div className="relative right-5 flex items-center gap-[6px]">
            <Image
              src="/assets/svg/tasks/cube.svg"
              alt="cube"
              width={20}
              height={20}
            />
            <span className="font-mulish text-sm text-[#00000099]">
              Open tasks
            </span>
          </div>
          <div className="font-recoletaAlt text-4xl text-[#171F25]">
            {data?.data?.openTasks?.totalCount ?? 0}
          </div>
          <div className="relative left-[6px] mt-[-6px] flex w-3/5 items-start gap-[2px]">
            {data &&
              data?.data.openTasks.changeFromLastNDaysBeforeThat !==
                "NO_CHANGE" && (
                <Image
                  src={
                    data?.data.openTasks.changeFromLastNDaysBeforeThat ===
                    "INCREASE"
                      ? "/assets/svg/tasks/rise-positive.svg"
                      : "/assets/svg/tasks/rise-negative.svg"
                  }
                  alt="change"
                  width={12}
                  height={12}
                  className="mt-1"
                />
              )}
            {data?.data.openTasks.changeFromLastNDaysBeforeThat ===
              "INCREASE" && (
              <span className="font-mulish text-xs font-semibold text-[#0EAB00]">
                +{data.data.openTasks.changeNumber} more than last week
              </span>
            )}
            {data?.data.openTasks.changeFromLastNDaysBeforeThat ===
              "DECREASE" && (
              <span className="font-mulish text-xs font-semibold text-[#FF6161]">
                -{data.data.openTasks.changeNumber} fewer than last week
              </span>
            )}
          </div>
        </div>

        <div className="-mb-4">
          <SimpleBarChartWithoutSSR />
        </div>
      </div>

      <div className="w-[60px] rotate-90 border border-[#0000001A]" />

      {/* Breached tasks */}
      <div className="-ml-4 flex flex-col items-center">
        <div className="mt-1 flex w-fit items-center gap-[6px]">
          <Image
            src="/assets/svg/tasks/cube.svg"
            alt="cube"
            width={20}
            height={20}
          />
          <span className="font-mulish text-sm text-[#00000099]">
            SLA breached tasks
          </span>
        </div>

        <div className="relative left-[30px] mt-1 w-4/5 font-recoletaAltReg text-4xl text-[#0000004D]">
          No breaches
        </div>
      </div>

      <div className="w-[60px] rotate-90 border border-[#0000001A]" />

      {/* Pie chart and details */}
      <div>
        <GeneralPieChartWithoutSSR />
      </div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-[6px]">
            <Image
              src="/assets/svg/tasks/trapezoid-blue.svg"
              alt="trapezoid"
              width={10}
              height={6}
            />
            <span className="font-recoletaAlt">
              {data?.data?.stats?.GENERAL?.totalTasks} (
              {data?.data?.stats?.GENERAL?.percentageComposition}%)
            </span>
          </div>
          <span className="font-mulish text-xs text-[#00000099]">
            A. General Service
          </span>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-[6px]">
            <Image
              src="/assets/svg/tasks/trapezoid-blue.svg"
              alt="trapezoid"
              width={10}
              height={6}
            />
            <span className="font-recoletaAlt">
              {data?.data?.stats?.EVENT?.totalTasks} (
              {data?.data?.stats?.EVENT?.percentageComposition}%)
            </span>
          </div>
          <span className="font-mulish text-xs text-[#00000099]">
            B. Event Service
          </span>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-[6px]">
            <Image
              src="/assets/svg/tasks/trapezoid-blue.svg"
              alt="trapezoid"
              width={10}
              height={6}
            />
            <span className="font-recoletaAlt">
              {data?.data?.stats?.INVENTORY?.totalTasks} (
              {data?.data?.stats?.INVENTORY?.percentageComposition}%)
            </span>
          </div>
          <span className="font-mulish text-xs text-[#00000099]">
            C. Inventory Service
          </span>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-[6px]">
            <Image
              src="/assets/svg/tasks/trapezoid-blue.svg"
              alt="trapezoid"
              width={10}
              height={6}
            />
            <span className="font-recoletaAlt">
              {data?.data?.stats?.BRAND?.totalTasks} (
              {data?.data?.stats?.BRAND?.percentageComposition}%)
            </span>
          </div>
          <span className="font-mulish text-xs text-[#00000099]">
            D. Brand Service
          </span>
        </div>
      </div>
    </section>
  );
}
