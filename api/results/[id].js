module.exports = async function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({error:'Method not allowed'});
  const id = req.query.id;
  try {
    const r = await fetch('https://soundraw.io/api/v3/results/' + id, {
      headers: {'Authorization': 'Bearer bW9vZHN0cmVhbSBhaSB0ZXN0'}
    });
    const d = await r.json();
    res.status(r.status).json(d);
  } catch(e) {
    res.status(500).json({error: String(e)});
  }
};
