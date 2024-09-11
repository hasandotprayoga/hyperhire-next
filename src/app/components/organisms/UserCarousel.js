import Image from "next/image";
import React, { useRef } from "react";

import CaretLeftIcon from "@/app/icons/CaretLeftIcon.svg";
import CaretRightIcon from "@/app/icons/CaretRightIcon.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";

import { useMediaQuery } from "react-responsive";
import UserCard from "../molecules/UserCard";

export default function UserCarousel() {
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
              <UserCard
                key={i}
                avatar={"/images/avatar.png"}
                name={"Abhishek Gupta"}
                experience={"마케팅 · 2y+"}
                details={[
                  "마케팅 콘텐츠 제작",
                  "인스타그램 관리",
                  "트위터 관리",
                  "블로그 글 작성",
                ]}
              />
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
    </>
  );
}
