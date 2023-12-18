import styled from "styled-components";
import Link from "next/link";

export const StyledHeader = styled.header`
    background-color: #222;
`;

export const StyledLogo = styled(Link)`
    color: #fff;
    text-decoration: none;
`;

export const StyledCenterComponent = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
`;

export const NavLink = styled(Link)`
    color: #aaa;
    text-decoration: none;
`;

export const StylesNavigation = styled.nav`
    display: flex;
    gap: 15px;
`;
