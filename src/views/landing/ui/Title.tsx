import { Body1 } from "@/shared/ui/typography/Body";
import { Title2 } from "@/shared/ui/typography/Title";

const Title = () => {
  return (
    <div className="mt-[33px] flex flex-col gap-y-1">
      <div>
        <Title2 className="text-center whitespace-pre-line">
          {"지금, 돈 아끼는 챌린지\n시작하기!"}
        </Title2>
        <Body1 className="bg-linear-to-r from-[#4287FF] to-[#4CA0AA] bg-clip-text text-center font-semibold text-transparent">
          이미 12,338명이 절약 중
        </Body1>
      </div>
      <div className="from-common100 h-[260px] bg-linear-to-b to-[#E7FFFF]"></div>
    </div>
  );
};

export default Title;
