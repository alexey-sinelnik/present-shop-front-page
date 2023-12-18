import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";

export default async function handle(
    req: { body: { ids: string[] } },
    res: { json: (arg0: any[]) => void }
) {
    await mongooseConnect();
    const { ids } = req.body;
    res.json(await Product.find({ _id: ids }));
}
