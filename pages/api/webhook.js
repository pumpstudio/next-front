const endpointSecret = "whsec_86e38a95920c371d663bee5c94592594579f464060bb2961ad8c72da75ddc31b";

import { mongooseConnect } from "@/lib/mongoose"
import { Order } from "@/models/Order";
import { buffer } from "micro";
const stripe = require('stripe')(process.env.STRIPE_SK);

export default async function handler(req,res) {
  await mongooseConnect();
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(await buffer(req), sig, endpointSecret);
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const data = event.data.object;
      const orderId = data.metadata.orderId;
      const paid = data.payment_status === 'paid'
      if(orderId && paid) {
        await Order.findByIdAndUpdate(orderId,{
          paid:true,
        })
      }
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.status(200).send('ok')
}

export const config = {
  api: {bodyParser: false,}
}

//eager-led-nicer-gold
