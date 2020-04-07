import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const SearchContainer = styled.div`
  width: 450px;
  display: flex;
      `;

const SearchInput = styled.input`
  padding: 5px;
  margin: 9px;
  text-align: center;
  border-radius: 2px;
  border: 1px solid #ccc;
  justify-content: flex-end;   
  `;

const IconContainer = styled.div`
  width: 400px;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  ${'' /* align-items: center; */}
  `;

const Icon = styled.i`
  font-size: 20px;
  padding: 10px 10px 0 10px;
  color: #808080;
  align-self: flex-end;
   
`;

const BarraDeNavegacion = () => {
  return (
    <Nav>
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
