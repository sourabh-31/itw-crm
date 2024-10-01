import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

export default function OrgDetails() {
  return (
    <section className="rounded-[32px] border border-[#EAECF0] bg-[#FFFBED] p-4">
      {/* Org detail header */}
      <header className="flex flex-col items-end justify-end md:flex-row md:items-start">
        {/* Brand owners */}

        <div className="mr-2 flex items-center md:mr-5 md:mt-1">
          <span className="mr-[6px] mt-2 font-mulish text-xs tracking-[0.036em] text-[#04040499]">
            Brand Owners:
          </span>
          <div className="flex items-end">
            <Image
              src="/assets/png/my-brands/owner1.png"
              alt="profile-img"
              width={30}
              height={30}
            />
            <Image
              src="/assets/png/my-brands/owner2.png"
              alt="profile-img"
              width={30}
              height={30}
              className="-ml-3"
            />
            <div className="-ml-3 flex size-[30px] items-center justify-center rounded-full border border-[#FFFBED] bg-[#DFCF98] font-mulish text-xs font-bold tracking-[0.036em]">
              +12
            </div>

            <Link
              href="/my-brands/google-pvt-ltd"
              className="mb-[3px] ml-2 font-mulish text-xs font-bold tracking-[0.036em] text-[#0094FF] underline"
            >
              View
            </Link>
          </div>
        </div>

        {/* Utility link icons */}
        <div className="mt-3 flex items-center gap-2 md:mt-0 lg:gap-3">
          <Link
            href="/my-brands/google-pvt-ltd/org-chart"
            className="flex h-11 w-36 items-center justify-center gap-[6px] rounded-full border border-[#50515B] bg-black lg:h-12 lg:w-[180px]"
          >
            <Image
              src="/assets/svg/my-brands/brand-info/chart.svg"
              alt="org-chart"
              width={18}
              height={18}
              className="size-[16px] lg:size-[18px]"
            />
            <span className="font-mulish text-xs font-bold text-white lg:text-sm">
              ORG CHART
            </span>
            <span className="flex size-[20px] items-center justify-center rounded-full bg-[#0eab00] font-mulish text-[10px] text-white lg:text-xs">
              10
            </span>
          </Link>

          <Link
            href="/my-brands/google-pvt-ltd"
            className="flex size-11 items-center justify-center rounded-full border border-[#50515B] bg-transparent lg:size-12"
          >
            <Image
              src="/assets/svg/my-brands/brand-info/target.svg"
              alt="target"
              width={22}
              height={22}
              className="size-[20px] lg:size-[22px]"
            />
          </Link>

          <Link
            href="/my-brands/google-pvt-ltd"
            className="flex size-11 items-center justify-center rounded-full border border-[#50515B] bg-transparent lg:size-12"
          >
            <Image
              src="/assets/svg/my-brands/brand-info/add-note.svg"
              alt="add-note"
              width={20}
              height={20}
            />
          </Link>

          <Link
            href="/my-brands/google-pvt-ltd"
            className="flex size-11 items-center justify-center rounded-full border border-[#50515B] bg-transparent lg:size-12"
          >
            <Image
              src="/assets/svg/my-brands/brand-info/more.svg"
              alt="more"
              width={20}
              height={20}
              className="size-[18px] lg:size-[20px]"
            />
          </Link>
        </div>
      </header>

      {/* Org main details */}
      <main className="mb-5 mt-2 lg:-mt-1 lg:ml-7 xl:-mt-6 2xl:-mt-9">
        {/* Logo, company name, services */}
        <div className="mt-4 flex items-start gap-3 sm:mt-0 sm:gap-7">
          <div
            className="flex size-[45px] items-center justify-center rounded-full bg-white sm:size-[70px] lg:size-[90px]"
            style={{ boxShadow: "0px 0px 28.56px 0px #00000021" }}
          >
            <Image
              src="/assets/png/my-brands/google-logo.png"
              alt="org-logo"
              width={60}
              height={60}
              className="size-[25px] rounded-full sm:size-[40px] lg:size-[60px]"
            />
          </div>

          {/* Company name and service */}
          <div className="mt-2 w-4/5 sm:mt-[16px] lg:w-auto">
            <div className="flex w-fit flex-col md:flex-row md:items-center md:gap-[10px]">
              <span className="font-recoletaAlt text-2xl tracking-[0.036em] md:text-3xl">
                Google Pvt Ltd.
              </span>
              <div className="flex items-center gap-[6px]">
                <Image
                  src="/assets/svg/my-brands/brand-info/sub-org.svg"
                  alt="icon"
                  width={20}
                  height={20}
                />
                <span className="font-mulish text-[#000000CC]">
                  Alphabet Inc.
                </span>
              </div>
            </div>

            <div className="mt-2 w-fit font-mulish text-[#000000CC] md:mt-0">
              Technology, Internet Services
            </div>

            {/* Headquarters */}
            <div className="mt-3 flex w-fit items-center gap-[2px] rounded-full bg-[#001B2F1A] px-4 py-2 sm:gap-2">
              <Image
                src="/assets/svg/my-brands/brand-info/headquarter.svg"
                alt="headquarter"
                width={20}
                height={20}
              />
              <span className="font-mulish text-xs text-[#00000099] sm:text-sm">
                Head Quarters:
              </span>
              <span className="font-mulish text-xs text-[#000000] sm:-ml-1 sm:text-sm">
                Bengaluru, India
              </span>
            </div>

            {/* About */}

            <div className="mt-4 font-mulish font-semibold text-[#000000CC] lg:w-[404px]">
              Google is a multinational technology company specializing in
              Internet-related services and products.
            </div>

            {/* Social Links */}
            <div className="mt-4 flex w-fit items-center gap-2 sm:gap-4">
              <Link
                href="/my-brands/google-pvt-ltd"
                className="flex size-[40px] items-center justify-center rounded-full bg-[#FFE58E]"
              >
                <FaFacebookF size={20} />
              </Link>

              <Link
                href="/my-brands/google-pvt-ltd"
                className="flex size-[40px] items-center justify-center rounded-full bg-[#FFE58E]"
              >
                <FaLinkedinIn size={20} />
              </Link>

              <Link
                href="/my-brands/google-pvt-ltd"
                className="flex size-[40px] items-center justify-center rounded-full bg-[#FFE58E]"
              >
                <FaTwitter size={20} />
              </Link>

              <Link
                href="/my-brands/google-pvt-ltd"
                className="flex size-[40px] items-center justify-center rounded-full bg-[#FFE58E]"
              >
                <FiGlobe size={20} />
              </Link>

              <Link
                href="/my-brands/google-pvt-ltd"
                className="flex size-[40px] items-center justify-center rounded-full bg-[#FFE58E]"
              >
                <FaEnvelope size={20} />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
