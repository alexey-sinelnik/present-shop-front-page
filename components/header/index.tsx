import {
    NavLink,
    StyledHeader,
    StyledLogo,
    StylesNavigation,
    Wrapper
} from "@/styles/components/header";
import CenterComponent from "./center";
import { useContext } from "react";
import { CartContext } from "@/components/cart-context";

export default function Header() {
    const { cartProducts } = useContext(CartContext);
    return (
        <StyledHeader>
            <CenterComponent>
                <Wrapper>
                    <StyledLogo href={"/"}>Present Shop</StyledLogo>
                    <StylesNavigation>
                        <NavLink href={"/"}>Home</NavLink>
                        <NavLink href={"/products"}>All products</NavLink>
                        <NavLink href={"/categories"}>Categories</NavLink>
                        <NavLink href={"/account"}>Account</NavLink>
                        <NavLink href={"/cart"}>
                            Cart (
                            {cartProducts?.length ? cartProducts?.length : 0})
                        </NavLink>
                    </StylesNavigation>
                </Wrapper>
            </CenterComponent>
        </StyledHeader>
    );
}
