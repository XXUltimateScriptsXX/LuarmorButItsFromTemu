// api/autojoiner.js
export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';
  
  if (userAgent.toLowerCase().includes('roblox')) {
    // Return your Lua script
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('print("Hello from Roblox!")');
  } else {
    // Redirect directly to Rick Astley video MP4
    res.redirect(302, 'https://ia800501.us.archive.org/11/items/Rick_Astley_Never_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.mp4');
  }
}
