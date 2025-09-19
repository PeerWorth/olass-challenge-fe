"use client";

import Image from "next/image";

import { Button } from "@/shared/ui/button";

import { LANDING_SECTION_CONTENT } from "../model/constants";
import ChallengeCard from "./ChallengeCard";
import SectionLayout from "./SectionLayout";
import Title from "./Title";
import Toast from "./Toast";
import ImageMobile from "./images/mobile-image.png";
import ImageSavedMoney from "./images/saved-money.png";

const LandingPage = () => {
  return (
    <>
      <div className="flex-1 pb-12">
        <Toast />
        <Title />
        <div className="flex flex-col gap-y-5">
          <SectionLayout
            title={LANDING_SECTION_CONTENT.others.title}
            description={LANDING_SECTION_CONTENT.others.description}
            content={
              <div className="scrollbar-hide flex gap-x-3 overflow-x-scroll px-4">
                <ChallengeCard />
                <ChallengeCard />
                <ChallengeCard />
              </div>
            }
          />
          <SectionLayout
            title={LANDING_SECTION_CONTENT.together.title}
            description={LANDING_SECTION_CONTENT.together.description}
            content={
              <div className="bg-coolNeutral25 mx-4 rounded-3xl">
                <Image
                  className="mx-auto"
                  src={ImageMobile.src}
                  alt="mobileImg"
                  width={343}
                  height={258}
                />
              </div>
            }
          />
          <SectionLayout
            title={LANDING_SECTION_CONTENT.now.title}
            description={LANDING_SECTION_CONTENT.now.description}
            content={
              <div className="mx-4 flex justify-center rounded-3xl bg-[#E7F3FF] py-[18px]">
                <Image
                  src={ImageSavedMoney.src}
                  alt="savedMoneyImg"
                  width={136}
                  height={217}
                />
              </div>
            }
          />
        </div>
      </div>
      <div className="sticky bottom-5 px-5">
        <Button
          variant="solid"
          size="fullWidth"
          color="primary"
          text="로그인하고 절약 챌린지 참여하기"
          rounded
        />
      </div>
    </>
  );
};

export default LandingPage;
