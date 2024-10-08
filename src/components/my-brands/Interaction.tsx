import Image from "next/image";

export default function Interaction() {
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
          Brand History
        </button>
      </div>

      {/* Content */}
      <div className="absolute top-0 h-[667px] w-full">
        <div className=" relative left-[2.5%] top-4">
          <span className="font-mulish text-[2.1vw] font-bold text-[#FFEA8E] sm:text-[1.8vw] lg:text-[0.95vw]">
            All Interactions
          </span>
        </div>

        {/* Notes */}
        <div className="relative left-[4%] top-16 w-[90%] text-sm">
          <div className="flex items-center justify-between">
            <div className="flex gap-2 font-mulish">
              <div className="cursor-pointer rounded-[30px] bg-[#FFE58E] px-4 py-3 font-bold">
                All
              </div>
              <div className="cursor-pointer rounded-[30px] bg-[#FFFFFF1A] px-4 py-3 text-white">
                Mails
              </div>
              <div className="cursor-pointer rounded-[30px] bg-[#FFFFFF1A] px-4 py-3 text-white">
                Calls
              </div>
            </div>
            <button
              type="button"
              className="flex size-[48px] items-center justify-center rounded-full border border-[#50515B]"
            >
              <Image
                src="/assets/svg/my-brands/brand-info/filter.svg"
                alt="filter"
                width={20}
                height={20}
              />
            </button>
          </div>
          <div className="mt-8 font-mulish text-sm font-bold text-white">
            This Month
          </div>

          <div className="rightSidebar-content mt-3 flex flex-col gap-3 overflow-y-auto">
            {Array.from({ length: 1 }).map((_, index) => (
              <div className="relative h-[225px] w-full" key={index}>
                <svg
                  className="size-full"
                  viewBox="0 0 579 227"
                  fill="none"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 24C0 10.7452 10.7452 0 24 0L516.582 0C526.049 0 533.51 8.06312 532.777 17.5016L532.271 24.0167C530.947 41.074 546.119 54.7703 562.952 51.713C571.309 50.1953 579 56.6155 579 65.109V202.5C579 215.755 568.255 226.5 555 226.5H24C10.7452 226.5 0 215.755 0 202.5V24Z"
                    fill="#DFEBFF"
                  />
                </svg>

                <div className="absolute right-[0.6%] top-[2px] flex size-[4.8vw] items-center justify-center rounded-full bg-[#DFEBFF] lg:right-0 lg:size-[2.4vw] 2xl:right-[0.5%]">
                  <Image
                    src="/assets/svg/my-brands/brand-info/more.svg"
                    alt="more"
                    width={20}
                    height={20}
                  />
                </div>

                <div className="absolute top-0 h-[227px] w-full px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/png/my-brands/call-profile.png"
                      alt="call-profile"
                      width={38}
                      height={37}
                    />
                    <div className="flex flex-col items-start">
                      <span className="font-recoletaAlt">
                        On-Ground Follow-Up
                      </span>
                      <span className="font-mulish text-xs text-[#4F4E4E]">
                        10/04/2023 / IND vs WI
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2 font-mulish text-xs">
                    <div className="rounded bg-[#FFA300] px-3 py-[6px]">
                      Warm
                    </div>
                    <div className="rounded bg-[#ABCBFF] px-3 py-[6px]">
                      Generic Proposal Sent
                    </div>
                    <div className="rounded bg-[#FFE58E] px-3 py-[6px]">
                      In-progress⏳
                    </div>
                  </div>

                  <div className="mt-3 flex flex-col rounded-[10px] border border-[#CFFFCF] bg-white p-2">
                    <span className="font-mulish text-xs font-semibold">
                      Aravind Krishnan:
                    </span>
                    <span className="mt-1 font-mulish text-xs text-[#000000B2] xl:text-sm">
                      The notes they added in the stages and status page comes
                      here: Discussed about how their brand engagement will
                      boost when add their Brand ads in the Perimeter Board in
                      the event.
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
