import styled from "styled-components";
import Link from "next/link";

export const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
`;

export const WhiteBox = styled(Link)`
    background-color: #fff;
    padding: 20px;
    height: 120px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    img {
        max-width: 100%;
        max-height: 80px;
    }
    :hover {
        transition: all 0.4s ease-in-out;
        transform: scale(1.1);
    }
`;

export const ProductWrapper = styled.div``;

export const ProductInfoBox = styled.div`
    margin-top: 10px;
`;

export const Title = styled(Link)`
    font-weight: normal;
    font-size: 0.9rem;
    margin: 0;
    text-decoration: none;
`;

export const PriceRow = styled.div`
    display: flex;
`;

export const PriceBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
`;

export const Price = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
`;

export const SectionTitle = styled.h2`
    font-size: 2rem;
    font-weight: 500;
`;
