// example func for different deployment platform (not netlify)

// import { NextRequest, NextResponse } from 'next/server';

// import Stripe from 'stripe';

// const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
// if (!stripeSecretKey) {
//   throw new Error('STRIPE_SECRET_KEY is not defined in environment variables');
// }

// const stripe = new Stripe(stripeSecretKey);

// type CreatePaymentRequest = {
//   amount: number;
// };

// export async function POST(request: NextRequest) {
//   try {
//     const body: CreatePaymentRequest = await request.json();

//     if (typeof body.amount !== 'number' || isNaN(body.amount) || body.amount <= 0) {
//       return NextResponse.json({ error: "Invalid or missing 'amount'" }, { status: 400 });
//     }

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: body.amount,
//       currency: 'usd',
//       payment_method_types: ['card'],
//     });

//     return NextResponse.json({ clientSecret: paymentIntent.client_secret }, { status: 200 });
//   } catch (error) {
//     console.error('Stripe payment intent error:', error);
//     return NextResponse.json(
//       {
//         error: error instanceof Error ? error.message : 'An unexpected error occurred',
//       },
//       { status: 500 },
//     );
//   }
// }
