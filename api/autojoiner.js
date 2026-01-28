// api/autojoiner.js
export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';
  
  if (userAgent.toLowerCase().includes('roblox')) {
    // Return your Lua script
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('print("Hello from Roblox!")');
  } else {
    // Video demo page (like w3schools)
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(`<!DOCTYPE html>
<html>
<head>
  <title>Video Demo</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 40px;
      background: #fff;
    }
    h2 {
      color: #04AA6D;
    }
    video {
      max-width: 100%;
      height: auto;
    }
  </style>
</head>
<body>
  <h2>HTML Video Example</h2>
  <video width="320" height="240" controls>
    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</body>
</html>`);
  }
}
