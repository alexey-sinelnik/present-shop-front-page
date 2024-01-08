import { mongooseConnect } from "@/lib/mongoose";
import { Request, Response } from "express";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import { buffer } from "micro";
import { StripeEventType } from "@/common/types/orders";
import { Order } from "@/models/orders";

const endpointSecret =
    "whsec_34e60445c8d7bf5379bac7084dc9071c0737bb695f09868195b8528c4c0af563";

export default async function handle(req: Request, res: Response) {
    await mongooseConnect();

    const sig = req.headers["stripe-signature"];

    let event;

    try {
        event = stripe.webhooks.constructEvent(
            await buffer(req),
            sig,
            endpointSecret
        );
    } catch (err) {
        res.status(400).send(`Webhook Error: ${(err as Error).message}`);
        return;
    }

    switch (event.type) {
        case "checkout.session.completed":
            const data: StripeEventType = event.data.object;
            const orderId: string = data.metadata.orderId;
            const paid: boolean = data.payment_status === "paid";
            if (orderId && paid) {
                await Order.findByIdAndUpdate(orderId, { paid: true });
            }
            break;
        default:
            console.log(`Unhandled event type ${event.type}`);
    }
    res.status(200).send("Success");
}

export const config = {
    api: { bodyParser: false }
};
