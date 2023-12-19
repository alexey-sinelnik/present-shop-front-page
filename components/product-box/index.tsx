import { ProductType } from "../../common/types/products";
import {
    Price,
    PriceBlock,
    ProductInfoBox,
    ProductWrapper,
    Title,
    WhiteBox
} from "@/styles/components/new-products";
import { StyledPrimaryButton } from "@/styles/components/button";
import CartIcon from "@/components/icons/cart";
import { useContext } from "react";
import { CartContext } from "@/components/cart-context";

export default function ProductBoxComponent({
    title,
    description,
    price,
    images,
    _id
}: ProductType) {
    const { addProduct } = useContext(CartContext);
    const url = `/product/${_id}`;

    return (
        <>
            <ProductWrapper>
                <WhiteBox href={url}>
                    <div>
                        <img src={images[0]} alt="Product image" />
                    </div>
                </WhiteBox>
                <ProductInfoBox>
                    <Title href={url}>{title}</Title>
                    <PriceBlock>
                        <Price>${price}</Price>
                        <div>
                            <StyledPrimaryButton
                                primary={1}
                                outline={1}
                                onClick={() => addProduct(_id)}
                                block={1}
                            >
                                Add to cart
                            </StyledPrimaryButton>
                        </div>
                    </PriceBlock>
                </ProductInfoBox>
            </ProductWrapper>
        </>
    );
}
