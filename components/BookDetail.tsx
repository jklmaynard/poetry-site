'use client';
import { useState } from 'react';
import { Book } from '../types/book';

export default function BookDetail({ book }: { book: Book }) {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(e.target.value));
    };

    const handleAddToCart = async () => {
        const res = await fetch('/api/checkout-session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ book, quantity }),
          });
      
          const data = await res.json();
          if (data?.url) {
            window.location.href = data.url;
          } else {
            alert('Failed to create checkout session');
          }
    }

    return (
        <div>
            <h1>{book.title}</h1>
            <p>{book.description}</p>
            <p>Price: ${book.price / 100}</p>
            <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
            />
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}