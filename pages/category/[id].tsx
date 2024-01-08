import Header from "@/components/header";
import CenterComponent from "@/components/header/center";
import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/categories";
import {
    CategoriesType,
    PropertyFilterType,
    PropertyType,
    SingleCategoryContextType,
    SingleCategoryPropsType,
    SingleCategoryServerSideProps
} from "@/common/types/categories";
import { Product } from "@/models/products";
import ProductsGridComponent from "@/components/products-grid";
import {
    AlertWrapper,
    CategoryHeader,
    Filter,
    FiltersWrapper
} from "@/styles/components/categories";
import { ProductType } from "@/common/types/products";
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import SpinnerComponent from "@/components/spinner";

export default function CategoryPage({
    category,
    products: originalProducts,
    subCategories
}: SingleCategoryPropsType) {
    const [products, setProducts] = useState(originalProducts);
    const [loading, setLoading] = useState(false);
    const [filterValues, setFilterValues] = useState<any>(
        category.properties.map(
            (property: PropertyType): PropertyFilterType => ({
                name: property.name,
                value: "All"
            })
        )
    );
    const [sort, setSort] = useState("_id-asc");

    const handleFilterChange = (name: string, value: string) => {
        setFilterValues((prevState: any) => {
            return prevState.map((element: any) => ({
                name: element.name,
                value: element.name === name ? value : element.value
            }));
        });
    };

    useEffect(() => {
        setLoading(true);
        const categoriesIds: string[] = [
            category._id,
            ...subCategories.map((element: CategoriesType) =>
                element._id.toString()
            )
        ];
        const params: URLSearchParams = new URLSearchParams();
        params.set("categories", categoriesIds.join(","));
        params.set("sort", sort);
        filterValues.forEach((element: { value: string; name: string }) => {
            if (element.value !== "All") {
                params.set(element.name, element.value);
            }
        });

        const url: string = `/api/categoryProducts?` + params.toString();
        axios.get(url).then((response) => {
            setProducts(response.data);
            setLoading(false);
        });
    }, [category._id, filterValues, sort, subCategories]);

    return (
        <>
            <Header />
            <CenterComponent>
                <CategoryHeader>
                    <h1>{category.name}</h1>
                    <FiltersWrapper>
                        {category.properties.map((property: PropertyType) => (
                            <Filter key={property.name}>
                                <span>{property.name}: </span>
                                <select
                                    onChange={(e) =>
                                        handleFilterChange(
                                            property.name,
                                            e.target.value
                                        )
                                    }
                                    value={
                                        filterValues.filter(
                                            (element: PropertyFilterType) =>
                                                element.name === property.name
                                        ).value
                                    }
                                >
                                    <option>All</option>
                                    {property.values.map((value: string) => (
                                        <option key={value}>{value}</option>
                                    ))}
                                </select>
                            </Filter>
                        ))}
                        <Filter>
                            <span>Sort: </span>
                            <select
                                value={sort}
                                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                                    setSort(e.target.value)
                                }
                            >
                                <option value="price-asc">
                                    price, lowest first
                                </option>
                                <option value="price-desc">
                                    price, highest first
                                </option>
                                <option value="_id-asc">newest first</option>
                                <option value="_id-desc">oldest first</option>
                            </select>
                        </Filter>
                    </FiltersWrapper>
                </CategoryHeader>
                {loading && <SpinnerComponent />}
                {!loading && (
                    <AlertWrapper>
                        {products.length > 0 && (
                            <ProductsGridComponent products={products} />
                        )}
                        {products.length === 0 && (
                            <div>Sorry, no products found</div>
                        )}
                    </AlertWrapper>
                )}
            </CenterComponent>
        </>
    );
}

export async function getServerSideProps(
    context: SingleCategoryContextType
): Promise<SingleCategoryServerSideProps> {
    await mongooseConnect();
    const category: CategoriesType =
        (await Category.findById(context.query.id)) || ({} as CategoriesType);

    const subCategories: CategoriesType[] = await Category.find({
        parent: category._id
    });

    const categoriesIds: string[] = [
        category._id,
        ...subCategories.map((element: CategoriesType) =>
            element._id.toString()
        )
    ];

    const products: ProductType[] = await Product.find({
        category: categoriesIds
    });

    return {
        props: {
            category: JSON.parse(JSON.stringify(category)),
            subCategories: JSON.parse(JSON.stringify(subCategories)),
            products: JSON.parse(JSON.stringify(products))
        }
    };
}
