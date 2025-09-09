"use client";

import styled from "@emotion/styled";

const Headline = styled.p`
  font-weight: 700;
`;

const Headline1 = styled(Headline)`
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.0002em;
`;

const Headline2 = styled(Headline)`
  font-size: 17px;
  line-height: 24px;
`;

export { Headline1, Headline2 };
