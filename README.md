# valentine-2026


# 💕 Valentine's Day Interactive Website

A beautiful, romantic, and fully animated Valentine's Day website to surprise your special someone! Features include an animated heart tree intro, interactive gifts, floating animations, and personalized love messages.

## 🌟 Live Demo

Check out the live version: [Valentine Website Demo]()

---

## ✨ Features

### 🎨 Beautiful Animations
- **Animated Heart Tree Intro** - A stunning tree that grows with colorful heart leaves
- **Floating Hearts Background** - Romantic hearts continuously floating across the screen
- **Confetti Celebration** - Burst of confetti when they say "Yes!"
- **Smooth Transitions** - Professional fade-in/fade-out effects between sections

### 💝 Interactive Elements
- **Moving "No" Button** - The "No" button playfully runs away when clicked, with witty messages
- **Click-to-Skip Intro** - Users can click anywhere to skip the tree animation
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices

### 🎁 Three Interactive Gifts

#### 1. 🌹 Floating Rose Gift
- Beautiful rose/lily image with gentle floating animation
- Falling rose petals animation
- 4 sticky notes with customizable love messages
- Hover effects on notes
- Glowing effects around the flower

#### 2. 💌 Love Letter Gift
- Realistic envelope with animated flap
- Golden wax seal with heart
- Beautiful parchment-style letter
- Smooth opening animation
- Fully customizable letter content

#### 3. 🎵 Photo Collage & Music
- Scrolling photo collage (supports 8+ photos)
- Background music player
- Scrolling song lyrics overlay
- 5-column animated photo grid
- Auto-looping photos

---

## 🎨 Customization Guide

### Changing Names and Messages

#### Main Question
**File:** `index.html` (Line ~28)
```html
<h1>Will You Be My Valentine?</h1>
```

#### Love Letter Content
**File:** `index.html` (Lines ~91-93)
```html
<div class="letter">
    <h3>To My love 💝</h3>
    <p>Your personalized message here...</p>
    ...
</div>
```

#### Sticky Notes on Rose
**File:** `index.html` (Lines ~70-81)
```html
<div class="note note-1"><p>Your message here</p></div>
<div class="note note-2"><p>Your message here</p></div>
<div class="note note-3"><p>Your message here</p></div>
<div class="note note-4"><p>Your message here</p></div>
```

#### "No" Button Messages
**File:** `script.js` (Lines ~99-104)
```javascript
const noMessages = [
    "what", "really", "are u sure ??", "I know u want too...", 
    // Add or modify messages here
];
```

### Adjusting Animation Speeds

#### Lyrics Scroll Speed
**File:** `style.css` (Line ~556)
```css
animation: lyrics 300s linear infinite;  /* Change 300s to adjust speed */
```

#### Tree Animation
**File:** `script.js` (Line ~40)
```javascript
setTimeout(transitionToMain, 2000); /* Change 2000ms to adjust delay */
```

### Adding More Photos

**File:** `script.js` (Line ~185)
```javascript
const images = ['photo1.jpg','photo2.jpg','photo3.jpg', /* add more here */];
```

You can add as many photos as you want! Just add more filenames to the mainfile

---

## 📁 Project Structure
```
valentine-website/
│
├── index.html          # Main HTML file
├── style.css           # All styling and animations
├── script.js           # Interactive functionality
│
├── photo1.jpg          # Collage photo 1
├── photo2.jpg          # Collage photo 2
├── photo3.jpg          # Collage photo 3
├── photo4.jpg          # Collage photo 4
├── photo5.jpg          # Collage photo 5
├── photo6.jpg          # Collage photo 6
├── photo7.jpg          # Collage photo 7
├── photo8.jpg          # Collage photo 8
│
├── flower.png            # Rose/flower for Gift 1
├── image1.jpg          # Main page photo 1
├── image2.jpg          # Main page photo 2
└── song.mp3            # Background music for Gift 3
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- 🐛 Report bugs
- 💡 Suggest new features
- 🔧 Submit pull requests
- ⭐ Star this repository if you like it!

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**TL;DR:** You can use this project for anything, including commercial purposes, just keep the license file.

---

## 📧 Contact & Support

If you have questions or need help:
- 🐛 Open an [Issue]
- ⭐ Star this repo if you found it useful!
- 🔄 Share it with others who might need it!

---

## 🎉 Show Your Support

If this project helped you create something special, consider:
- ⭐ Starring the repository
- 🍴 Forking it for your own use
- 📢 Sharing it with friends
- 💬 Leaving feedback in Issues

---


### Made with ❤️ for Valentine's Day

**Happy Valentine's Day! 💕**
