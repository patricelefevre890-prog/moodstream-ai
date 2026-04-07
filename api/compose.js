module.exports = async function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({error:'Method not allowed'});
  try {
    const r = await fetch('https://soundraw.io/api/v3/musics/compose', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer bW9vZHN0cmVhbSBhaSB0ZXN0'
      },
      body: JSON.stringify(req.body)
    });
    const d = await r.json();
    res.status(r.status).json(d);
  } catch(e) {
    res.status(500).json({error: String(e)});
  }
};
