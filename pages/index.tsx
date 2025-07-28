import React, { useState } from 'react';
import axios from 'axios';
import '../styles/globals.css';

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubscribe = async () => {
    try {
      await axios.post('/api/subscribe', { email });
      setStatus('✅ Subscribed successfully!');
      setEmail('');
    } catch (error) {
      setStatus('❌ Subscription failed.');
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">🧠 What Are Smart People Reading?</h1>
      <p className="mb-6 text-center max-w-md">Curated top articles from X/Twitter & Hacker News. Join 1000+ smart readers.</p>

      <div className="flex gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 border rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleSubscribe}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Subscribe
        </button>
      </div>
      {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
    </main>
  );
}
