import { Body1 } from "@/shared/ui/typography/Body";
import { Heading2 } from "@/shared/ui/typography/Heading";

import { SectionLayoutProps } from "../model/type";

const SectionLayout = (props: SectionLayoutProps) => {
  const { title, description, children } = props;

  return (
    <div className="flex flex-col gap-y-6 pt-8">
      <div className="flex flex-col gap-y-2 px-6">
        <Heading2 className="whitespace-pre-line">{title}</Heading2>
        <Body1 className="text-coolNeutral600 font-medium whitespace-pre-line">
          {description}
        </Body1>
      </div>
      {children}
    </div>
  );
};

export default SectionLayout;
