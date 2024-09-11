import Image from "next/image";

export default function Flag() {
  return (
    <>
      <Image
        src={"/images/flag.png"}
        width={25}
        height={18}
        className="rouneded-[2px] absolute bottom-0 right-2"
      />
    </>
  );
}
