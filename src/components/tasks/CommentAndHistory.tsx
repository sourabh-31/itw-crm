import { useState } from "react";

import Comments from "./Comments";
import History from "./History";

export default function CommentAndHistory() {
  const [activeTab, setActiveTab] = useState("comments");

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      {/* Switch buttons */}

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

      {/* Render comment and history page based on state */}

      {activeTab === "comments" ? <Comments /> : <History />}
    </div>
  );
}
