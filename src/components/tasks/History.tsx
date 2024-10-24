import Image from "next/image";

export default function History() {
  return (
    <div className="sidebar mt-5 max-h-[21rem] space-y-4 overflow-y-auto">
      {/* History 1 */}

      <div className="flex items-center gap-3 border-b border-gray-dark pb-6">
        <div className="rounded-full border border-[#FFFFFF1A]">
          <Image
            src="/assets/png/member2.png"
            alt="profile"
            width={36}
            height={36}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-mulish font-extrabold text-[#FFFFFFE5]">
            Anbarsan Anbu edited the task
          </span>
          <span className="font-mulish text-sm font-medium text-[#FFFFFF80]">
            10 days ago
          </span>
        </div>
      </div>

      {/* History 2 */}

      <div className="flex items-center gap-3 border-b border-gray-dark pb-6">
        <div className="rounded-full border border-[#FFFFFF1A]">
          <Image
            src="/assets/png/member2.png"
            alt="profile"
            width={36}
            height={36}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-mulish font-extrabold text-[#FFFFFFE5]">
            Anbarsan Anbu edited the task
          </span>
          <span className="font-mulish text-sm font-medium text-[#FFFFFF80]">
            10 days ago
          </span>
        </div>
      </div>
    </div>
  );
}
