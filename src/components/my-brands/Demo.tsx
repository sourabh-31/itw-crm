"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

import { getDeviceFingerprint } from "@/lib/utils";

export default function Demo() {
  const [isVisible, setIsVisible] = useState(true);
  const [deviceFingerprint, setDeviceFingerprint] = useState<null | string>(
    null
  );
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchDeviceFingerprint = async () => {
      const fingerprint = await getDeviceFingerprint();
      setDeviceFingerprint(fingerprint);

      const isSubmitted = localStorage.getItem(`form_${fingerprint}_submitted`);
      if (isSubmitted) {
        setIsVisible(false);
      }

      setLoading(false);
    };

    fetchDeviceFingerprint();
  }, []);

  const handleSubmit = () => {
    if (deviceFingerprint) {
      localStorage.setItem(`form_${deviceFingerprint}_submitted`, "true");
      setIsVisible(false);
    }
  };

  const handleNavigate = () => {
    router.push("/my-brands/google-pvt-ltd/org-chart");
    if (deviceFingerprint) {
      localStorage.setItem(`form_${deviceFingerprint}_submitted`, "true");
      setIsVisible(false);
    }
  };

  if (loading) return null;

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-800/50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto mt-20 max-h-[90vh] w-full max-w-[826px] overflow-y-auto rounded-[30px] bg-white px-4 py-6 sm:px-6 lg:px-8">
        <div className="relative mx-auto h-auto max-w-full rounded-[20px] bg-[#E6E6E6] p-4 sm:h-[383px] sm:w-[776px]">
          <Image
            src="/assets/png/my-brands/chart.png"
            alt="org-chart"
            width={335}
            height={335}
            className="mx-auto"
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="absolute right-4 top-4"
          >
            <IoClose color="#7D7D7D" size={24} />
          </button>
        </div>

        {/* Demo heading */}
        <div className="mt-9 flex items-center justify-center">
          <div className="text-center font-recoletaAlt text-xl sm:text-lg md:text-xl lg:text-2xl">
            Understand your brand&apos;s hierarchy better!
          </div>
          <div
            className="relative -top-2 flex flex-col items-center rounded-2xl bg-[#D95261] px-4 py-2 sm:px-5 sm:py-[10px]"
            style={{ transform: "rotate(-8.16deg)" }}
          >
            <span className="font-recoletaAlt text-xs text-white sm:text-base">
              now with
            </span>
            <span className="-mt-1 font-recoletaAlt text-sm text-white lg:text-xl">
              Organization chart
            </span>
            <span
              className="absolute left-[5px] top-3 text-lg sm:text-xl"
              style={{ transform: "rotate(8.16deg)" }}
            >
              😎
            </span>
          </div>
        </div>

        <div className="mx-auto mt-2 w-full max-w-[675px] text-center font-mulish text-xs text-[#00000099] sm:text-sm lg:text-base">
          Let&apos;s start building your brand’s organizational chart. This will
          help you, other brand owners of this brand, your team owner, project
          owner, and management understand the brand’s hierarchy. With this
          understanding, you can identify the best point of contact (POC) to
          sell the inventory effectively.
        </div>

        <div className="mx-auto mt-7 flex w-full max-w-[90%] gap-4 font-mulish text-xs font-bold sm:max-w-[65%] sm:text-sm">
          <button
            type="button"
            onClick={handleSubmit}
            className="w-1/2 rounded-full bg-black py-[8px] text-white sm:py-[10px]"
          >
            WATCH DEMO
          </button>
          <button
            type="button"
            onClick={handleNavigate}
            className="w-1/2 rounded-full bg-[#0094FF] py-[8px] text-center text-white sm:py-[10px]"
          >
            LET’S DO NOW!
          </button>
        </div>
      </div>
    </div>
  );
}
