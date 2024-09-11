import CodeIcon from "@/app/icons/CodeIcon.svg";
import KorIcon from "@/app/icons/KorIcon.svg";
import UserIcon from "@/app/icons/UserIcon.svg";
import SettingIcon from "@/app/icons/SettingIcon.svg";
import ServiceCard from "../atoms/ServiceCard";

const serviceItems = [
  {
    icon: CodeIcon,
    title: "해외 개발자 원격 채용",
  },
  {
    icon: UserIcon,
    title: "외국인 원격 채용 (비개발)",
  },
  {
    icon: KorIcon,
    title: "한국어 가능 외국인 채용",
  },
  {
    icon: SettingIcon,
    title: "해외 개발자 활용 서비스",
  },
];

export default function ServiceDetails() {
  return (
    <>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-[15px] lg:col-span-8 ">
        {serviceItems.map((item) => (
          <ServiceCard Icon={item.icon} title={item.title} />
        ))}
      </div>
    </>
  );
}
