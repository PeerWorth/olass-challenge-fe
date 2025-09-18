import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Body1 } from "@/shared/ui/typography/Body";
import { Title2 } from "@/shared/ui/typography/Title";

import Toast from "./Toast";

const LandingPage = () => {
  return (
    <>
      <div className="h-full" style={{ border: "1px solid red" }}>
        <div className="flex-1">
          <Toast />

          <div className="mt-[33px] flex flex-col gap-y-1">
            <Title2 className="text-center whitespace-pre-line">{`지금, 돈 아끼는 챌린지\n시작하기!`}</Title2>
            <Body1 className="bg-linear-to-r from-[#4287FF] to-[#4CA0AA] bg-clip-text text-center font-semibold text-transparent">
              이미 12,338명이 절약 중
            </Body1>
          </div>
        </div>
        {/* <div className="sticky bottom-5 px-5">
          <Button
            variant="solid"
            size="fullWidth"
            color="primary"
            text="로그인하고 절약 챌린지 참여하기"
            rounded
          />
        </div> */}
      </div>
    </>
  );
};

export default LandingPage;
