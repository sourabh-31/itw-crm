import { useModal } from "../shared/Modal";

export default function DeletePerson() {
  const { close } = useModal();

  return (
    <div
      className="w-[520px] rounded-xl bg-[#2D3036] p-6"
      style={{ boxShadow: "0px 0px 72px 0px #00000024" }}
    >
      <div className="text-center font-recoletaAlt text-xl text-white">
        Are you sure?
      </div>
      <div className="mt-[10px] text-center font-mulish text-white">
        Do you want to delete <strong>‘Aravind Krishnan’</strong>, this process
        is irreversible. All direct reports and subordinates, if any, will be
        moved one level up.
      </div>

      <div className="mb-3 mt-6 flex items-center justify-center gap-5">
        <button
          className="h-[50px] w-[200px] rounded-full border border-[#FFFFFF66] bg-[#FFFFFF] font-mulish font-bold tracking-[0.036em] text-[#383838]"
          type="button"
          onClick={() => close()}
        >
          CANCEL
        </button>
        <button
          className="h-[50px] w-[200px] rounded-full bg-[#EE7360] font-mulish font-bold tracking-[0.036em] text-[#000000]"
          type="button"
        >
          DELETE
        </button>
      </div>
    </div>
  );
}
