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

export type ProductComponentProps = {
    product: ProductType;
};

export type ProductImagesProps = {
    images: string[];
    alt: string;
};

export type ActiveImageProps = {
    active: boolean;
};
