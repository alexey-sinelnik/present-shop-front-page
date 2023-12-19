import { ProductsGrid, SectionTitle } from "@/styles/components/new-products";
import { ProductType } from "../../common/types/products";
import CenterComponent from "@/components/header/center";
import ProductBoxComponent from "@/components/product-box";
import ProductsGridComponent from "@/components/products-grid";

export default function NewProductsComponent({ products }: any) {
    return (
        <CenterComponent>
            <SectionTitle>New Arrivals</SectionTitle>
            <ProductsGridComponent products={products} />
        </CenterComponent>
    );
}
