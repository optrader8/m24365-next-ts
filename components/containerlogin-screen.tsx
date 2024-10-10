import type { NextPage } from "next";
import Component1 from "./component1";
import Buttontext from "./buttontext";

export type ContainerloginScreenType = {
  className?: string;
};

const ContainerloginScreen: NextPage<ContainerloginScreenType> = ({
  className = "",
}) => {
  return (
    <div
      className={`h-[67.5rem] w-[39.625rem] bg-white flex flex-col items-start justify-start p-[5rem] box-border gap-[13.981rem] z-[1] text-left text-[1.5rem] text-black font-body-h6-regular ${className}`}
    >
      <div className="w-[29.625rem] h-[10.038rem] flex flex-col items-start justify-start py-[0rem] px-[8.093rem] box-border gap-[2rem] text-center">
        <div className="w-[9.55rem] h-[6.913rem] flex flex-row items-start justify-start py-[0rem] pl-[3.887rem] pr-[0rem] box-border">
          <div className="h-[6.913rem] w-[5.663rem] flex flex-col items-start justify-start gap-[1.5rem]">
            <div className="w-[5.313rem] h-[5rem] flex flex-row items-start justify-start py-[0rem] pl-[0.343rem] pr-[0rem] box-border">
              <img
                className="h-[5rem] w-[4.969rem] relative object-cover"
                loading="lazy"
                alt=""
                src="/images/login/login_symbol.png"
              />
            </div>
            <div className="w-[5.663rem] h-[0.413rem] relative rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(218,_218,_218,_0.5),_rgba(218,_218,_218,_0))]" />
          </div>
        </div>
        <h2 className="m-0 w-[13.5rem] h-[1.125rem] relative text-inherit tracking-[0.02em] font-bold font-[inherit] flex items-center justify-center shrink-0">
          유지관리의 쉬운 시작
        </h2>
      </div>
      <div className="w-[29.625rem] h-[19.063rem] flex flex-col items-start justify-start gap-[2.5rem] text-[1.125rem]">
        <b className="w-[29.688rem] h-[0.813rem] relative flex items-center shrink-0">
          로그인
        </b>
        <form className="m-0 w-[29.625rem] h-[15.75rem] flex flex-col items-start justify-start gap-[1.5rem]">
          <Component1 pxRegular="아이디" />
          <Component1 pxRegular="비밀번호" />
          <Buttontext />
          <div className="w-[29.625rem] flex flex-row items-center justify-between py-2">
            <div className="text-[0.875rem] font-medium font-body-h6-regular text-black text-left">
              비밀번호를 잊어버리셨나요?
            </div>
            <div className="text-[0.875rem] font-medium font-body-h6-regular text-main-color-nomal-blue text-right">
              비밀번호 찾기
            </div>
          </div>
        </form>
      </div>
      <div className="w-[20.375rem] h-[0.438rem] flex flex-row items-start justify-start py-[0rem] pl-[9.25rem] pr-[0rem] box-border text-[0.625rem]">
        <div className="h-[0.438rem] w-[11.188rem] relative tracking-[-0.02em] leading-[0.625rem] inline-block shrink-0">{`© 2021. UNIONE I&C. All rights reserved.`}</div>
      </div>
    </div>
  );
};

export default ContainerloginScreen;
