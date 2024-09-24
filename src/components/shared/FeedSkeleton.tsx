export default function FeedSkeleton() {
  return (
    <div className="relative ml-4 h-[166px] w-[327px] scale-90 transition-transform duration-300 ease-out sm:ml-0 sm:scale-100">
      <svg
        width={327}
        height={166}
        viewBox="0 0 327 166"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-0 top-0"
      >
        {/* Shimmer effect */}

        <path
          d="M38.4 0.5H185.313C191.793 0.5 194.946 0.503598 197.735 1.20045C203.336 2.59934 208.226 6.01066 211.472 10.7839C213.089 13.1616 214.181 16.119 216.419 22.2009L216.451 22.2887C218.648 28.2621 219.782 31.3432 221.476 33.8351C224.861 38.8114 229.959 42.3679 235.798 43.8263C238.721 44.5566 242.004 44.5566 248.369 44.5566H248.463H288.6C295.329 44.5566 300.345 44.557 304.322 44.8819C308.294 45.2064 311.184 45.8519 313.669 47.1179C318.091 49.371 321.686 52.966 323.939 57.3878C325.205 59.8725 325.85 62.763 326.175 66.7342C326.5 70.7111 326.5 75.7277 326.5 82.4566V124.6C326.5 131.329 326.5 136.345 326.175 140.322C325.85 144.294 325.205 147.184 323.939 149.669C321.686 154.091 318.091 157.686 313.669 159.939C311.184 161.205 308.294 161.85 304.322 162.175C300.345 162.5 295.329 162.5 288.6 162.5H38.4C31.6711 162.5 26.6545 162.5 22.6776 162.175C18.7064 161.85 15.8159 161.205 13.3312 159.939C8.90941 157.686 5.31437 154.091 3.06135 149.669C1.79533 147.184 1.14977 144.294 0.82532 140.322C0.500389 136.345 0.5 131.329 0.5 124.6V38.4C0.5 31.6711 0.500389 26.6545 0.82532 22.6776C1.14977 18.7064 1.79533 15.8159 3.06135 13.3312C5.31437 8.90941 8.90941 5.31437 13.3312 3.06135C15.8159 1.79533 18.7064 1.14977 22.6776 0.82532C26.6545 0.500389 31.6711 0.5 38.4 0.5Z"
          fill="#1d1f25"
          stroke="#444751"
          strokeWidth={1}
        />
      </svg>

      <div className="relative z-10 box-border flex size-full flex-col p-5 text-white">
        <div className="blink-feed flex h-[34px] w-32 items-center justify-center rounded-lg border border-gray-light bg-primary-400" />

        <div className="flex justify-between">
          <div className="blink-feed mt-8 flex h-12 w-40 items-center justify-center rounded-lg border border-gray-light bg-primary-400" />

          {/* Lottie container */}

          <div className="blink-feed mt-8 flex h-12 w-20 items-center justify-center rounded-lg border border-gray-light bg-primary-400" />
        </div>

        {/* Top right btn */}

        <div className="blink-feed absolute right-[6px] top-[2px] ml-1 flex h-[34px] w-24 items-center justify-center rounded-[30px] border border-gray-light bg-primary-400" />
      </div>
    </div>
  );
}
