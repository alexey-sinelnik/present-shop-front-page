import {
    NavButton,
    NavLink,
    StyledHeader,
    StyledLogo,
    StylesNavigation,
    Wrapper
} from "@/styles/components/header";
import CenterComponent from "./center";
import { Fragment, useContext, useState } from "react";
import { CartContext } from "@/components/cart-context";
import { navigationArray } from "@/common/constants/navigation";
import { NavigationElementType } from "@/common/types/header";
import MenuIcon from "@/components/icons/menu-icon";
import { set } from "mongoose";

export default function Header() {
    const { cartProducts } = useContext(CartContext);
    const [mobileNavActive, setMobileNavActive] = useState(false);

    return (
        <StyledHeader>
            <CenterComponent>
                <Wrapper>
                    <StyledLogo href={"/"}>Present Shop</StyledLogo>
                    <StylesNavigation mobile={mobileNavActive}>
                        {navigationArray.map(
                            (element: NavigationElementType) => (
                                <Fragment key={element.link}>
                                    {element.title !== "Cart" ? (
                                        <NavLink href={element.link}>
                                            {element.title}
                                        </NavLink>
                                    ) : (
                                        <NavLink href={element.link}>
                                            {element.title} (
                                            {cartProducts?.length
                                                ? cartProducts?.length
                                                : 0}
                                            )
                                        </NavLink>
                                    )}
                                </Fragment>
                            )
                        )}
                    </StylesNavigation>
                    <NavButton
                        onClick={() => setMobileNavActive(!mobileNavActive)}
                    >
                        <MenuIcon />
                    </NavButton>
                </Wrapper>
            </CenterComponent>
        </StyledHeader>
    );
}
