import Image from "next/image";

export default function Header() {
  return (
    <header className="noiseBg fixed inset-x-0 z-50 col-start-1 col-end-3 flex items-center justify-between border-b border-gray-dark px-6 py-5">
      {/* ITW Logo */}

      <Image
        src="/assets/svg/itw-logo.svg"
        alt="itw-logo"
        width={65}
        height={35}
      />

      {/* Search, Notification and Profile */}

      <div className="flex items-center gap-4">
        {/* Search */}

        <button className="rounded-full bg-primary-200 p-3" type="button">
          <Image
            src="/assets/svg/search.svg"
            alt="search-icon"
            width={20}
            height={20}
          />
        </button>

        {/* Notification */}

        <button className="rounded-full bg-primary-200 p-3" type="button">
          <Image
            src="/assets/svg/bell.svg"
            alt="bell-icon"
            width={20}
            height={20}
          />
        </button>

        {/* Profile */}

        <button type="button">
          <Image
            src="/assets/png/avatar.png"
            alt="user-profile"
            width={50}
            height={50}
          />
        </button>
      </div>
    </header>
  );
}
