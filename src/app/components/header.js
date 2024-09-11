"use client";

import Image from "next/image";
import CaretDownIcon from "@/app/icons/CaretDownIcon.svg";
import HamburgerIcon from "@/app/icons/HamburgerIcon.svg";
import CloseIcon from "@/app/icons/CloseIcon.svg";
import { useState } from "react";

export default function Header() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  return (
    <>
      <header className="container px-4 flex items-center justify-between py-4 -mb-[68px]">
        <Image
          src="/images/logo/light.png"
          alt="hyperhire logo"
          width={114}
          height={21}
          priority
        />

        <ul className="lg:flex hidden gap-[60px] items-center text-white font-poppins  text-[16px]">
          <li className="relative inline-block group">
            <label className="flex items-center gap-2 peer cursor-pointer">
              <input type="checkbox" className="hidden" />
              채용
              <CaretDownIcon />
            </label>

            <div className="absolute text-[14px] left-0 mt-2 w-[240px] bg-white text-color-4 rounded-lg shadow-lg peer-has-[:checked]:flex hidden flex-col py-2">
              <a href="#" className="block py-[10px] px-4 font-pretendard">
                채용
              </a>
              <a href="#" className="block py-[10px] px-4 font-inter">
                해외 개발자 원격 채용
              </a>
              <a href="#" className="block py-[10px] px-4 font-inter">
                외국인 원격 채용 (비개발 직군)
              </a>
              <hr className="py-0" />
              <a href="#" className="block py-[10px] px-4 font-inter">
                한국어 가능 외국인 채용
              </a>
            </div>
          </li>
          <li>
            <a href="#">해외 개발자 활용 서비스</a>
          </li>
        </ul>
        <button className="lg:block hidden bg-white text-color-ff font-poppins text-[16px] py-[6px] px-6 rounded-lg">
          문의하기
        </button>

        <button className="lg:hidden" onClick={() => setIsOpenDrawer(true)}>
          <HamburgerIcon className="text-white text-[24px]" />
        </button>
      </header>

      <aside
        className={`fixed z-10 font-poppins top-0 right-0 w-72 h-full bg-white transition-transform transform ${
          isOpenDrawer ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => {
            setIsOpenDrawer(false);
          }}
          className="absolute top-4 right-4 text-xl"
        >
          <CloseIcon />
        </button>
        <div className="p-6 mt-6">
          <div className="text-[16px] font-inter flex flex-col gap-4">
            <div className="font-poppins">채용</div>
            <div className="font-normal ml-4">해외 개발자 원격 채용</div>
            <div className="ml-4">외국인 원격 채용 (비개발 직군)</div>
            <div className="ml-4">채용</div>
            <hr />
            <div className="font-poppins">해외 개발자 활용 서비스 </div>
          </div>

          <button className="bg-gradient w-full text-white font-poppins text-[16px] py-[6px] px-6 rounded-lg mt-6">
            문의하기
          </button>
        </div>
      </aside>
    </>
  );
}
