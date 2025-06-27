'use client';

import { Elements } from '@stripe/react-stripe-js';

import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import { stripePromise } from '@/utils/stripe/stripe.utils';

import { AuthListener } from '@/components/AuthListener/AuthListener';
import { Loader } from '@/components/loader/Loader';

import { persistor, store } from '@/store/store';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <Elements stripe={stripePromise}>
          <AuthListener />
          {children}
        </Elements>
      </PersistGate>
    </Provider>
  );
}
