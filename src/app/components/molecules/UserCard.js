import Avatar from "../atoms/Avatar";
import Flag from "../atoms/Flag";

export default function UserCard({ avatar, name, experience, details }) {
  return (
    <>
      <div className="bg-white rounded-xl p-9 shadow-user flex flex-col gap-9 max-w-[292px]">
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <Avatar src={avatar} />

            <Flag />
          </div>

          <div>
            <div className="text-[24px] text-color-2f">{name}</div>
            <div className="text-[16px] text-color-ff">{experience}</div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-1 font-[16px] text-color-f *:px-3 *:py-1 *:border *:border-color-cf *:rounded-lg">
          {details.map((detail, index) => (
            <div key={index}>{detail}</div>
          ))}
        </div>
      </div>
    </>
  );
}
