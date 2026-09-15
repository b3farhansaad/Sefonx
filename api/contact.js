// Vercel serverless function — runs on the server, never shipped to the browser.
// The Discord webhook URL lives only in this function's environment (set it
// in Vercel Project Settings > Environment Variables as DISCORD_WEBHOOK_URL,
// WITHOUT a VITE_ prefix so it's never bundled into client-side JS).
export default async function handler(req, res) {
  // Allow the contact form to call this endpoint from a different origin
  // too (e.g. a GitHub Pages-hosted frontend pointed at this Vercel function).
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('DISCORD_WEBHOOK_URL is not set in this environment.');
    return res.status(500).json({ error: 'Server is not configured' });
  }

  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing name, email, or message' });
  }

  try {
    const discordRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        embeds: [
          {
            author: { name: '📬 New Contact Message!' },
            title: '━━━━━━━━━━━━━━━',
            description: `**From:** ${name}\n**Email:** ${email}`,
            color: 0xd9282d,
            fields: [{ name: '💬 Message', value: `>>> ${message}`, inline: false }],
            footer: { text: 'Sefonx Portfolio • Contact Form' },
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    });

    if (!discordRes.ok) {
      throw new Error(`Discord responded with ${discordRes.status}`);
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Failed to forward contact message to Discord:', err);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
