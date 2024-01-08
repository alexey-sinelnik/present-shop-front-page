import styled from "styled-components";
import Link from "next/link";

export const CategoryGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;

export const CategoryTitle = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    margin-top: 10px;
    a {
        color: #555;
        text-decoration: none;
    }
    h2 {
        margin-bottom: 10px;
        margin-top: 10px;
    }
`;

export const CategoryWrapper = styled.div`
    margin-bottom: 40px;
`;

export const ShowAllSquare = styled(Link)`
    background: #ddd;
    color: #555;
    height: 160px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
`;

export const CategoryHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
        font-size: 1.5em;
    }
`;

export const FiltersWrapper = styled.div`
    display: flex;
    gap: 15px;
`;

export const Filter = styled.div`
    background-color: #ddd;
    padding: 5px 10px;
    border-radius: 5px;
    display: flex;
    gap: 5px;
    color: #444;
    select {
        background-color: transparent;
        border: 0;
        font-size: inherit;
        color: #444;
    }
`;

export const AlertWrapper = styled.div`
    width: 100%;
    text-align: center;
    padding-top: 40px;
`;
