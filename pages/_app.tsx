import type { AppProps } from "next/app";
import { GlobalStyles } from "@/styles/app";
import { CartContextProvider } from "@/components/cart-context";
import { Helmet } from "react-helmet";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;800;900&family=Roboto:wght@300;400;500;700;900&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <GlobalStyles />
            <CartContextProvider>
                <Component {...pageProps} />
            </CartContextProvider>
        </>
    );
}
