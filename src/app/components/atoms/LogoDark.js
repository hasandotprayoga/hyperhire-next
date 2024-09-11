import Image from "next/image";

const LogoDark = () => (
  <Image
    src="/images/logo/dark.png"
    alt="hyperhire logo"
    width={187}
    height={34}
    priority
    className="mb-[16px]"
  />
);

export default LogoDark;
