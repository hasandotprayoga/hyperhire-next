import DropdownMenu from "../molecules/DropdownMenu";

const menuItems = [
  { label: "채용", href: "#", fontClass: "font-pretendard" },
  { label: "해외 개발자 원격 채용", href: "#", fontClass: "font-inter" },
  {
    label: "외국인 원격 채용 (비개발 직군)",
    href: "#",
    fontClass: "font-inter",
  },
  { isDivider: true, label: "", href: "", fontClass: "" },
  { label: "한국어 가능 외국인 채용", href: "#", fontClass: "font-inter" },
];

const DesktopNav = () => (
  <ul className="lg:flex hidden gap-[60px] items-center text-white font-poppins text-[16px]">
    <DropdownMenu items={menuItems} label={"채용"} />
    <li>
      <a href="#">해외 개발자 활용 서비스</a>
    </li>
  </ul>
);

export default DesktopNav;
