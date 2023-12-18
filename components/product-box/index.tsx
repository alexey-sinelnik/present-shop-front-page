import { ProductType } from "@/common/types/product";
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
                                hover={1}
                                onClick={() => addProduct(_id)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                    />
                                </svg>
                            </StyledPrimaryButton>
                        </div>
                    </PriceBlock>
                </ProductInfoBox>
            </ProductWrapper>
        </>
    );
}
