import Image from "next/image";
import { useEffect, useRef } from "react";

import { useCommentsQuery, useDeleteComment } from "@/hooks/useTasks";
import { timeAgo } from "@/lib/time.utils";
import { useTaskStore } from "@/store/useTaskStore";

import { Menu } from "../shared/Menu";
import Spinner from "../shared/Spinner";

export default function Comments() {
  const { taskId } = useTaskStore();
  const size = 5;
  const observerTarget = useRef<HTMLDivElement>(null);

  const {
    data,
    isFetchingNextPage,
    fetchNextPage,
    isFetching,
    isError,
    hasNextPage,
  } = useCommentsQuery(taskId || 0, size);

  const { mutate: deleteComment } = useDeleteComment();

  // Manage new comments when reached at the bottom of the section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.5 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  // Delete comment
  const handleDeleteComment = (commentId: number) => {
    if (commentId) {
      deleteComment(commentId);
    }
  };

  // Page during loading state
  if (isFetching && !isFetchingNextPage) {
    return (
      <div className="mt-12">
        <Spinner />
      </div>
    );
  }

  // Page during error state
  if (isError || !data?.pages[0].comments.length) {
    return (
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
    );
  }

  // Render when data is available
  return (
    <div className="sidebar mt-5 max-h-[21rem] space-y-4 overflow-y-auto">
      {data.pages.map((page) =>
        page.comments.map((comment) => (
          // Comment

          <div
            className="flex items-start justify-between gap-3 border-b border-gray-dark pb-6"
            key={comment.id}
          >
            <div className="flex items-start gap-3">
              {/* Profile img */}

              <div className="shrink-0">
                <Image
                  src={
                    comment.addedBy.profileImage || "/assets/png/member2.png"
                  }
                  alt="profile"
                  width={36}
                  height={36}
                  className="rounded-full"
                />
              </div>

              {/* User name and comment */}

              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mulish font-extrabold text-[#FFFFFFE5]">
                    {comment.addedBy.firstName} {comment.addedBy.lastName}
                  </span>
                  <div className="size-[3px] rounded-full bg-[#94969C]" />
                  <span className="font-mulish text-sm font-medium text-[#FFFFFF80]">
                    {timeAgo(comment.createdAt)}
                  </span>
                </div>
                <div className="mt-1 font-mulish text-[#FFFFFFCC]">
                  {comment.content}
                </div>
              </div>
            </div>

            {/* Comment options */}
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
                    onClick={() => handleDeleteComment(comment.id)}
                  />
                </Menu.Items>
              </div>
            </Menu>
          </div>
        ))
      )}

      {/* Loading indicator and observer target */}
      <div ref={observerTarget} className="py-4">
        {isFetchingNextPage && (
          <div className="flex justify-center">
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
}
