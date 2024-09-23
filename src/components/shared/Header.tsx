import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed inset-x-0 z-50 col-start-1 col-end-3 flex items-center justify-between border-b border-gray-dark bg-background px-6 py-2 sm:py-5">
      {/* ITW Logo */}

      <Image
        src="/assets/svg/itw-logo.svg"
        alt="itw-logo"
        width={65}
        height={35}
        className="w-[50px] h-[50px] sm:w-[65px] sm:h-[35px]"
      />

      {/* Search, Notification and Profile */}

      <div className="flex items-center gap-4">
        {/* Search */}

        <button
          className="rounded-full bg-primary-200 p-2 sm:p-3"
          type="button"
        >
          <Image
            src="/assets/svg/search.svg"
            alt="search-icon"
            width={20}
            height={20}
            className="w-[15px] h-[15px] sm:w-[20px] sm:h-[20px]"
          />
        </button>

        {/* Notification */}

        <button
          className="rounded-full bg-primary-200 p-2 sm:p-3"
          type="button"
        >
          <Image
            src="/assets/svg/bell.svg"
            alt="bell-icon"
            width={20}
            height={20}
            className="w-[15px] h-[15px] sm:w-[20px] sm:h-[20px]"
          />
        </button>

        {/* Profile */}

        <button type="button">
          <Image
            src="/assets/png/avatar.png"
            alt="user-profile"
            width={50}
            height={50}
            className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px]"
          />
        </button>
      </div>
    </header>
  );
}
