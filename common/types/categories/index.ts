import { ProductType } from "@/common/types/products";

export type CategoriesPropsType = {
    mainCategories: CategoriesType[];
    categoriesProducts: CategoriesProducts;
};

export type SingleCategoryPropsType = {
    category: CategoriesType;
    products: ProductType[];
    subCategories: CategoriesType[];
};

export type CategoriesType = {
    _id: string;
    name: string;
    parent?: string;
    __v: number;
    properties: PropertyType[];
};

export type PropertyType = {
    name: string;
    values: string[];
};

export type PropertyFilterType = {
    name: string;
    value: string;
};

export type CategoriesProducts = {
    [key: string]: ProductType[];
};

export type CategoriesServerSideProps = {
    props: CategoriesPropsType;
};

export type SingleCategoryServerSideProps = {
    props: SingleCategoryPropsType;
};

export type SingleCategoryContextType = {
    query: CategoryQuery;
};

export type ProductQueryType = {
    category?: any;
    [key: string]: any;
};

type CategoryQuery = {
    id: string;
};
