import type { NextPage } from "next";
import Typographyh4Regular from "./typographyh4-regular";
import StateuseridNomal from "./stateuserid-nomal";

export type Component1Type = {
  className?: string;
  pxRegular?: string;
};

const Component1: NextPage<Component1Type> = ({
  className = "",
  pxRegular,
}) => {
  return (
    <div
      className={`w-[29.625rem] h-[4rem] flex flex-col items-start justify-start gap-[0.625rem] ${className}`}
    >
      <Typographyh4Regular pxRegular={pxRegular} />
      <StateuseridNomal />
    </div>
  );
};

export default Component1;
