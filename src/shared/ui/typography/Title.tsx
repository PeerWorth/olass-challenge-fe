"use client";

import styled from "@emotion/styled";

const Title = styled.p`
  font-weight: 700;
`;

const Title1 = styled(Title)`
  font-size: 36px;
  line-height: 48px;
  letter-spacing: -0.027em;
`;

const Title2 = styled(Title)`
  font-size: 28px;
  line-height: 38px;
  letter-spacing: -0.0236em;
`;

const Title3 = styled(Title)`
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.023em;
`;

export { Title1, Title2, Title3 };
