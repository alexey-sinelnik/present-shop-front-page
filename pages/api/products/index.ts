import { mongooseConnect } from "@/lib/mongoose";
import { Request, Response } from "express";
import { Product } from "@/models/products";

export default async function handle(req: Request, res: Response) {
    await mongooseConnect();
    const { ids } = req.body;

    res.json(await Product.find({ _id: ids }));
}
