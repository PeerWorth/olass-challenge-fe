import { TestImage } from "@/shared/assets/images";
import Certification from "@/shared/ui/certification/Certification";
import { Body2 } from "@/shared/ui/typography/Body";
import { Headline1 } from "@/shared/ui/typography/Headline";

import IconMoney from "./icons/money.svg";
import IconPeople from "./icons/people.svg";

const ChallengeCard = () => {
  return (
    <div className="bg-coolNeutral25 flex flex-shrink-0 flex-col rounded-3xl p-5">
      <Headline1 className="text-coolNeutral600">
        안 쓰는 물건 당근에 올리기
      </Headline1>
      <div className="mt-2 flex flex-col gap-y-0.5">
        <div className="flex flex-row items-center gap-x-1">
          <IconMoney />
          <Body2 className="font-medium text-[#DB9D00]">
            평균 11,000원 절약
          </Body2>
        </div>
        <div className="flex flex-row items-center gap-x-1">
          <IconPeople />
          <Body2 className="text-primary500 font-medium">89명 참여 중</Body2>
        </div>
        <div className="mt-4 flex flex-row gap-x-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <Certification
              key={index}
              imageUrl={TestImage.src}
              className="rounded-2xl border"
              imageWidth={81}
              imageHeight={96}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
