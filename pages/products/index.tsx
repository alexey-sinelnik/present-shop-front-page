import Header from "@/components/header";
import CenterComponent from "@/components/header/center";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/products";
import ProductsGridComponent from "@/components/products-grid";
import { SectionTitle } from "@/styles/components/new-products";
import {
    ProductsDataType,
    ProductsGridComponentProps,
    ProductType
} from "@/common/types/products";

export default function AllProducts({ products }: ProductsGridComponentProps) {
    return (
        <>
            <Header />
            <CenterComponent>
                <SectionTitle>All products</SectionTitle>
                <ProductsGridComponent products={products} />
            </CenterComponent>
        </>
    );
}

export async function getServerSideProps(): Promise<ProductsDataType> {
    await mongooseConnect();
    const products: ProductType[] = await Product.find({}, null, {
        sort: { _id: -1 },
        limit: 24
    });

    return {
        props: {
            products: JSON.parse(JSON.stringify(products))
        }
    };
}
