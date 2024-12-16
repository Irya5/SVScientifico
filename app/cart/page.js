'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ContactSection from '@/components/ContactSection';

export default function Cart() {
    const [cart, setCart] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
    }, []);

    const handleRemoveFromCart = (productToRemove) => {
        const updatedCart = cart.filter((product) => product.ProductName !== productToRemove.ProductName);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Persist to localStorage
    };

    const handleCheckout = () => {
        // Create the email content (plain text format)
        const emailSubject = "Please provide Quotation of the following items";
        const emailBody = `
            Order Details:
            =========================
            ${cart.map((product) => `
            Product Name: ${product.ProductName}
            Pack: ${product.selectedPackSize}
            =========================
            `).join('')}
        `;

        // URL encode the subject and body
        const encodedSubject = encodeURIComponent(emailSubject);
        const encodedBody = encodeURIComponent(emailBody);

        // Open Gmail compose in browser with pre-filled subject and body
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=svscientificco@gmail.com&su=${encodedSubject}&body=${encodedBody}`;

        // Open Gmail compose in a new tab or window
        window.open(gmailLink, '_blank');

        // After sending the email, clear the cart
        setCart([]); // Clear the cart state
        localStorage.removeItem('cart'); // Remove cart data from localStorage
    };


    if (cart.length === 0) {
        return (
            <div className="bg-[#FAFCFF] py-20 px-4 md:px-24">
                <div className="text-center mt-20">
                    <h2>Your cart is empty</h2>
                </div>
                <div>
                    <ContactSection />
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#FAFCFF] py-20 px-4 md:px-24">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6">Your Shopping Cart</h2>

                <div className="space-y-4">
                    {cart.map((product, index) => (
                        <div key={index} className="flex justify-between items-center py-4 border-b border-[#E4E8ED]">
                            <div className="flex flex-col">
                                <h3 className="font-medium text-[#242E49]">{product.ProductName}</h3>
                                <p className="text-sm text-[#5D6A85]">Pack: {product.selectedPackSize}</p>
                            </div>
                            <button
                                className="text-red-500 hover:text-red-700"
                                onClick={() => handleRemoveFromCart(product)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-6 flex justify-between items-center">
                    <button
                        onClick={() => router.push('/products')}
                        className="px-6 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                    >
                        Continue Shopping
                    </button>
                    <button
                        onClick={handleCheckout}
                        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        Checkout
                    </button>
                </div>
            </div>
            <div>
                <ContactSection />
            </div>
        </div>
    );
}
