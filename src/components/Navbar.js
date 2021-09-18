import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <Wrapper>
      <div>navbar comp</div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  font-size: 2rem;
  color: var(--col-1);
`;

export default Navbar;
