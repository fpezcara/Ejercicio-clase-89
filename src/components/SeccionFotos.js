import React from "react";
import styled from "styled-components";

const Foto = styled.div`
  display: flex;
  justify-content: center;
  width: 230px;
  height: 250px;
  margin: 10px;
  background-cover: cover;
  img {
    width: 100%;
    height: auto;
    
`;

const SeccionFotos = ({ img }) => {
  return (
    <Foto>
      <img src={img} alt="foto random" />
    </Foto>
  );
};

export default SeccionFotos;
