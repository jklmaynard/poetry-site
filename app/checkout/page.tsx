'use client'
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

export default function CheckoutPage() {
    const searchParams = useSearchParams();
    const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`);
    const [clientSecret, setClientSecret] = useState<string | null>(null);

    useEffect(() => {
        const bookId = searchParams.get('bookId')
        const quantity = parseInt(searchParams.get('quantity') || '1', 10)
    
        if (!bookId || isNaN(quantity)) return
    
        fetch('/api/checkout-session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ bookId, quantity }),
        })
          .then(res => res.json())
          .then(data => {
            if (data.clientSecret) {
              setClientSecret(data.clientSecret)
            }
          })
      }, [searchParams])

      if (!clientSecret) {
        return <div>Loading...</div>
      }

    return (
        <EmbeddedCheckoutProvider
            stripe={ stripePromise }
            options={{ clientSecret }}
        >
            <EmbeddedCheckout/>
        </EmbeddedCheckoutProvider>
    )
}