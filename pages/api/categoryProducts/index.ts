import { Product } from "@/models/products";
import { Request, Response } from "express";
import { mongooseConnect } from "@/lib/mongoose";
import { ProductQueryType } from "@/common/types/categories";

export default async function handle(req: Request, res: Response) {
    await mongooseConnect();
    const { categories, sort, ...filters } = req.query;

    const [sortField, sortOrder] =
        sort !== undefined && typeof sort === "string" ? sort.split("-") : "";

    let productQuery: ProductQueryType = {} as ProductQueryType;

    if (categories && typeof categories === "string") {
        productQuery = {
            category: categories.split(",")
        };
    }

    if (Object.keys(filters).length > 0) {
        Object.keys(filters).forEach((element) => {
            productQuery["properties." + element] = filters[element];
        });
    }

    res.json(
        await Product.find(productQuery, null, {
            sort: { [sortField]: sortOrder === "asc" ? 1 : -1 }
        })
    );
}
