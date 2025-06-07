'use client';
import { useState } from 'react';
import Image from 'next/image';
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

        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 gap-8">
            <div className="w-full md:w-auto flex justify-center">
                <Image
                src={book.coverImage}
                alt={book.title}
                width={300}
                height={300}
                className="rounded-lg shadow-md"
                />
            </div>
            <div className="w-full md:max-w-md space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">{book.title}</h2>
                <p className="text-gray-600">{book.description}</p>
                <p className="text-lg font-medium text-gray-800">Price: ${(book.price / 100).toFixed(2)}</p>

                <div className="flex items-center gap-4">
                <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    min="1"
                    className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleAddToCart}
                    className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                    Add to Cart
                </button>
                </div>
            </div>
        </div>
    );
}