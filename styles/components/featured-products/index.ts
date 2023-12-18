import styled from "styled-components";
import Image from "next/image";

export const Background = styled.div`
    background-color: #222;
    color: #fff;
    padding: 50px 0;
`;
export const Title = styled.h1`
    margin: 0;
    font-weight: normal;
    font-size: 3rem;
`;

export const Description = styled.p`
    color: #aaa;
    font-size: 0.8rem;
`;

export const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 40px;
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