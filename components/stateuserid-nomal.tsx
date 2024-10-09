import type { NextPage } from "next";

export type StateuseridNomalType = {
  className?: string;
};

const StateuseridNomal: NextPage<StateuseridNomalType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[29.625rem] h-[2.5rem] flex flex-row items-start justify-start py-[0.937rem] px-[0.875rem] box-border relative ${className}`}
    >
      <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-3xs bg-white border-grey-scale-dark-grey border-[1px] border-solid box-border" />
      <input
        className="w-[7.563rem] [border:none] [outline:none] font-body-h6-regular text-[0.875rem] bg-[transparent] h-[0.625rem] relative leading-[0.875rem] text-grey-scale-dark-grey text-left flex items-center overflow-hidden text-ellipsis whitespace-nowrap z-[1]"
        placeholder="아이디를 입력하세요"
        type="text"
      />
    </div>
  );
};

export default StateuseridNomal;
