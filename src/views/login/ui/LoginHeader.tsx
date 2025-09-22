import Image from "next/image";

import { Body1 } from "@/shared/ui/typography/Body";
import { Title3 } from "@/shared/ui/typography/Title";

import ImageDart from "../ui/images/dart-image.png";

const DART_IMAGE_SIZE = 182;

const LoginHeader = () => {
  return (
    <div className="flex flex-col gap-x-4">
      <div className="flex flex-col gap-x-1">
        <Title3 className="text-center">로그인</Title3>
        <Body1 className="text-coolNeutral500 text-center font-medium">
          올라스 절약 챌린지에 참여하세요!
        </Body1>
      </div>
      <Image
        className="mx-auto"
        src={ImageDart.src}
        alt="dart"
        width={DART_IMAGE_SIZE}
        height={DART_IMAGE_SIZE}
      />
    </div>
  );
};

export default LoginHeader;
