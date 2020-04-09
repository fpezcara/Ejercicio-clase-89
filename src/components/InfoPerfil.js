import React from "react";
import styled from "styled-components";
import FotoPerfil from "../assets/profile-pic.jpg";
import Button from "./Button";

const nombrePerfil = ["yomieluwande"];

const ContainerInfoPerfil = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #fffafa;
  margin-top: 20px;
`;

const ContainerFotoPerfil = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 200px;
  height: auto;
  img {
    justify-content: center;
    width: 120px;
    height: 120px;
    overflow: hidden;
    border-radius: 150px;
    border: 2px solid #ccc;
  }
`;

const ContainerTextoPerfil = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 120px;
`;

const FilaUnoTextoPerfil = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
    p {
    font-weight: bold;
    margin-right: 20px;
    `;

const FilaDosTextoPerfil = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 30%;
  p {
    font-weight: bold;
    margin-left: -20px;
  }
`;

const FilaTresTextoPerfil = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 30%;
  p {
    font-weight: bold;
`;

const InfoPerfil = () => {
  return (
    <ContainerInfoPerfil>
      <ContainerFotoPerfil>
        <img src={FotoPerfil} alt="foto perfil" />
      </ContainerFotoPerfil>
      <ContainerTextoPerfil>
        <FilaUnoTextoPerfil>
          <p>{nombrePerfil}</p>
          <Button mensaje={"Edit Profile"} />
        </FilaUnoTextoPerfil>
        <FilaDosTextoPerfil>
          <span>5</span><p>posts</p>
          <span>296</span><p>followers</p>
          <span>269</span><p>following</p>
        </FilaDosTextoPerfil>
        <FilaTresTextoPerfil>
          <p>Yomi</p>
        </FilaTresTextoPerfil>
      </ContainerTextoPerfil>
    </ContainerInfoPerfil>
  );
};

export default InfoPerfil;
