import { ReactNode } from "react";

export type CartContextProps = {
    children: ReactNode;
};

export type CartContextType = {
    cartProducts: string[];
    addProduct: (productId: string) => void;
    removeProduct: (productId: string) => void;
    clearCart: () => void;
};

export type TableProps = {
    children: ReactNode;
};
