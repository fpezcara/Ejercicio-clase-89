import React from "react";
import styled from "styled-components";
import SeccionFotos from "./SeccionFotos";

const FotosContainer = styled.div`
  width: 70%;
  display: flex;
  margin: 40px 300px;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  flex-basis: auto;
`;

const SeccionFotosContainer = ({ props }) => {
  return (
    <FotosContainer>
      {props.map((prop, i) => (
        <SeccionFotos key={i} img={prop.source} />
      ))}
    </FotosContainer>
  );
};

export default SeccionFotosContainer;
