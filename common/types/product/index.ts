export type ProductType = {
    category: string;
    description: string;
    images: [string];
    price: number;
    properties: {};
    title: string;
    __v: number;
    _id: string;
    updatedAt: string;
};

export type ProductsGridComponentProps = {
    products: ProductType[];
};
