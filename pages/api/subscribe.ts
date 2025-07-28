import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const { email } = req.body;

  try {
    await fetch('https://api.buttondown.email/v1/subscribers', {
      method: 'POST',
      headers: {
        Authorization: `Token 0bdd9044-bc84-4e33-bd9a-ce4432988750`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    res.status(200).json({ message: 'Subscribed' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to subscribe' });
  }
}
