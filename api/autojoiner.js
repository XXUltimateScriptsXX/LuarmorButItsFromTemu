// api/autojoiner.js
export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';
  
  if (userAgent.toLowerCase().includes('roblox')) {
    // Return your Lua script
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('print("Hello from Roblox!")');
  } else {
    // More subtle decoy page
    res.setHeader('Content-Type', 'text/html');
    res.status(404).send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>404 - Page Not Found</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #f5f5f5;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      color: #333;
    }
    .container {
      text-align: center;
      padding: 2rem;
      max-width: 600px;
    }
    h1 {
      font-size: 120px;
      font-weight: 700;
      color: #000;
      margin-bottom: 1rem;
    }
    h2 {
      font-size: 24px;
      font-weight: 400;
      margin-bottom: 1rem;
      color: #666;
    }
    p {
      font-size: 16px;
      line-height: 1.6;
      color: #999;
      margin-bottom: 2rem;
    }
    a {
      display: inline-block;
      padding: 12px 24px;
      background: #000;
      color: #fff;
      text-decoration: none;
      border-radius: 4px;
      transition: background 0.3s;
    }
    a:hover {
      background: #333;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
    <a href="/">Go to Homepage</a>
  </div>
</body>
</html>`);
  }
}
