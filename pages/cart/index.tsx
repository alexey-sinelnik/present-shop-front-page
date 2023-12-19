import Header from "@/components/header";
import {
    CenteredBox,
    CityHolder,
    ColumnsWrapper,
    ProductImageBox,
    ProductInfoCell,
    QuantityLabel
} from "@/styles/components/cart";
import CenterComponent from "@/components/header/center";
import { StyledPrimaryButton } from "@/styles/components/button";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/components/cart-context";
import axios from "axios";
import { ProductType } from "@/common/types/products";
import TableComponent from "@/components/table";
import InputComponent from "@/components/input";
import { Box } from "@/styles/components";

export default function CartComponent() {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [street, setStreet] = useState("");
    const [country, setCountry] = useState("");
    const { cartProducts, addProduct, removeProduct, clearCart } =
        useContext(CartContext);
    const [isSuccess, setIsSuccess] = useState(false);
    let totalPrice: number = 0;

    useEffect(() => {
        if (
            typeof window !== "undefined" &&
            window.location.href.includes("success")
        ) {
            setIsSuccess(true);
            clearCart();
        }
    }, [clearCart]);

    useEffect(() => {
        if (cartProducts.length > 0) {
            axios
                .post("/api/products", { ids: cartProducts })
                .then((response) => {
                    setProducts(response.data);
                });
        } else {
            setProducts([]);
        }
    }, [cartProducts]);

    for (const productId of cartProducts) {
        const price: number =
            products.find((product: ProductType) => product._id === productId)
                ?.price || 0;
        totalPrice += price;
    }

    const increaseAmountProducts = (productId: string) => {
        addProduct(productId);
    };

    const reduceAmountProduct = (productId: string) => {
        removeProduct(productId);
    };

    const handlePayment = async () => {
        const response = await axios.post("/api/checkout", {
            name,
            email,
            city,
            postalCode,
            street,
            country,
            cartProducts
        });
        if (response.data.url) {
            window.location = response.data.url;
        }
    };

    return isSuccess ? (
        <>
            <Header />
            <CenterComponent>
                <CenteredBox>
                    <h1>Thanks for your order</h1>
                    <p>We will email you when your order will be sent</p>
                </CenteredBox>
            </CenterComponent>
        </>
    ) : (
        <>
            <Header />
            <CenterComponent>
                <ColumnsWrapper>
                    <Box>
                        <h2>Cart</h2>
                        {!cartProducts?.length && <div>Your cart is empty</div>}
                        {products?.length > 0 && (
                            <TableComponent>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(
                                        (
                                            product: ProductType,
                                            index: number
                                        ) => (
                                            <tr key={index}>
                                                <ProductInfoCell>
                                                    <ProductImageBox>
                                                        <img
                                                            src={
                                                                product
                                                                    .images[0]
                                                            }
                                                            alt={product.title}
                                                        />
                                                    </ProductImageBox>
                                                    {product.title}:
                                                </ProductInfoCell>
                                                <td>
                                                    <StyledPrimaryButton
                                                        onClick={() =>
                                                            reduceAmountProduct(
                                                                product._id
                                                            )
                                                        }
                                                    >
                                                        -
                                                    </StyledPrimaryButton>
                                                    <QuantityLabel>
                                                        {
                                                            cartProducts.filter(
                                                                (id: string) =>
                                                                    id ===
                                                                    product._id
                                                            )?.length
                                                        }
                                                    </QuantityLabel>
                                                    <StyledPrimaryButton
                                                        onClick={() =>
                                                            increaseAmountProducts(
                                                                product._id
                                                            )
                                                        }
                                                    >
                                                        +
                                                    </StyledPrimaryButton>
                                                </td>
                                                <td>
                                                    $
                                                    {cartProducts.filter(
                                                        (id: string) =>
                                                            id === product._id
                                                    )?.length * product.price}
                                                </td>
                                            </tr>
                                        )
                                    )}
                                    <tr>
                                        <td>Total price</td>
                                        <td></td>
                                        <td>${totalPrice}</td>
                                    </tr>
                                </tbody>
                            </TableComponent>
                        )}
                    </Box>
                    {!!cartProducts?.length && (
                        <Box>
                            <h2>Order information</h2>
                            <InputComponent
                                type="text"
                                placeholder="Name"
                                value={name}
                                name="name"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <InputComponent
                                type="text"
                                placeholder="Email"
                                value={email}
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <CityHolder>
                                <InputComponent
                                    type="text"
                                    placeholder="City"
                                    value={city}
                                    name="city"
                                    onChange={(e) => setCity(e.target.value)}
                                />
                                <InputComponent
                                    type="text"
                                    placeholder="Postal Code"
                                    value={postalCode}
                                    name="postalCode"
                                    onChange={(e) =>
                                        setPostalCode(e.target.value)
                                    }
                                />
                            </CityHolder>
                            <InputComponent
                                type="text"
                                placeholder="Street address"
                                value={street}
                                name="street"
                                onChange={(e) => setStreet(e.target.value)}
                            />
                            <InputComponent
                                type="text"
                                placeholder="Country"
                                value={country}
                                name="country"
                                onChange={(e) => setCountry(e.target.value)}
                            />
                            <StyledPrimaryButton
                                black={1}
                                block={1}
                                onClick={handlePayment}
                            >
                                Continue to payment
                            </StyledPrimaryButton>
                        </Box>
                    )}
                </ColumnsWrapper>
            </CenterComponent>
        </>
    );
}
