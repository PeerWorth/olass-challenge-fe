"use client";

import styled from "@emotion/styled";

const Body = styled.p`
  font-weight: 700;
`;

const Body1 = styled(Body)`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.0057em;
`;

const Body2 = styled(Body)`
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.0096em;
`;

export { Body1, Body2 };
