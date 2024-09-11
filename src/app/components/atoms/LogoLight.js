import Image from "next/image";

const LogoLight = () => (
  <Image
    src="/images/logo/light.png"
    alt="hyperhire logo"
    width={114}
    height={21}
    priority
  />
);

export default LogoLight;
