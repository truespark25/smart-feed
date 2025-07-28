export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    const response = await fetch('https://api.buttondown.email/v1/subscribers', {
      method: 'POST',
      headers: {
        Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      res.status(200).json({ message: 'Subscribed!' });
    } else {
      res.status(500).json({ message: 'Failed to subscribe' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
