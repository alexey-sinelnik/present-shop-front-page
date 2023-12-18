import CenterComponent from "@/components/header/center";
import {
    Background,
    Column,
    Description,
    ProductImage,
    Title,
    ColumnsWrapper,
    ButtonsWrapper
} from "@/styles/components/featured-products";
import NotebookImage from "@/assets/image/noteboook.png";
import { StyledPrimaryButton } from "@/styles/components/button";
import { FeaturedProductsPageProps } from "@/common/types/featured-products";
import ButtonLink from "@/components/buttons/button-link";
import CartIcon from "@/components/icons/cart";
import { useContext } from "react";
import { CartContext } from "@/components/cart-context";

export default function FeaturedProductComponent({
    product
}: FeaturedProductsPageProps) {
    const { addProduct } = useContext(CartContext);
    const addFeaturedToCart = () => {
        addProduct(product._id);
    };

    return (
        <Background>
            <CenterComponent>
                <ColumnsWrapper>
                    <Column>
                        <div>
                            <Title>{product.title}</Title>
                            <Description>{product.description}</Description>
                            <ButtonsWrapper>
                                <ButtonLink
                                    size="l"
                                    white={1}
                                    outline={1}
                                    link={`products/${product._id}`}
                                >
                                    Read more
                                </ButtonLink>
                                <StyledPrimaryButton
                                    size="l"
                                    primary={1}
                                    onClick={addFeaturedToCart}
                                >
                                    <CartIcon />
                                    Add to cart
                                </StyledPrimaryButton>
                            </ButtonsWrapper>
                        </div>
                    </Column>
                    <Column>
                        <ProductImage src={NotebookImage} alt="Product image" />
                    </Column>
                </ColumnsWrapper>
            </CenterComponent>
        </Background>
    );
}
