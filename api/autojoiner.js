// api/autojoiner.js
export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';
  
  if (userAgent.toLowerCase().includes('roblox')) {
    // Return your Lua script
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('print("Hello from Roblox!")');
  } else {
    // Modern UI with troll button
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Access Restricted</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 20px;
    }
    .container {
      background: white;
      padding: 60px 40px;
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      text-align: center;
      max-width: 500px;
      width: 100%;
    }
    .icon {
      font-size: 64px;
      margin-bottom: 20px;
    }
    h1 {
      font-size: 28px;
      font-weight: 700;
      color: #2d3748;
      margin-bottom: 16px;
      line-height: 1.3;
    }
    p {
      font-size: 16px;
      color: #718096;
      margin-bottom: 32px;
      line-height: 1.6;
    }
    .btn {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      padding: 16px 48px;
      font-size: 16px;
      font-weight: 600;
      border-radius: 12px;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
      box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
    }
    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
    }
    .btn:active {
      transform: translateY(0);
    }
    .rickroll {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #000;
      z-index: 9999;
    }
    .rickroll iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="icon">🔒</div>
    <h1>You Can't View This Content</h1>
    <p>Please Run In A Roblox Executor</p>
    <button class="btn" onclick="upload()">Upload</button>
  </div>

  <div class="rickroll" id="rickroll">
    <iframe 
      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&loop=1&playlist=dQw4w9WgXcQ" 
      allow="autoplay; encrypted-media" 
      allowfullscreen>
    </iframe>
  </div>

  <script>
    function upload() {
      document.getElementById('rickroll').style.display = 'block';
    }
  </script>
</body>
</html>`);
  }
}
