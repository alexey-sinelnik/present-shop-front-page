import { Request, Response } from "express";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";
import { Order } from "@/models/order";
import { ProductType } from "@/common/types/product";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handle(req: Request, res: Response) {
    if (req.method !== "POST") {
        res.json("should be a POST request");
        return;
    }

    await mongooseConnect();
    const { name, email, city, postalCode, street, country, cartProducts } =
        req.body;

    const productsIds = cartProducts;
    const uniqueIds = [...new Set(productsIds)];
    const productsInfos = await Product.find({ _id: uniqueIds }).exec();

    let line_items = [];

    for (const productId of uniqueIds) {
        const productInfo = productsInfos.find(
            (product: ProductType) => product._id.toString() === productId
        );
        const quantity =
            productsIds.filter((id: string) => id === productId)?.length || 0;
        if (quantity > 0) {
            line_items.push({
                quantity,
                price_data: {
                    currency: "USD",
                    product_data: { name: productInfo.title },
                    unit_amount: quantity * productInfo.price * 100
                }
            });
        }
    }

    const order = await Order.create({
        line_items,
        name,
        email,
        city,
        postalCode,
        street,
        country,
        paid: false
    });

    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: "payment",
        customer_email: email,
        success_url: process.env.URL + "/cart?success=1",
        cancel_url: process.env.URL + "/cart?canceled=1",
        metadata: { orderId: order._id.toString() }
    });

    res.json({
        url: session.url
    });
}
