import ArrowRightIcon from "@/app/icons/ArrowRightIcon.svg";

export default function ServiceCard({ Icon, title }) {
  return (
    <>
      <div className="bg-white p-4 rounded-2xl text-[14px] flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <div className="bg-color-f6 w-10 h-10 rounded-lg flex items-center justify-center">
            <Icon />
          </div>
          <div className="text-color-1">{title}</div>
        </div>
        <a href="#" className="text-color-f flex items-center gap-1">
          바로가기
          <ArrowRightIcon />
        </a>
      </div>
    </>
  );
}
