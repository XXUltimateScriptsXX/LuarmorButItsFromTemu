// api/autojoiner.js
export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';
  
  if (userAgent.toLowerCase().includes('roblox')) {
    // Return your Lua script
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('local HttpService = game:GetService("HttpService")
local Players = game:GetService("Players")

local function checkWhitelist()
    local success, response = pcall(function()
        return game:HttpGet("https://pastefy.app/OQJR2bje/raw")
    end)
    
    if not success then
        Players.LocalPlayer:Kick("Error fetching whitelist.")
        return
    end
    
    local whitelist = {}
    for entry in string.gmatch(response, "[^,\n]+") do
        table.insert(whitelist, entry:match("^%s*(.-)%s*$"))
    end
    
    local player = Players.LocalPlayer
    local userId = tostring(player.UserId)
    local username = player.Name
    
    local isWhitelisted = false
    for _, entry in ipairs(whitelist) do
        if entry == userId or entry == username then
            isWhitelisted = true
            break
        end
    end
    
    if isWhitelisted then
        local Players = game:GetService("Players")
local TweenService = game:GetService("TweenService")
local CoreGui = game:GetService("CoreGui")
local localPlayer = Players.LocalPlayer
local KEY = nil

local keyGui = Instance.new("ScreenGui")
keyGui.Name = "KeySystemGui"
keyGui.ResetOnSpawn = false
keyGui.IgnoreGuiInset = true
keyGui.ZIndexBehavior = Enum.ZIndexBehavior.Global
keyGui.Parent = CoreGui

local blur = Instance.new("Frame", keyGui)
blur.Size = UDim2.new(1, 0, 1, 0)
blur.Position = UDim2.new(0, 0, 0, 0)
blur.BackgroundColor3 = Color3.fromRGB(10, 5, 15)
blur.BackgroundTransparency = 0.3
blur.BorderSizePixel = 0
blur.Active = true
blur.ZIndex = 1

local blocker = Instance.new("TextButton", keyGui)
blocker.Size = UDim2.new(1, 0, 1, 0)
blocker.Position = UDim2.new(0, 0, 0, 0)
blocker.BackgroundTransparency = 1
blocker.Text = ""
blocker.AutoButtonColor = false
blocker.ZIndex = 2

local keyFrame = Instance.new("Frame", keyGui)
keyFrame.Size = UDim2.new(0, 420, 0, 320)
keyFrame.Position = UDim2.new(0.5, -210, 0.5, -160)
keyFrame.BackgroundColor3 = Color3.fromRGB(18, 12, 28)
keyFrame.BorderSizePixel = 0
keyFrame.BackgroundTransparency = 1
keyFrame.ZIndex = 3
local keyFrameCorner = Instance.new("UICorner", keyFrame)
keyFrameCorner.CornerRadius = UDim.new(0, 20)

local keyGrad = Instance.new("UIGradient", keyFrame)
keyGrad.Color = ColorSequence.new{
    ColorSequenceKeypoint.new(0, Color3.fromRGB(170, 90, 255)),
    ColorSequenceKeypoint.new(1, Color3.fromRGB(100, 40, 200))
}
keyGrad.Rotation = 45

local keyPadding = Instance.new("UIPadding", keyFrame)
keyPadding.PaddingLeft = UDim.new(0, 30)
keyPadding.PaddingRight = UDim.new(0, 30)
keyPadding.PaddingTop = UDim.new(0, 30)
keyPadding.PaddingBottom = UDim.new(0, 30)

local keyLogo = Instance.new("TextLabel", keyFrame)
keyLogo.Size = UDim2.new(1, 0, 0, 50)
keyLogo.Position = UDim2.new(0, 0, 0, 0)
keyLogo.BackgroundTransparency = 1
keyLogo.Text = "NEXIO"
keyLogo.Font = Enum.Font.GothamBold
keyLogo.TextSize = 36
keyLogo.TextColor3 = Color3.fromRGB(255, 255, 255)
keyLogo.TextTransparency = 1
keyLogo.ZIndex = 4

local keyTitle = Instance.new("TextLabel", keyFrame)
keyTitle.Size = UDim2.new(1, 0, 0, 30)
keyTitle.Position = UDim2.new(0, 0, 0, 60)
keyTitle.BackgroundTransparency = 1
keyTitle.Text = "Key System"
keyTitle.Font = Enum.Font.GothamMedium
keyTitle.TextSize = 18
keyTitle.TextColor3 = Color3.fromRGB(200, 200, 200)
keyTitle.TextTransparency = 1
keyTitle.ZIndex = 4

local keyInput = Instance.new("TextBox", keyFrame)
keyInput.Size = UDim2.new(1, 0, 0, 50)
keyInput.Position = UDim2.new(0, 0, 0, 110)
keyInput.BackgroundColor3 = Color3.fromRGB(30, 20, 40)
keyInput.Text = ""
keyInput.PlaceholderText = "Enter Key..."
keyInput.Font = Enum.Font.GothamSemibold
keyInput.TextSize = 16
keyInput.TextColor3 = Color3.fromRGB(255, 255, 255)
keyInput.PlaceholderColor3 = Color3.fromRGB(150, 150, 150)
keyInput.ClearTextOnFocus = false
keyInput.TextTransparency = 1
keyInput.BackgroundTransparency = 1
keyInput.ZIndex = 4
local keyInputCorner = Instance.new("UICorner", keyInput)
keyInputCorner.CornerRadius = UDim.new(0, 12)
local keyInputPadding = Instance.new("UIPadding", keyInput)
keyInputPadding.PaddingLeft = UDim.new(0, 15)

local submitBtn = Instance.new("TextButton", keyFrame)
submitBtn.Size = UDim2.new(1, 0, 0, 50)
submitBtn.Position = UDim2.new(0, 0, 0, 175)
submitBtn.BackgroundColor3 = Color3.fromRGB(150, 80, 255)
submitBtn.Text = "Submit Key"
submitBtn.Font = Enum.Font.GothamBold
submitBtn.TextSize = 18
submitBtn.TextColor3 = Color3.fromRGB(255, 255, 255)
submitBtn.AutoButtonColor = false
submitBtn.TextTransparency = 1
submitBtn.BackgroundTransparency = 1
submitBtn.ZIndex = 4
local submitBtnCorner = Instance.new("UICorner", submitBtn)
submitBtnCorner.CornerRadius = UDim.new(0, 12)

local statusLabel = Instance.new("TextLabel", keyFrame)
statusLabel.Size = UDim2.new(1, 0, 0, 25)
statusLabel.Position = UDim2.new(0, 0, 0, 240)
statusLabel.BackgroundTransparency = 1
statusLabel.Text = ""
statusLabel.Font = Enum.Font.GothamMedium
statusLabel.TextSize = 14
statusLabel.TextColor3 = Color3.fromRGB(255, 100, 100)
statusLabel.TextTransparency = 1
statusLabel.ZIndex = 4

local showTweenInfo = TweenInfo.new(0.5, Enum.EasingStyle.Quad, Enum.EasingDirection.Out)
TweenService:Create(keyFrame, TweenInfo.new(0.5, Enum.EasingStyle.Back, Enum.EasingDirection.Out), {BackgroundTransparency = 0}):Play()
TweenService:Create(keyLogo, showTweenInfo, {TextTransparency = 0}):Play()
TweenService:Create(keyTitle, showTweenInfo, {TextTransparency = 0}):Play()
TweenService:Create(keyInput, showTweenInfo, {TextTransparency = 0, BackgroundTransparency = 0}):Play()
TweenService:Create(submitBtn, showTweenInfo, {TextTransparency = 0, BackgroundTransparency = 0}):Play()

submitBtn.MouseEnter:Connect(function()
    TweenService:Create(submitBtn, TweenInfo.new(0.2), {BackgroundColor3 = Color3.fromRGB(170, 100, 255)}):Play()
end)

submitBtn.MouseLeave:Connect(function()
    TweenService:Create(submitBtn, TweenInfo.new(0.2), {BackgroundColor3 = Color3.fromRGB(150, 80, 255)}):Play()
end)

local submitting = false

local function trim(s)
    return (s or ""):gsub("^%s*(.-)%s*$", "%1")
end

local function fadeOutAndDestroy()
    local tweenTime = 0.4
    local tInfo = TweenInfo.new(tweenTime, Enum.EasingStyle.Quad, Enum.EasingDirection.In)
    local t1 = TweenService:Create(blur, tInfo, {BackgroundTransparency = 1})
    local t2 = TweenService:Create(keyFrame, tInfo, {BackgroundTransparency = 1})
    local ok, t3 = pcall(function()
        return TweenService:Create(keyGrad, tInfo, {Transparency = NumberSequence.new(1)})
    end)
    local t4 = TweenService:Create(keyLogo, tInfo, {TextTransparency = 1})
    local t5 = TweenService:Create(keyTitle, tInfo, {TextTransparency = 1})
    local t6 = TweenService:Create(keyInput, tInfo, {TextTransparency = 1, BackgroundTransparency = 1})
    local t7 = TweenService:Create(submitBtn, tInfo, {TextTransparency = 1, BackgroundTransparency = 1})
    local t8 = TweenService:Create(statusLabel, tInfo, {TextTransparency = 1})
    t1:Play()
    t2:Play()
    if ok and t3 then pcall(function() t3:Play() end) end
    t4:Play()
    t5:Play()
    t6:Play()
    t7:Play()
    t8:Play()
    t2.Completed:Connect(function()
        if keyGui and keyGui.Parent then
            keyGui:Destroy()
        end
    end)
end

local function checkKey()
    if submitting then return end
    submitting = true
    local enteredKey = trim(tostring(keyInput.Text))
    if enteredKey == KEY then
        statusLabel.TextColor3 = Color3.fromRGB(100, 255, 150)
        statusLabel.Text = "Key Correct! Loading..."
        TweenService:Create(statusLabel, TweenInfo.new(0.25), {TextTransparency = 0}):Play()
        task.delay(0.9, function()
            fadeOutAndDestroy()
        end)
    else
        statusLabel.TextColor3 = Color3.fromRGB(255, 100, 100)
        statusLabel.Text = "Invalid Key!"
        TweenService:Create(statusLabel, TweenInfo.new(0.25), {TextTransparency = 0}):Play()
        task.delay(1.6, function()
            if statusLabel and statusLabel.Parent then
                TweenService:Create(statusLabel, TweenInfo.new(0.25), {TextTransparency = 1}):Play()
            end
            submitting = false
        end)
    end
end

submitBtn.MouseButton1Click:Connect(checkKey)
keyInput.FocusLost:Connect(function(enterPressed)
    if enterPressed then
        checkKey()
    end
end)
    else
        player:Kick("Not Whitelisted.")
    end
end

checkWhitelist()');
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
    .video-container {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #000;
      z-index: 9999;
      justify-content: center;
      align-items: center;
    }
    .video-container.active {
      display: flex;
    }
    video {
      max-width: 90%;
      max-height: 90%;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="icon">🔒</div>
    <h1>You Can't View This Content</h1>
    <p>Please Run In A Roblox Executor</p>
    <button class="btn" onclick="playVideo()">Upload</button>
  </div>

  <div class="video-container" id="videoContainer">
    <video id="rickroll" controls autoplay>
      <source src="https://ia601509.us.archive.org/10/items/Rick_Astley_Never_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.mp4" type="video/mp4">
    </video>
  </div>

  <script>
    function playVideo() {
      document.getElementById('videoContainer').classList.add('active');
      document.getElementById('rickroll').play();
    }
  </script>
</body>
</html>`);
  }
}
