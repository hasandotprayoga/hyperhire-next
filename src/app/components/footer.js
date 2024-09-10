import Image from "next/image";
import ArrowRightIcon from "@/app/icons/ArrowRightIcon.svg";
import CodeIcon from "@/app/icons/CodeIcon.svg";
import KorIcon from "@/app/icons/KorIcon.svg";
import UserIcon from "@/app/icons/UserIcon.svg";
import SettingIcon from "@/app/icons/SettingIcon.svg";

export default function Footer() {
  return (
    <footer className="py-[80px]  font-poppins bg-color-fb">
      <div className="container flex flex-col gap-12 px-4">
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-[18px]">
          <div className="lg:col-span-4">
            <Image
              src="/images/logo/dark.png"
              alt="hyperhire logo"
              width={187}
              height={34}
              priority
              className="mb-[16px]"
            />
            <div className=" mb-[18px] text-[14px] text-color-1">
              우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
            </div>
            <div className="flex flex-col gap-2 text-[13px] text-color-f">
              <div>010-0000-0000</div>
              <div>aaaaa@naver.com</div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-[15px] lg:col-span-8 *:bg-white *:p-4 *:rounded-2xl *:text-[14px] *:flex *:flex-col *:gap-4">
            <div>
              <div className="flex flex-col gap-3">
                <div className="bg-color-f6 w-10 h-10 rounded-lg flex items-center justify-center">
                  <CodeIcon />
                </div>
                <div className="text-color-1">해외 개발자 원격 채용</div>
              </div>
              <a href="#" className="text-color-f flex items-center gap-1">
                바로가기
                <ArrowRightIcon />
              </a>
            </div>
            <div>
              <div className="flex flex-col gap-3">
                <div className="bg-color-f6 w-10 h-10 rounded-lg flex items-center justify-center">
                  <UserIcon />
                </div>

                <div className="text-color-1">외국인 원격 채용 (비개발)</div>
              </div>
              <a href="#" className="text-color-f flex items-center gap-1">
                바로가기
                <ArrowRightIcon />
              </a>
            </div>
            <div>
              <div className="flex flex-col gap-3">
                <div className="bg-color-f6 w-10 h-10 rounded-lg flex items-center justify-center">
                  <KorIcon />
                </div>
                <div className="text-color-1">한국어 가능 외국인 채용</div>
              </div>
              <a href="#" className="text-color-f flex items-center gap-1">
                바로가기
                <ArrowRightIcon />
              </a>
            </div>
            <div>
              <div className="flex flex-col gap-3">
                <div className="bg-color-f6 w-10 h-10 rounded-lg flex items-center justify-center">
                  <SettingIcon />
                </div>
                <div className="text-color-1">해외 개발자 활용 서비스</div>
              </div>
              <a href="#" className="text-color-f flex items-center gap-1">
                바로가기
                <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-[40px]">
          <div className="lg:col-span-4  flex gap-[40px]">
            <div>
              <div className=" text-[12px] text-color-1 mb-[10px]">상호명</div>
              <div className="text-[13px] text-color-f">하이퍼하이어</div>
              <div className="text-[13px] text-color-f mb-5">
                Hyperhire India Private Limited
              </div>
            </div>

            <div>
              <div className="text-[12px] text-color-1 mb-[10px]">대표 CEO</div>
              <div className="text-[13px] text-color-f">김주현</div>
              <div className="text-[13px] text-color-f mb-5">Juhyun Kim</div>
            </div>
          </div>
          <div className="lg:col-span-8  flex lg:flex-row flex-col gap-[40px]">
            <div>
              <div className=" text-[12px] text-color-1 mb-[10px]">
                사업자등록번호 CIN
              </div>
              <div className="text-[13px] text-color-f">427-86-01187</div>
              <div className="text-[13px] text-color-f mb-5">
                U74110DL2016PTC290812
              </div>
            </div>

            <div>
              <div className="text-[12px] text-color-1 mb-[10px]">
                주소 ADDRESS
              </div>
              <div className="text-[13px] text-color-f">
                서울특별시 강남대로 479, 지하 1층 238호
              </div>
              <div className="text-[13px] text-color-f mb-5">
                D-138, Street number 11, Jagjeet Nagar, North East Delhi, New
                Delhi, 110053 India
              </div>
            </div>
          </div>
        </div>
        <div className="text-[13px] text-color-f">
          ⓒ {new Date().getFullYear()} Hyperhire
        </div>
      </div>
    </footer>
  );
}
