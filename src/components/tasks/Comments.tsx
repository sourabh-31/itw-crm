import Image from "next/image";

import { useDeleteComment, useTaskComments } from "@/hooks/useTasks";
import { timeAgo } from "@/lib/time.utils";
import { useTaskStore } from "@/store/useTaskStore";

import { Menu } from "../shared/Menu";
import Spinner from "../shared/Spinner";

export default function Comments() {
  const { taskId } = useTaskStore();
  const page = 1;
  const size = 5;

  const {
    data: commentData,
    isFetching,
    isError,
  } = useTaskComments(taskId || 0, page, size);
  const { mutate: deleteComment } = useDeleteComment();

  const handleDeleteComment = (commentId: number) => {
    if (commentId) {
      deleteComment(commentId);
    }
  };

  if (isFetching) {
    return (
      <div className="mt-12">
        <Spinner />
      </div>
    );
  }

  if (isError || !commentData?.comments.length) {
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

  return (
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
                  {timeAgo(data.createdAt)}
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
  );
}
