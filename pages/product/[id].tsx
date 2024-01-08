import CenterComponent from "@/components/header/center";
import Header from "@/components/header";
import { SectionTitle } from "@/styles/components/new-products";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/products";
import { ProductComponentProps } from "@/common/types/products";
import {
    ColumnsWrapper,
    Price,
    PriceRow
} from "@/styles/components/single-product";
import { Box } from "@/styles/components";
import ProductImagesComponent from "@/components/product-images";
import { StyledPrimaryButton } from "@/styles/components/button";
import { useContext } from "react";
import { CartContext } from "@/components/cart-context";
import CartIcon from "@/components/icons/cart";

export default function SingleProduct({ product }: ProductComponentProps) {
    const { addProduct } = useContext(CartContext);

    return (
        <>
            <Header />
            <CenterComponent>
                <ColumnsWrapper>
                    <Box>
                        <ProductImagesComponent
                            images={product.images}
                            alt={product.title}
                        />
                    </Box>
                    <div>
                        <SectionTitle>{product.title}</SectionTitle>
                        <p>{product.description}</p>
                        <hr />
                        <PriceRow>
                            <div>
                                <Price>${product.price}</Price>
                            </div>
                            <div>
                                <StyledPrimaryButton
                                    primary={1}
                                    outline={1}
                                    onClick={() => addProduct(product._id)}
                                >
                                    <CartIcon />
                                    Add to cart
                                </StyledPrimaryButton>
                            </div>
                        </PriceRow>
                    </div>
                </ColumnsWrapper>
            </CenterComponent>
        </>
    );
}

export async function getServerSideProps(props: { query: { id: string } }) {
    await mongooseConnect();
    const { id } = props.query;
    const product = await Product.findById(id);

    return {
        props: {
            product: JSON.parse(JSON.stringify(product))
        }
    };
}
