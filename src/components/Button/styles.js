import styled, {css} from "styled-components";

const getSizeStyles = ({ size }) => {
    if(!size) {
        return null;
    }

    const mapper = {
        small: css``,
        medium: css``,
        large: css``,
    }

    return mapper[size];
}

const getVariantStyles = ({ variant }) => {

}

export const ButtonStyled = {
    Button: styled.button(({ variant, size }) => css`
      padding: 20px;
      font-size: 20px;
      text-transform: uppercase;
      font-family: var(--font-primary);
      ${getVariantStyles};
      ${getSizeStyles}
    `),
    Button2: styled.button`
      background: ${({ variant }) => variant === 'primary' ? 'green' : 'transparent'};
    `
}