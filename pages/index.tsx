import type { NextPage } from "next";
import LogowIcon from "../components/logow-icon";
import ContainerloginScreen from "../components/containerlogin-screen";

const Web1920px: NextPage = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-row items-start justify-between py-[0rem] pl-[10.687rem] pr-[0rem] box-border leading-[normal] tracking-[normal] gap-[1.25rem] lg:flex-wrap lg:pl-[1.25rem] lg:pr-[1.25rem] lg:pb-[1.25rem] lg:box-border">
      <img
        className="h-full w-full absolute !m-[0] top-[0rem] bottom-[0rem] left-[0rem] max-h-full object-cover"
        alt=""
        src="/background-image@2x.png"
      />
      <header className="w-[29.438rem] flex flex-col items-start justify-start pt-[6.125rem] px-[0rem] pb-[0rem] box-border max-w-full text-left text-[3.125rem] text-white font-poppins mq750:pt-[2.625rem] mq750:box-border mq1050:pt-[4rem] mq1050:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[43.181rem] mq750:gap-[21.563rem]">
          <LogowIcon />
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.875rem] shrink-0">
            <b className="relative leading-[3.75rem] z-[1]">
              <p className="m-0 tracking-[0.02em]">{`Welcome `}</p>
              <p className="m-0">
                <span className="tracking-[0.02em]">{`to `}</span>
                <span className="tracking-[-0.02em]">M24365</span>
                <span className="tracking-[0.02em]">!</span>
              </p>
            </b>
            <div className="self-stretch relative text-[1rem] tracking-[-0.02em] leading-[1rem] font-body-h6-regular overflow-hidden text-ellipsis whitespace-nowrap z-[1]">
              쉽고 정확하게 계약부터 자산까지 한번에 관리하는 모니터링 업무
              플로우
            </div>
          </div>
        </div>
      </header>
      <ContainerloginScreen />
    </div>
  );
};

export default Web1920px;
