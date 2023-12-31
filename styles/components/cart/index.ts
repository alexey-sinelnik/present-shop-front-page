import styled from "styled-components";

export const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    margin-top: 40px;
    @media screen and (min-width: 768px) {
        grid-template-columns: 1.3fr 0.7fr;
    }
`;

export const CenteredBox = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 30px;
    text-align: center;
`;

export const StyledTable = styled.table`
    width: 100%;
    th {
        text-align: left;
        color: #ccc;
        font-weight: 600;
        font-size: 0.9rem;
    }
    td {
        border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
`;

export const ProductInfoCell = styled.td`
    padding: 10px 0;
`;

export const ProductImageBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    img {
        max-width: 50px;
        max-height: 50px;
    }
    @media screen and (min-width: 768px) {
        width: 100px;
        height: 100px;
        padding: 10px;
        img {
            max-width: 80px;
            max-height: 80px;
        }
    }
`;

export const QuantityLabel = styled.span`
    padding: 0 15px;
    display: block;
    @media screen and (min-width: 768px) {
        display: inline-block;
        padding: 0 5px;
    }
`;

export const StyledInput = styled.input`
    width: 100%;
    padding: 0 10px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
`;

export const CityHolder = styled.div`
    display: flex;
    gap: 5px;
`;
