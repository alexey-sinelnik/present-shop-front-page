import styled, { css } from "styled-components";
import { StyledPrimaryButtonProps } from "@/common/types/button";
import Link from "next/link";
import { primary } from "@/common/constants/colors";

const ButtonStyle = css<StyledPrimaryButtonProps>`
    border: 0;
    padding: 5px 15px;
    border-radius: 5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    svg {
        height: 16px;
        margin-right: 5px;
    }
    ${(props) =>
        props.block &&
        css`
            display: block;
            width: 100%;
        `}
    ${(props) =>
        props.white &&
        props.outline &&
        css`
            background-color: transparent;
            color: #fff;
            border: 1px solid #fff;
        `}
    ${(props) =>
        props.white &&
        !props.outline &&
        css`
            background-color: #fff;
            color: #000;
        `}
    ${(props) =>
        props.black &&
        props.outline &&
        css`
            background-color: transparent;
            color: #000;
            border: 1px solid #000;
        `}
    ${(props) =>
        props.black &&
        !props.outline &&
        css`
            background-color: #000;
            color: #fff;
        `}
    ${(props) =>
        props.primary &&
        !props.outline &&
        `
            background-color: ${primary};
            color: #fff;
            border: 1px solid ${primary};
        `}

    ${(props) =>
        props.primary &&
        props.outline &&
        `
            background-color: transparent;
            color: ${primary};
            border: 1px solid ${primary};
        `}
    ${(props) =>
        props.primary &&
        props.outline &&
        props.hover &&
        `
            background-color: transparent;
            color: ${primary};
            border: 1px solid ${primary};
            &:hover {
                svg {
                    fill: ${primary}
                   
                }
            }
        `}
    ${(props) =>
        props.size === "l" &&
        css`
            font-size: 1.2rem;
            padding: 10px 25px;
            svg {
                height: 20px;
                margin-right: 5px;
            }
        `}
`;

export const StyledPrimaryButton = styled.button<StyledPrimaryButtonProps>`
    ${ButtonStyle}
`;

export const StyledButtonLink = styled(Link)<StyledPrimaryButtonProps>`
    ${ButtonStyle}
`;
