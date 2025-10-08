import Image from "next/image";

import { LANDING_SECTION_CONTENT } from "../model/constants";
import ChallengeCard from "./ChallengeCard";
import LoginButton from "./LoginButton";
import SectionLayout from "./SectionLayout";
import Title from "./Title";
import Toast from "./Toast";
import ImageMobile from "./images/mobile-image.png";
import ImageSavedMoney from "./images/saved-money.png";

const LandingPage = () => {
  return (
    <>
      <div className="pb-12">
        <Toast contentType="money" nickname="올*님" amount={50000} />

        <Title />
        <div className="flex flex-col gap-y-5">
          <SectionLayout
            title={LANDING_SECTION_CONTENT.others.title}
            description={LANDING_SECTION_CONTENT.others.description}
          >
            <div className="scrollbar-hide flex gap-x-3 overflow-x-scroll px-4">
              <ChallengeCard />
              <ChallengeCard />
              <ChallengeCard />
            </div>
          </SectionLayout>

          <SectionLayout
            title={LANDING_SECTION_CONTENT.together.title}
            description={LANDING_SECTION_CONTENT.together.description}
          >
            <div className="bg-coolNeutral25 mx-4 rounded-3xl pt-4">
              <Image
                className="mx-auto"
                src={ImageMobile.src}
                alt="mobileImg"
                width={222}
                height={258}
              />
            </div>
          </SectionLayout>

          <SectionLayout title={LANDING_SECTION_CONTENT.now.title}>
            <div className="mx-4 flex justify-center rounded-3xl bg-[#E7F3FF] py-[18px]">
              <Image
                src={ImageSavedMoney.src}
                alt="savedMoneyImg"
                width={136}
                height={217}
              />
            </div>
          </SectionLayout>
        </div>
      </div>
      <div className="sticky bottom-5 px-5">
        <LoginButton />
      </div>
    </>
  );
};

export default LandingPage;
