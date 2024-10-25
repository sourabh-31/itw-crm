import Signin from "@/components/sign-in/Signin";

export default function Page() {
  return (
    <section
      className="noiseBgPrimary relative flex min-h-screen flex-col items-center justify-center"
      style={{
        background:
          "linear-gradient(135deg, rgba(0,1,3,1) 0%, rgba(3,18,77,1) 100%);",
      }}
    >
      <div className="relative">
        <h1 className="font-recoletaAlt text-[4rem] text-white">itw</h1>
        <span className="absolute -right-3 top-5 font-mulish text-[10px] font-bold text-white">
          TM
        </span>
      </div>

      <p className="w-80 text-center font-mulish font-semibold text-white sm:w-[34rem]">
        To make &apos;ITW&apos; synonymous to the idea in the class organizaion
        in promoting, encouraging investments, and laying the foundation to
        &apos;Sports, Entertainment & Media&apos; as a leading industry that
        contributes to employment generation, and making it a preferred choice
        of profession
      </p>

      <Signin />

      {/* Footer text */}
      <div className="absolute bottom-10 flex flex-col items-center gap-[2px] font-mulish text-sm font-bold text-[#ffffffcc]">
        <div>Login with the ITW Account via Google.</div>
        <div>
          Any trouble?{" "}
          <span className="cursor-pointer text-[#08f05b] underline">
            CONTACT US
          </span>
        </div>
        <div className="cursor-pointer text-[#008cf2] underline">
          Privacy Policy
        </div>
      </div>
    </section>
  );
}
