import { Context, createContext, useEffect, useState } from "react";
import { CartContextProps, CartContextType } from "@/common/types/cart";

export const CartContext: Context<CartContextType> = createContext(
    {} as CartContextType
);

export function CartContextProvider({ children }: CartContextProps) {
    const ls = typeof window !== "undefined" && window.localStorage;
    const [cartProducts, setCartProducts] = useState<string[]>([]);

    useEffect(() => {
        if (ls && ls.getItem("cart")) {
            setCartProducts(JSON.parse(ls.getItem("cart") as string));
        }
    }, [ls]);

    useEffect(() => {
        if (cartProducts?.length > 0 && typeof window !== "undefined") {
            localStorage.setItem("cart", JSON.stringify(cartProducts));
        }
    }, [cartProducts]);

    const addProduct = (productId: string) => {
        setCartProducts((prevState: string[]) => [...prevState, productId]);
    };

    const removeProduct = (productId: string) => {
        setCartProducts((prevState: string[]) => {
            const position = prevState.indexOf(productId);
            if (position !== -1) {
                return prevState.filter(
                    (value: string, index: number) => index !== position
                );
            }
            return prevState;
        });
    };

    const clearCart = () => {
        setCartProducts([]);
    };

    return (
        <CartContext.Provider
            value={{ cartProducts, addProduct, removeProduct, clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
}
