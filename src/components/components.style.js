import React from "react";
import styled from "styled-components";

const UserInfoContainer = styled.article`
  width: 417px;
`;

const Title = styled.div`
  color: $col-1;
  background: white;
  width: fit-content;
  padding: 2% 4%;
  font-size: 1.3rem;
  border-radius: 0.8rem 0.8rem 0 0;
`;

export { UserInfoContainer, Title };
