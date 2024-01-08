import { JSX } from "react";
import Header from "@/components/header";
import { SectionTitle } from "@/styles/components/new-products";
import CenterComponent from "@/components/header/center";
import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/categories";
import {
    CategoriesServerSideProps,
    CategoriesProducts,
    CategoriesPropsType,
    CategoriesType
} from "@/common/types/categories";
import { Product } from "@/models/products";
import { ProductType } from "@/common/types/products";
import ProductBoxComponent from "@/components/product-box";
import {
    CategoryGrid,
    CategoryTitle,
    CategoryWrapper,
    ShowAllSquare
} from "@/styles/components/categories";
import Link from "next/link";

export default function CategoriesPage({
    mainCategories,
    categoriesProducts
}: CategoriesPropsType) {
    const renderCategories: JSX.Element[] = mainCategories.map(
        (category: CategoriesType) => (
            <CategoryWrapper key={category._id}>
                <CategoryTitle>
                    <h2>{category.name}</h2>
                    <div>
                        <Link href={`/category/${category._id}`}>
                            Show all {category.name}
                        </Link>
                    </div>
                </CategoryTitle>
                <CategoryGrid>
                    {categoriesProducts[category._id].map(
                        (element: ProductType, index: number) => (
                            <ProductBoxComponent {...element} key={index} />
                        )
                    )}
                    <ShowAllSquare href={`/category/${category._id}`}>
                        Show all &rarr;
                    </ShowAllSquare>
                </CategoryGrid>
            </CategoryWrapper>
        )
    );

    return (
        <>
            <Header />
            <CenterComponent>
                <SectionTitle>All Categories</SectionTitle>
                {renderCategories}
            </CenterComponent>
        </>
    );
}

export async function getServerSideProps(): Promise<CategoriesServerSideProps> {
    await mongooseConnect();
    const categories: CategoriesType[] = await Category.find();
    const mainCategories: CategoriesType[] = categories.filter(
        (category: CategoriesType) => !category.parent
    );

    const categoriesProducts: CategoriesProducts = {};

    for (const category of mainCategories) {
        const mainCategoryId: string = category._id.toString();
        const childCategoriesIds: string[] = categories
            .filter(
                (element: CategoriesType): boolean =>
                    element?.parent?.toString() === mainCategoryId
            )
            .map((element: CategoriesType) => element._id.toString());
        const categoriesIds: string[] = [mainCategoryId, ...childCategoriesIds];
        categoriesProducts[category._id] = await Product.find(
            { category: categoriesIds },
            null,
            {
                limit: 3,
                sort: { _id: -1 }
            }
        );
    }

    return {
        props: {
            mainCategories: JSON.parse(JSON.stringify(mainCategories)),
            categoriesProducts: JSON.parse(JSON.stringify(categoriesProducts))
        }
    };
}
