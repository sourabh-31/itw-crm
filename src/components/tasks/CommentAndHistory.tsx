import Image from "next/image";
import { useState } from "react";

import { useDeleteComment, useTaskComments } from "@/hooks/useTasks";
import { useTaskStore } from "@/store/useTaskStore";

import { Menu } from "../shared/Menu";
import Spinner from "../shared/Spinner";

export default function CommentAndHistory() {
  const [activeTab, setActiveTab] = useState("comments");
  const { taskId } = useTaskStore();

  const {
    data: commentData,
    isFetching,
    isError,
  } = useTaskComments(taskId || 0);
  const { mutate: deleteComment } = useDeleteComment();

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
  };

  const handleDeleteComment = (commentId: number) => {
    if (commentId) {
      deleteComment(commentId);
    }
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

      {isFetching ? (
        <div className="mt-12">
          <Spinner />
        </div>
      ) : isError || !commentData?.comments.length ? (
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
      ) : (
        <div className="sidebar mt-5 max-h-[21rem] space-y-4 overflow-y-auto">
          {commentData.comments.map((data) => (
            <div
              className="flex items-start justify-between gap-3 border-b border-gray-dark pb-6"
              key={data.id}
            >
              <div className="flex items-start gap-3">
                <div className="shrink-0">
                  <Image
                    src={data.addedBy.profileImage || "assets/png/member2.png"}
                    alt="profile"
                    width={36}
                    height={36}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mulish font-extrabold text-[#FFFFFFE5]">
                      {data.addedBy.firstName} {data.addedBy.lastName}
                    </span>
                    <div className="size-[3px] rounded-full bg-[#94969C]" />
                    <span className="font-mulish text-sm font-medium text-[#FFFFFF80]">
                      10 days ago
                    </span>
                  </div>
                  <div className="mt-1 font-mulish text-[#FFFFFFCC]">
                    {data.content}
                  </div>
                </div>
              </div>

              {/* more button */}
              <Menu>
                <Menu.Trigger>
                  <button type="button">
                    <Image
                      src="/assets/svg/people-details/more-alt.svg"
                      alt="more"
                      width={20}
                      height={20}
                    />
                  </button>
                </Menu.Trigger>

                <div className="relative top-4">
                  <Menu.Items
                    position="left"
                    width="220px"
                    className="border border-[#E6E6E6] bg-white"
                  >
                    <Menu.Item
                      imgSrc="/assets/svg/my-brands/trash.svg"
                      btnName="Delete"
                      isDanger
                      onClick={() => handleDeleteComment(data.id)}
                    />
                  </Menu.Items>
                </div>
              </Menu>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
