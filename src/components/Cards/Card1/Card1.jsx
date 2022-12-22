import React from 'react';
import { Card1Styled as S } from './styles.js'


const Card1 = ({ title, colorSet, code, price, url, image }) => {
    return (
        <S.Card href={url}>
            <S.Figure>
                <img src={image.src} alt={image.alt} />
            </S.Figure>
            <S.Content>
                <S.Title>{title}</S.Title>
                <S.ColorSet>
                    {colorSet.map(color => (
                        <S.ColorItem color={color} />
                    ))}
                </S.ColorSet>
                <S.Code>
                    Code - ${code}
                </S.Code>
                <S.Price>${price.toFixed(2)}</S.Price>
            </S.Content>
        </S.Card>
    )
}

export default Card1;