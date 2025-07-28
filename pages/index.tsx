import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = async () => {
    try {
      await axios.post('/api/subscribe', { email });
      setSubmitted(true);
      setEmail('');
    } catch (err) {
      alert('Failed to subscribe. Please try again.');
    }
  };

  const articles = [
    {
      title: 'How AI Will Change Everything',
      url: 'https://example.com/ai-future',
      source: '@naval on X'
    },
    {
      title: 'Hacker News Top Startup Picks',
      url: 'https://example.com/startups-hn',
      source: 'Hacker News'
    },
    {
      title: 'Productivity Hacks Used by Founders',
      url: 'https://example.com/productivity',
      source: '@paulg on X'
    }
  ];

  return (
    <div className="min-h-screen px-4 py-10 max-w-xl mx-auto">
      <Head>
        <title>What Are Smart People Reading?</title>
      </Head>

      <h1 className="text-3xl font-bold mb-2 text-center">What Are Smart People Reading?</h1>
      <p className="text-center text-gray-500 mb-6">Top 3 articles from X and Hacker News</p>

      <div className="space-y-4 mb-8">
        {articles.map((a, i) => (
          <div key={i} className="border p-4 rounded-lg shadow-sm">
            <a href={a.url} target="_blank" className="text-xl font-semibold hover:underline">{a.title}</a>
            <p className="text-sm text-gray-500">{a.source}</p>
          </div>
        ))}
      </div>

      {!submitted ? (
        <div className="bg-gray-100 p-4 rounded-xl">
          <p className="mb-2 font-semibold">Subscribe to Smart Feed Digest:</p>
          <input
            className="border px-3 py-2 rounded w-full mb-2"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubscribe} className="bg-black text-white px-4 py-2 rounded w-full">
            Subscribe
          </button>
        </div>
      ) : (
        <p className="text-green-600 text-center font-semibold">✅ You're subscribed!</p>
      )}

      <div className="text-xs text-center text-gray-400 mt-10">
        Affiliate links: Blinkist, Notion Templates • Built with ❤️
      </div>
    </div>
  );
}
