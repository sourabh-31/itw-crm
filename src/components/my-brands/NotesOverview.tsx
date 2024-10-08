import Image from "next/image";

export default function NotesOverview() {
  return (
    <div className="relative h-[667px] w-full">
      <svg
        className="size-full"
        viewBox="0 0 629 667"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_2379_1577)">
          <path
            d="M0 28C0 12.536 12.536 0 28 0H104.529C114.157 0 123.11 4.94676 128.234 13.098L143.679 37.6664C152.28 51.3488 167.308 59.6523 183.469 59.6523H601C616.464 59.6523 629 72.1883 629 87.6523V639C629 654.464 616.464 667 601 667H28C12.536 667 0 654.464 0 639V28Z"
            fill="#1C1E27"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_2379_1577"
            x="-54"
            y="-54"
            width="737"
            height="775"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="27" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_2379_1577"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_2379_1577"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      {/* Top btns */}
      <div className="absolute left-1/4 top-[6px]">
        <button
          type="button"
          className="h-[44px] w-[155px] rounded-full bg-[#1C1E27] font-mulish font-medium tracking-[0.036em] text-white"
        >
          Brand Owners
        </button>
      </div>

      {/* Content */}
      <div className="absolute top-0 h-[667px] w-full">
        <div className="relative left-[3%] top-4 flex items-center gap-[2px] xl:left-[4%] xl:gap-[6px]">
          <span className="font-mulish font-bold text-[#FFEA8E] lg:text-lg xl:text-xl">
            Notes
          </span>
          <Image
            src="/assets/svg/my-brands/brand-info/golden-lock.svg"
            alt="lock"
            width={20}
            height={20}
            className="size-[16px] lg:size-[20px]"
          />
        </div>

        {/* Notes */}
        <div className="relative left-[4%] top-16 w-[90%]">
          <div className="font-mulish text-sm font-bold text-white">
            This Month
          </div>
          <div className="rightSidebar-content mt-3 flex max-h-[32rem] flex-col gap-3 overflow-y-auto rounded-[10px]">
            {Array.from({ length: 2 }).map((_, index) => (
              <div
                className="rounded-[10px] bg-[#FFD64E] px-4 py-3"
                key={index}
              >
                <div className="pt-1 font-mulish text-sm font-bold">
                  The notes they added in the stages and status page comes here:
                  Discussed about how their brand engagement will boost when add
                  their Brand ads in the Perimeter Board in the event.
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div className="font-mulish text-xs font-semibold text-[#000000B2]">
                    10 Apr 24
                  </div>
                  <button
                    type="button"
                    className="flex size-[36px] items-center justify-center rounded-full border border-[#50515B]"
                  >
                    <Image
                      src="/assets/svg/my-brands/pencil.svg"
                      alt="pencil"
                      width={16}
                      height={16}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
