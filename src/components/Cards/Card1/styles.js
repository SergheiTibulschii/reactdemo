import styled, { css } from 'styled-components';

const Content = styled.div`
  padding: 15px;
  text-align: center;
  transition: background-color 0.3s, color 0.3s;
`

export const Card1Styled = {
    Card: styled.a`
      cursor: pointer;

      &:hover ${Content} {
        background: #2F1AC4;
        color: #fff;
      }
    `,
    Figure: styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      background: #F6F7FB;
      aspect-ratio: 270/236;

      & img {
        width: 70%;
        object-fit: cover;
      }
    `,
    Content,
    Title: styled.div``,
    ColorSet: styled.div`
      display: flex;
      justify-content: center;
      padding: 12px 0;
    `,
    ColorItem: styled.div(({ color }) => css`
      width: 14px;
      height: 4px;
      background: ${color};
      border-radius: 4px;
      
      &:not(:first-child) {
        margin-left: 8px;
      }
    `),
    Code: styled.div``,
    Price: styled.div``
}