import React from 'react';
import { ButtonStyled as S } from './styles.js'

const Button = ({ variant, size, children }) => {
    return (
        <S.Button variant={variant} size={size}>
            {children}
        </S.Button>
    )
}

export default Button;