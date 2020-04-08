import React from 'react';
import styled from 'styled-components'

const Button = ({ mensaje, estilo }) => {
    return(
        <button className={estilo}>{mensaje}</button>
    )
}

export default Button;