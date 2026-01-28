// api/autojoiner.js
export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';
  
  if (userAgent.toLowerCase().includes('roblox')) {
    // Return your Lua script
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('print("Hello from Roblox!")');
  } else {
    // Rickroll decoy
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(`<!DOCTYPE html>
<html>
<head>
  <title>404 - Not Found</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background: #000;
      overflow: hidden;
    }
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
    }
  </style>
</head>
<body>
  <iframe 
    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&loop=1&playlist=dQw4w9WgXcQ" 
    allow="autoplay; encrypted-media" 
    allowfullscreen>
  </iframe>
</body>
</html>`);
  }
}
