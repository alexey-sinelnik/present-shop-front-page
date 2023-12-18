import {
    ProductsGridComponentProps,
    ProductType
} from "@/common/types/product";
import ProductBoxComponent from "@/components/product-box";
import { ProductsGrid } from "@/styles/components/new-products";

export default function ProductsGridComponent({
    products
}: ProductsGridComponentProps) {
    return (
        <ProductsGrid>
            {products.length > 0 &&
                products.map((product: ProductType) => (
                    <ProductBoxComponent {...product} key={product._id} />
                ))}
        </ProductsGrid>
    );
}
