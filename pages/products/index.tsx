import Header from "@/components/header";
import CenterComponent from "@/components/header/center";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";
import ProductsGridComponent from "@/components/products-grid";
import { SectionTitle } from "@/styles/components/new-products";
import { ProductsGridComponentProps } from "@/common/types/products";

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

export async function getServerSideProps() {
    await mongooseConnect();
    const products = await Product.find({}, null, {
        sort: { _id: -1 },
        limit: 24
    });

    return {
        props: {
            products: JSON.parse(JSON.stringify(products))
        }
    };
}
