import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";

export default function About() {
  return (
    <div className="mt-5 px-6">
      <div
        className="flex flex-col items-center rounded-[20px] px-6 py-5"
        style={{
          background:
            "linear-gradient(127.79deg, #B1D0A5 1.75%, #95CB80 98.17%)",
        }}
      >
        <div className="relative w-fit rounded-full border-[3px] border-[#0000001A]">
          <Image
            src="/assets/png/member3.png"
            alt="people-img"
            width={70}
            height={70}
            className="rounded-full"
          />
          <div className="absolute -ml-1 -mt-2 flex h-[21px] w-[77px] items-center justify-center gap-1 rounded-[4px] bg-[#007BFF]">
            <Image
              src="/assets/svg/people-details/star.svg"
              alt="star"
              width={10}
              height={10}
            />
            <span className="font-mulish text-xs font-bold text-white">
              Frequent
            </span>
          </div>
        </div>
        <span className="mt-5 font-recoletaAlt">Aravind Anbu</span>
        <span className="mt-[2px] font-mulish text-sm text-[#00000099]">
          Business Development - Manager L1
        </span>
        <span className="mt-[2px] font-mulish text-sm text-[#00000099]">
          Bengaluru
        </span>
        <div className="mx-auto mt-[10px] w-[14px] border border-[#00000033]" />

        {/* Social links */}

        <div className="mt-5 flex w-full items-center justify-between">
          {/* Whatsapp */}
          <div className="mt-1 flex flex-col items-center gap-1">
            <div className="flex h-[36px] w-[56px] items-center justify-center rounded-full bg-[#0DC143]">
              <Image
                src="/assets/svg/people-details/whatsapp.svg"
                alt="social-icon"
                width={18}
                height={18}
              />
            </div>
            <span className="font-mulish text-xs font-bold text-[#00000099]">
              Whatsapp
            </span>
          </div>

          {/* Mail */}

          <div className="mt-1 flex flex-col items-center gap-1">
            <div className="flex h-[36px] w-[56px] items-center justify-center rounded-full bg-[#0094FF]">
              <Image
                src="/assets/svg/people-details/mail.svg"
                alt="social-icon"
                width={18}
                height={18}
              />
            </div>
            <span className="font-mulish text-xs font-bold text-[#00000099]">
              Send Mail
            </span>
          </div>

          {/* Linkedin */}

          <div className="mt-1 flex flex-col items-center gap-1">
            <div className="flex h-[36px] w-[56px] items-center justify-center rounded-full bg-[#0077B7]">
              <Image
                src="/assets/svg/people-details/linkedin.svg"
                alt="social-icon"
                width={18}
                height={18}
              />
            </div>
            <span className="font-mulish text-xs font-bold text-[#00000099]">
              Linkedin
            </span>
          </div>

          {/* Call */}

          <div className="mt-1 flex flex-col items-center gap-1">
            <div className="flex h-[36px] w-[56px] items-center justify-center rounded-full bg-[#0EAB00]">
              <Image
                src="/assets/svg/people-details/call.svg"
                alt="social-icon"
                width={18}
                height={18}
              />
            </div>
            <span className="font-mulish text-xs font-bold text-[#00000099]">
              Call
            </span>
          </div>
        </div>
      </div>

      {/* Details */}

      <div className="mt-4 rounded-xl bg-[#1B1E25]">
        <div className="flex items-center justify-between border-b border-gray-dark px-[14px] py-3">
          <div className="flex items-center gap-[6px] font-mulish text-sm text-[#FFFFFF99]">
            <Image
              src="/assets/svg/people-details/user.svg"
              alt="user"
              width={16}
              height={16}
            />
            <span>Manager</span>
          </div>
          <div className="font-recoletaAlt text-sm text-white">
            None (Self-managed)
          </div>
        </div>

        <div className="flex items-center justify-between px-[14px] py-3">
          <div className="flex items-center gap-[6px] font-mulish text-sm text-[#FFFFFF99]">
            <Image
              src="/assets/svg/people-details/office.svg"
              alt="office"
              width={16}
              height={16}
            />
            <span>Department</span>
          </div>
          <div className="font-recoletaAlt text-sm text-[#FFFFFF99]">NA</div>
        </div>
      </div>

      {/* CRM Details */}

      <div className="mt-5 font-mulish text-xs text-[#FFFFFF99]">
        Through CRM app
      </div>
      <div className="mt-2 rounded-[20px] bg-[#1B1E25]">
        <div className="flex items-center justify-between border-b border-gray-dark px-[14px] py-3">
          <div className="flex items-center gap-[6px] font-mulish text-sm text-[#FFFFFF99]">
            <div className="flex size-[37px] items-center justify-center rounded-[10px] bg-[#292D38]">
              <Image
                src="/assets/svg/people-details/call-alt.svg"
                alt="call"
                width={20}
                height={20}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-mulish text-sm text-white">
                Direct Call
              </span>
              <span className="font-mulish text-xs text-[#FFFFFF99]">
                10 days ago
              </span>
            </div>
          </div>
          <div className="font-recoletaAlt text-sm text-white">100</div>
        </div>

        <div className="flex items-center justify-between border-b border-gray-dark px-[14px] py-3">
          <div className="flex items-center gap-[6px] font-mulish text-sm text-[#FFFFFF99]">
            <div className="flex size-[37px] items-center justify-center rounded-[10px] bg-[#292D38]">
              <Image
                src="/assets/svg/people-details/mail-alt.svg"
                alt="mail"
                width={20}
                height={20}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-mulish text-sm text-white">Mail</span>
              <div className="flex items-center gap-[3px] font-mulish text-xs text-[#FFFFFF99]">
                <Image
                  src="/assets/svg/people-details/caution.svg"
                  alt="caution"
                  width={12}
                  height={12}
                />
                <span className="mt-[px]">Never</span>
              </div>
            </div>
          </div>
          <div className="font-recoletaAlt text-sm text-white">-</div>
        </div>

        <div className="flex items-center justify-between px-[14px] py-3">
          <div className="flex items-center gap-[6px] font-mulish text-sm text-[#FFFFFF99]">
            <div className="flex size-[37px] items-center justify-center rounded-[10px] bg-[#292D38]">
              <Image
                src="/assets/svg/people-details/whatsapp-alt.svg"
                alt="icon"
                width={20}
                height={20}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-mulish text-sm text-white">Whatsapp</span>
              <span className="font-mulish text-xs text-[#FFFFFF99]">
                10 days ago
              </span>
            </div>
          </div>
          <div className="font-recoletaAlt text-sm text-white">100</div>
        </div>
      </div>

      {/* Contact Details */}

      <div className="mt-5 font-mulish text-xs text-[#FFFFFF99]">
        Contact details
      </div>
      <div className="mt-2 rounded-[20px] bg-[#1B1E25]">
        <div className="flex items-center gap-2 px-[14px] py-3 font-mulish text-sm text-[#FFFFFF99]">
          <Image
            src="/assets/svg/people-details/mail.svg"
            alt="mail"
            width={16}
            height={16}
          />
          <span className="font-mulish text-sm text-white">
            aravindkrishanan@thecompanyname.com
          </span>
        </div>

        <div className="flex items-center gap-2 px-[14px] py-3 font-mulish text-sm text-[#FFFFFF99]">
          <Image
            src="/assets/svg/people-details/call.svg"
            alt="call"
            width={16}
            height={16}
          />
          <span className="font-mulish text-sm text-white">
            +91 99999 99999
          </span>
        </div>

        <div className="flex items-center gap-2 px-[14px] py-3 font-mulish text-sm text-[#FFFFFF99]">
          <Image
            src="/assets/svg/people-details/whatsapp.svg"
            alt="whatsapp"
            width={16}
            height={16}
          />
          <span className="font-mulish text-sm text-[#43B0FF] underline">
            +91 99999 99999
          </span>
        </div>

        <div className="flex items-center gap-2 px-[14px] py-3 font-mulish text-sm text-[#FFFFFF99]">
          <Image
            src="/assets/svg/people-details/linkedin.svg"
            alt="linkedin"
            width={16}
            height={16}
          />
          <span className="font-mulish text-sm text-white">
            www.linkedin.com/aravindkrishanan
          </span>
        </div>
      </div>

      {/* View history */}

      <div className="mb-6 mt-5 rounded-[20px] bg-[#1B1E25]">
        <div className="flex items-center justify-between px-[14px] py-5">
          <div className="flex items-center gap-[10px] font-mulish text-sm text-[#FFFFFF99]">
            <Image
              src="/assets/svg/people-details/clock.svg"
              alt="call"
              width={16}
              height={16}
            />
            <span className="font-mulish text-sm text-white">View history</span>
          </div>
          <BiChevronRight size={16} color="white" />
        </div>
      </div>
    </div>
  );
}
