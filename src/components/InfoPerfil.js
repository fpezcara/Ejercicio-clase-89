import React from "react";
import styled from "styled-components";
import FotoPerfil from "../assets/profile-pic.jpg";
import Button from './Button'

const nombrePerfil = ["yomieluwande"];

const ContainerInfoPerfil = styled.div`
  ${'' /* margin-left: 390px; */}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #fffafa;
`;

const ContainerFotoPerfil = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 300px;
  height: auto;
  
`;

const ImgFotoPerfil = styled.img`
  justify-content: center;
  width: 120px;
  height: 120px;
  overflow: hidden;
  border-radius: 150px;
  border: 2px solid #ccc;
`;

const ButtonEditPerfil = styled.button`
  background: none;
  color: #fff;
  border: 1px solid #fff;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 12px;
`

const InfoPerfil = () => {
  return (
    <ContainerInfoPerfil>
      <ContainerFotoPerfil>
        <ImgFotoPerfil src={FotoPerfil} />
      </ContainerFotoPerfil>
      <div className="columna-uno">
        <p>{nombrePerfil}</p>
        <Button estilo={ButtonEditPerfil} mensaje={"Edit Perfil"}/>
      </div>
    </ContainerInfoPerfil>
  );
};

export default InfoPerfil;
