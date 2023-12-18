import type { AppProps } from "next/app";
import { GlobalStyles } from "@/styles/app";
import NewProductsComponent from "@/components/new-products";
import { CartContextProvider } from "@/components/cart-context";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyles />
            <CartContextProvider>
                <Component {...pageProps} />
            </CartContextProvider>
        </>
    );
}
