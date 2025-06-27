'use client';

import { type FormEvent, useState } from 'react';

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import type { StripeCardElement } from '@stripe/stripe-js';

import { selectCartTotal } from '@/store/cart/cart.selector';
import { useAppSelector } from '@/store/store';
import { selectCurrentUser } from '@/store/user/user.selector';

import Button from '../button/button.component';

const ifValidCardElement = (card: StripeCardElement | null): card is StripeCardElement =>
  card !== null;

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useAppSelector(selectCartTotal);
  const currentUser = useAppSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessingPayment(true);

    // change url and uncomment appropriate func in api folder when deployed not on Netlify
    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then(res => res.json());

    const { clientSecret } = response;

    const cardDetails = elements.getElement(CardElement);

    if (!ifValidCardElement(cardDetails)) return;

    elements.getElement(CardElement);
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest',
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful');
      }
    }
  };

  return (
    <div className="flex h-[300px] flex-col items-center justify-center">
      <form onSubmit={paymentHandler} className="h-[100px] min-w-[500px]">
        <h2 className="mb-4 text-xl font-semibold">Credit Card Payment:</h2>
        <CardElement className="border-b border-gray-400 p-2" />
        <div className="mt-4 flex justify-end">
          <Button type="submit" isLoading={isProcessingPayment} buttonType="inverted">
            Pay now
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
