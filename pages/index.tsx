import Header from "@/components/header";
import FeaturedProductComponent from "../components/featured-products";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";
import { HomePageProps } from "@/common/types/home";
import NewProductsComponent from "@/components/new-products";

export default function HomePage({
    featureProduct,
    newProducts
}: HomePageProps) {
    return (
        <div>
            <Header />
            <FeaturedProductComponent product={featureProduct} />
            <NewProductsComponent products={newProducts} />
        </div>
    );
}

export async function getServerSideProps() {
    const featuredProductId = "656b3a98d10a58910aa39a20";
    await mongooseConnect();
    const featureProduct = await Product.findOne({ _id: featuredProductId });
    const newProducts = await Product.find({}, null, {
        sort: { _id: -1 },
        limit: 10
    });

    return {
        props: {
            featureProduct: JSON.parse(JSON.stringify(featureProduct)),
            newProducts: JSON.parse(JSON.stringify(newProducts))
        }
    };
}
