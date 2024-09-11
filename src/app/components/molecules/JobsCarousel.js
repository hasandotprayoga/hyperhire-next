import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import JobCard from "../atoms/JobCard";

import MarketingIcon from "@/app/icons/MarketingIcon.svg";
import ImageIcon from "@/app/icons/ImageIcon.svg";
import BoxIcon from "@/app/icons/BoxIcon.svg";
import TargetIcon from "@/app/icons/TargetIcon.svg";
import CallIcon from "@/app/icons/CallIcon.svg";

const jobItems = [
  {
    icon: MarketingIcon,
    title: "해외 마케팅",
  },
  {
    icon: ImageIcon,
    title: "퍼블리셔",
  },
  {
    icon: BoxIcon,
    title: "캐드원(제도사)",
  },
  {
    icon: TargetIcon,
    title: "해외 세일즈",
  },
  {
    icon: CallIcon,
    title: "해외 CS",
  },
  {
    icon: MarketingIcon,
    title: "해외 마케팅",
  },
  {
    icon: ImageIcon,
    title: "퍼블리셔",
  },
];

export default function JobCarousel() {
  return (
    <>
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
        {jobItems.map((item, index) => (
          <SwiperSlide key={index}>
            <JobCard Icon={item.icon} title={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
