import React from "react";
import styled from "styled-components";

function User() {
  return (
    <Wrapper>
      <div>user comp</div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  font-size: 2rem;
  color: var(--col-1);
`;
export default User;
