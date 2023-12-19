import styled from "styled-components";
import Link from "next/link";
import { MobileMenuButtonProps } from "@/common/types/button";

export const StyledHeader = styled.header`
    background-color: #222;
`;

export const StyledLogo = styled(Link)`
    color: #fff;
    text-decoration: none;
    position: relative;
    z-index: 3;
`;

export const StyledCenterComponent = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
`;

export const NavLink = styled(Link)`
    display: block;
    color: #aaa;
    text-decoration: none;
    padding: 5px 0;
    transition: all 0.3s ease-in-out;
    &:hover {
        color: #fff;
    }
    @media screen and (min-width: 768px) {
        padding: 0;
    }
`;

export const StylesNavigation = styled.nav<MobileMenuButtonProps>`
    ${(props) => (props.mobile ? `display: block;` : `display:none;`)}
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 70px 20px 20px;
    background-color: #222;
    @media screen and (min-width: 768px) {
        position: static;
        display: flex;
        gap: 15px;
        padding: 0;
    }
`;

export const NavButton = styled.button`
    background-color: transparent;
    border: none;
    width: 40px;
    height: 40px;
    color: #fff;
    cursor: pointer;
    position: relative;
    z-index: 3;
    @media screen and (min-width: 768px) {
        display: none;
    }
`;
