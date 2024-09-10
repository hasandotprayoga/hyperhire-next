"use client";

import React, { useRef } from "react";
import Image from "next/image";
import MarketingIcon from "@/app/icons/MarketingIcon.svg";
import ImageIcon from "@/app/icons/ImageIcon.svg";
import BoxIcon from "@/app/icons/BoxIcon.svg";
import TargetIcon from "@/app/icons/TargetIcon.svg";
import CallIcon from "@/app/icons/CallIcon.svg";
import DollarIcon from "@/app/icons/DollarIcon.svg";
import ArrowDownIcon from "@/app/icons/ArrowDownIcon.svg";
import CheckBoxIcon from "@/app/icons/CheckBoxIcon.svg";
import CaretLeftIcon from "@/app/icons/CaretLeftIcon.svg";
import CaretRightIcon from "@/app/icons/CaretRightIcon.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { motion } from "framer-motion";

import { useMediaQuery } from "react-responsive";

export default function Home() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 600px)" });

  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext(); // Pindah ke slide berikutnya
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev(); // Pindah ke slide sebelumnya
    }
  };

  return (
    <>
      <main className="bg-gradient lg:pt-[132px] pt-[86px] text-white lg:pb-[108px] pb-[60px] font-poppins">
        <div className="container px-4 grid lg:grid-cols-2 gap-4">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-[18px] relative lg:text-color-96 text-color-white lg:bg-color-ef bg-color-4ff lg:py-2 py-[6px] lg:px-4 px-3 rounded-lg mb-6 w-fit">
                풀타임, 파트타임
                <ArrowDownIcon className="lg:text-color-ef text-color-4ff absolute -bottom-2 left-2" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="lg:text-[48px] text-[36px] mb-4">
                최고의 실력을 가진
                <br />
                외국인 인재를 찾고 계신가요?
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6 lg:text-[24px] text-[18px] lg:text-white/90 text-white/80">
                법률 및 인사관리 부담없이
                <br />
                1주일 이내에 원격으로 채용해보세요.
              </div>
              <div className="hidden lg:block text-[18px] underline">
                개발자가 필요하신가요?
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="lg:grid hidden grid-cols-3 gap-[48px] mt-[60px] *:flex *:flex-col *:gap-2 *:border-t *:border-white *:pt-2">
                <div>
                  <div className="font-[18px]">평균 월 120만원</div>
                  <div className="font-[16px]">
                    임금을 해당 국가를 기준으로 계산합니다.
                  </div>
                </div>
                <div>
                  <div className="font-[18px]">최대 3회 인력교체</div>
                  <div className="font-[16px]">
                    막상 채용해보니 맞지 않아도 걱정하지 마세요.
                  </div>
                </div>
                <div>
                  <div className="font-[18px]">평균 3일, 최대 10일</div>
                  <div className="font-[16px]">
                    급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }} // Elemen mulai dengan opacity 0 (tak terlihat)
            animate={{ opacity: 1 }} // Mengubah opacity menjadi 1 (terlihat)
            transition={{ duration: 0.5 }} // Durasi animasi selama 500ms
          >
            <div className="flex flex-col items-center gap-8">
              <div className="text-[18px] relative text-color-96 bg-color-ef py-2 px-4 rounded-lg inline-flex items-center gap-[10px] ">
                <DollarIcon />월 100만원
                <ArrowDownIcon className="text-color-ef absolute -bottom-2 left-1/2 transform -translate-x-1/2" />
              </div>

              <div className="relative">
                <Swiper
                  ref={swiperRef}
                  modules={[EffectCards, Autoplay]}
                  effect="cards"
                  grabCursor={true}
                  centeredSlides={true}
                  initialSlide={1}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  slidesPerView="auto"
                  cardsEffect={{
                    perSlideOffset: isSmallScreen ? 10 : 22,
                    perSlideRotate: 0,
                    rotate: false,
                    slideShadows: false,
                  }}
                  style={{
                    marginLeft: isSmallScreen ? 20 : 150,
                    maxWidth: isSmallScreen ? 300 : 450,
                  }}
                >
                  {Array.from({ length: 3 }).map((_, i) => (
                    <SwiperSlide key={i}>
                      <div className="bg-white rounded-xl p-9 shadow-user flex flex-col gap-9 max-w-[292px]">
                        <div className="flex flex-col items-center text-center">
                          <div className="relative">
                            <Image
                              src={"/images/avatar.png"}
                              width={120}
                              height={120}
                              className="rounded-full"
                            />

                            <Image
                              src={"/images/flag.png"}
                              width={25}
                              height={18}
                              className="rouneded-[2px] absolute bottom-0 right-2"
                            />
                          </div>

                          <div>
                            <div className="text-[24px] text-color-2f">
                              Abhishek Gupta
                            </div>
                            <div className="text-[16px] text-color-ff">
                              마케팅 · 2y+
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-1 font-[16px] text-color-f *:px-3 *:py-1 *:border *:border-color-cf *:rounded-lg">
                          <div>마케팅 콘텐츠 제작</div>
                          <div>인스타그램 관리</div>
                          <div>트위터 관리</div>
                          <div>블로그 글 작성</div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <button
                  className="absolute"
                  style={{
                    left: isSmallScreen ? "-28px" : "-8px",
                    top: "50%",
                    zIndex: 1,
                  }}
                  onClick={handlePrev}
                >
                  <CaretLeftIcon />
                </button>
                <button
                  className="absolute"
                  style={{
                    right: isSmallScreen ? "-28px" : "-8px",
                    top: "50%",
                    zIndex: 1,
                  }}
                  onClick={handleNext}
                >
                  <CaretRightIcon />
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} // Elemen mulai dengan opacity 0 (tak terlihat)
            animate={{ opacity: 1 }} // Mengubah opacity menjadi 1 (terlihat)
            transition={{ duration: 0.5 }} // Durasi animasi selama 500ms
          >
            <div className="flex lg:hidden flex-col gap-4 mt-6">
              <div className="text-[16px] flex flex-col gap-2">
                <div className="flex flex gap-2">
                  <div className="flex items-center gap-3">
                    <CheckBoxIcon />
                    한국어 능력
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckBoxIcon />
                    업무 수행 능력
                  </div>
                </div>
                <div className="flex flex gap-2">
                  <div className="flex items-center gap-3">
                    <CheckBoxIcon />
                    겸업 여부
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckBoxIcon />
                    평판 조회
                  </div>
                </div>
              </div>

              <div className="block text-[18px] underline text-color-23">
                개발자가 필요하신가요?
              </div>
            </div>
          </motion.div>
        </div>

        {!isSmallScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Swiper
              spaceBetween={10}
              slidesPerView={4.5}
              modules={[Autoplay]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              style={{ padding: "0 82px", marginTop: "60px" }}
            >
              <SwiperSlide>
                <div class="text-white font-[24px] p-4 rounded-lg bg-white/20 flex gap-6 items-center">
                  <div className="h-14 w-14 bg-white/40 rounded-lg flex items-center justify-center">
                    <MarketingIcon />
                  </div>
                  해외 마케팅
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="text-white font-[24px] p-4 rounded-lg bg-white/20 flex gap-6 items-center">
                  <div className="h-14 w-14 bg-white/40 rounded-lg flex items-center justify-center">
                    <ImageIcon />
                  </div>
                  퍼블리셔
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="text-white font-[24px] p-4 rounded-lg bg-white/20 flex gap-6 items-center">
                  <div className="h-14 w-14 bg-white/40 rounded-lg flex items-center justify-center">
                    <BoxIcon />
                  </div>
                  캐드원(제도사)
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="text-white font-[24px] p-4 rounded-lg bg-white/20 flex gap-6 items-center">
                  <div className="h-14 w-14 bg-white/40 rounded-lg flex items-center justify-center">
                    <TargetIcon />
                  </div>
                  해외 세일즈
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="text-white font-[24px] p-4 rounded-lg bg-white/20 flex gap-6 items-center">
                  <div className="h-14 w-14 bg-white/40 rounded-lg flex items-center justify-center">
                    <CallIcon />
                  </div>
                  해외 CS
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="text-white font-[24px] p-4 rounded-lg bg-white/20 flex gap-6 items-center">
                  <div className="h-14 w-14 bg-white/40 rounded-lg flex items-center justify-center">
                    <MarketingIcon />
                  </div>
                  해외 마케팅
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="text-white font-[24px] p-4 rounded-lg bg-white/20 flex gap-6 items-center">
                  <div className="h-14 w-14 bg-white/40 rounded-lg flex items-center justify-center">
                    <ImageIcon />
                  </div>
                  퍼블리셔
                </div>
              </SwiperSlide>
            </Swiper>
          </motion.div>
        )}
      </main>
    </>
  );
}
