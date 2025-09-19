import { Button } from "@/shared/ui/button";

import { LANDING_SECTION_CONTENT } from "../model/constants";
import ChallengeCard from "./ChallengeCard";
import SectionLayout from "./SectionLayout";
import Title from "./Title";
import Toast from "./Toast";

const LandingPage = () => {
  return (
    <>
      <div className="pb-10">
        <div className="flex-1">
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
            />
            <SectionLayout
              title={LANDING_SECTION_CONTENT.now.title}
              description={LANDING_SECTION_CONTENT.now.description}
            />
          </div>
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
