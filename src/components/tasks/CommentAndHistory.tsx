import Image from "next/image";
import { useState } from "react";

export default function CommentAndHistory() {
  const [activeTab, setActiveTab] = useState("comments");

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div className="flex h-[34px] w-[217px] items-center rounded-full bg-[#0E0E0E] font-mulish text-white">
        <button
          type="button"
          className={`h-[34px] w-[109px] rounded-full text-sm font-medium transition-colors ${
            activeTab === "comments"
              ? "bg-[#0094FF] font-bold"
              : "bg-[#0E0E0E] font-normal"
          }`}
          onClick={() => handleTabChange("comments")}
        >
          Comments
        </button>

        <button
          type="button"
          className={`h-[34px] w-[109px] rounded-full text-sm font-medium transition-colors ${
            activeTab === "history"
              ? "bg-[#0094FF] font-bold"
              : "bg-[#0E0E0E] font-normal"
          }`}
          onClick={() => handleTabChange("history")}
        >
          History
        </button>
      </div>

      <div className="mt-8 flex flex-col items-center">
        <Image
          src="/assets/png/empty.png"
          alt="empty-img"
          width={193}
          height={160}
        />
        <h3 className="font-recoletaAlt text-xl text-white">
          No comments yet!
        </h3>
      </div>
    </div>
  );
}
