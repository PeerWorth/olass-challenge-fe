import Image from "next/image";

import { DefaultUserImage } from "@/shared/assets/images";
import { cn } from "@/shared/utils";

import { Caption1 } from "../typography/Caption";
import { CertificationProps } from "./type";

const Certification = (props: CertificationProps) => {
  const {
    imageUrl,
    alt = "image",
    imageWidth = 72,
    imageHeight = 72,
    className,
  } = props;

  return (
    <div className="flex flex-col gap-y-1.5">
      <Image
        src={imageUrl}
        alt={alt}
        width={imageWidth}
        height={imageHeight}
        className={cn("rounded-[20px] object-cover", className)}
      />
      <div className="flex flex-row items-center gap-x-1">
        <Image
          src={DefaultUserImage.src}
          width={16}
          height={16}
          alt="userImage"
          className="rounded-full"
        />
        <Caption1 className="text-coolNeutral500 font-medium">
          당군당군
        </Caption1>
      </div>
    </div>
  );
};

export default Certification;
