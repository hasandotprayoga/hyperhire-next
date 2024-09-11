import HamburgerIcon from "@/app/icons/HamburgerIcon.svg";
import IconButton from "../atoms/ButtonIcon";

const DrawerButton = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    Icon={HamburgerIcon}
    className="lg:hidden text-white text-[24px]"
  />
);

export default DrawerButton;
