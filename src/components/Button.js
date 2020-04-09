import React from 'react';
import styled from 'styled-components'

const ButtonComp = styled.button`
  background: none;
  color: #000;
  border: 1px solid #ccc;
  padding: 3px 5px;
  border-radius: 4px;
  font-size: 12px;
  width: 80px;
  height: 20px;
    `;

const Button = ({ mensaje }) => {
    return(
        <ButtonComp>{mensaje}</ButtonComp>
    )
};

export default Button;