import Header from "@/components/header";
import { Title } from "@/styles/components/products";
import CenterComponent from "@/components/header/center";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";
import ProductsGridComponent from "@/components/products-grid";

export default function AllProducts({ products }: any) {
    return (
        <>
            <Header />
            <CenterComponent>
                <Title>All products</Title>
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
