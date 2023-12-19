import styled from "styled-components";
import { ActiveImageProps } from "@/common/types/products";

export const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    margin: 40px 0;
    @media screen and (min-width: 768px) {
        grid-template-columns: 0.8fr 1.2fr;
    }
`;

export const ActiveImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 768px) {
        width: 500px;
        height: 500px;
    }
`;

export const ActiveImage = styled.img`
    max-width: 100%;
    max-height: 200px;
`;

export const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
`;

export const ImageButtons = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-grow: 0;
    margin-top: 10px;
`;

export const ImageButton = styled.div<ActiveImageProps>`
    ${(props) =>
        props.active
            ? `
    border: 2px solid #ccc;
    `
            : ``}
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    background-color: #eee;
    height: 80px;
    padding: 5px;
    cursor: pointer;
`;

export const PriceRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
`;

export const Price = styled.span`
    font-size: 1.5rem;
    font-weight: 500;
`;
