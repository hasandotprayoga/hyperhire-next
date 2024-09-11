import Image from "next/image";

export default function Avatar({ src }) {
  return (
    <>
      <Image src={src} width={120} height={120} className="rounded-full" />
    </>
  );
}
