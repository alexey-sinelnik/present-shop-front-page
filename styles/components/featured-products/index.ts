import styled from "styled-components";
import Image from "next/image";

export const Background = styled.div`
    background-color: rgb(35 51 60);
    color: #fff;
    padding: 50px 0;
`;
export const Title = styled.h1`
    margin: 0;
    font-weight: normal;
    font-size: 1.5rem;
    @media screen and (min-width: 768px) {
        font-size: 3rem;
    }
`;

export const Description = styled.p`
    color: #aaa;
    font-size: 0.8rem;
`;

export const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    div:nth-child(1) {
        order: 2;
    }
    img {
        max-width: 100%;
        display: block;
        margin: 0 auto;
    }
    @media screen and (min-width: 768px) {
        grid-template-columns: 1.1fr 0.9fr;
        div:nth-child(1) {
            order: 0;
        }
        img {
            max-width: 100%;
        }
    }
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 25px;
`;

export const Column = styled.div`
    display: flex;
    align-items: center;
`;

export const ProductImage = styled(Image)`
    width: 100%;
    height: 100%;
`;
