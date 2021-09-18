import React from "react";
import styled from "styled-components";

function Error() {
  return (
    <Wrapper>
      <div>
        <h1>404</h1>
        <h3>The page you're looking for doesn't exist</h3>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  height: 100vh;
  div {
    text-align: center;
    padding: 3rem;
    h1 {
      font-size: 5rem;
      margin-bottom: 2rem;
    }
    h3 {
      font-size: 3rem;
    }
  }
`;

export default Error;
