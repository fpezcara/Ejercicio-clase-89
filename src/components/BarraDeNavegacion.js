import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  margin: 20px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const Title = styled.div`
  width: 30%;
  height: auto;
  display: flex;
  justify-content: center;  
`;

const SearchContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;  
      `;

const SearchInput = styled.input`
  width: 200px;
  padding: 4px;
  text-align: center;
  border-radius: 2px;
  border: 1px solid #ccc;
    `;

const IconContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  `;
const Icon = styled.i`
  font-size: 20px;
  padding: 0 10px;
  color: #808080;
  align-items: center;
   
`;

const BarraDeNavegacion = () => {
  return (
    <Nav>
      <Title><p>Stylagram</p></Title>
      <SearchContainer>
        <SearchInput type="search" name="" id="" placeholder="Search" />
      </SearchContainer>
      <IconContainer>
        <Icon className="far fa-compass"/>
        <Icon className="far fa-heart"/>
        <Icon className="far fa-user"/>
      </IconContainer>
    </Nav>
  );
};

export default BarraDeNavegacion;
