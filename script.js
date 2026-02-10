const canvas = document.getElementById('treeCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const startX = canvas.width / 2;
const startY = canvas.height;
const trunkLength = 150;
const branchColor = "#ffb7b2";
const leafColors = ["#ff9ff3", "#feca57", "#ff6b6b", "#48dbfb", "#1dd1a1"];

let isTreeDone = false;

function drawHeart(x, y, size, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
    ctx.bezierCurveTo(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
    ctx.fill();
}

const branches = [];
function generateTree(x, y, len, angle, width, depth) {
    branches.push({ x, y, len, angle, width, depth });
    if (depth < 1) return;
    const leftAngle = angle - 25 + (Math.random() * 10 - 5);
    const rightAngle = angle + 25 + (Math.random() * 10 - 5);
    generateTree(x + Math.cos((angle - 90) * Math.PI / 180) * len,
        y + Math.sin((angle - 90) * Math.PI / 180) * len,
        len * 0.75, leftAngle, width * 0.7, depth - 1);
    generateTree(x + Math.cos((angle - 90) * Math.PI / 180) * len,
        y + Math.sin((angle - 90) * Math.PI / 180) * len,
        len * 0.75, rightAngle, width * 0.7, depth - 1);
}

generateTree(startX, startY, trunkLength, 0, 15, 9);

let branchIndex = 0;
function animateTree() {
    if (branchIndex < branches.length) {
        for (let i = 0; i < 2; i++) {
            if (branchIndex >= branches.length) break;
            const b = branches[branchIndex];
            ctx.beginPath();
            ctx.strokeStyle = branchColor;
            ctx.lineWidth = b.width;
            ctx.moveTo(b.x, b.y);
            const endX = b.x + Math.cos((b.angle - 90) * Math.PI / 180) * b.len;
            const endY = b.y + Math.sin((b.angle - 90) * Math.PI / 180) * b.len;
            ctx.lineTo(endX, endY);
            ctx.stroke();
            if (b.depth <= 2) {
                drawHeart(endX, endY, 15, leafColors[Math.floor(Math.random() * leafColors.length)]);
            }
            branchIndex++;
        }
        requestAnimationFrame(animateTree);
    } else {
        if (!isTreeDone) {
            isTreeDone = true;
            document.getElementById('intro-text').classList.add('visible');
            setTimeout(transitionToMain, 2000); // Reduced from 3000 to 2000
        }
    }
}

animateTree();

// Allow clicking to skip intro
document.getElementById('intro-screen').addEventListener('click', () => {
    if (!isTreeDone) {
        isTreeDone = true;
        document.getElementById('intro-text').classList.add('visible');
    }
    transitionToMain();
});

function transitionToMain() {
    const intro = document.getElementById('intro-screen');
    const app = document.getElementById('main-app');
    intro.style.opacity = 0;
    setTimeout(() => {
        intro.style.display = 'none';
        app.classList.remove('hidden');
        app.style.display = 'block';
        setTimeout(() => {
            app.classList.add('visible');
            app.style.opacity = 1;
        }, 50);
        startBackgroundHearts();
    }, 1000);
}

const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const nextBtn = document.getElementById('go-to-gifts');

const noMessages = [
    "what", "really", "are u sure ??", "I know u want too...",
    "I promise i am fun", "nice try", "missed me",
    "Have a heart ??", "Or sympathy??", "u think I'm not good enough 😔?",
    "hehe not happening", "keep trying", "u have to accept it"
];

let noIndex = 0;
noBtn.addEventListener('click', (e) => {
    if (noIndex < noMessages.length) {
        noBtn.innerText = noMessages[noIndex];
        noIndex++;

        // Move button to random position (but keep it visible on screen)
        if (noIndex < noMessages.length) {
            const maxX = window.innerWidth - noBtn.offsetWidth - 20;
            const maxY = window.innerHeight - noBtn.offsetHeight - 20;
            const randomX = Math.random() * maxX;
            const randomY = Math.random() * maxY;

            noBtn.style.position = 'fixed';
            noBtn.style.left = randomX + 'px';
            noBtn.style.top = randomY + 'px';
        } else {
            // At the last message, make it unclickable but keep same color
            noBtn.style.pointerEvents = 'none';
            noBtn.style.cursor = 'not-allowed';
        }
    }
});

yesBtn.addEventListener('click', () => {
    const end = Date.now() + 3000;
    const colors = ['#bb0000', '#ffffff'];
    (function frame() {
        confetti({ particleCount: 2, angle: 60, spread: 55, origin: { x: 0 }, colors: colors });
        confetti({ particleCount: 2, angle: 120, spread: 55, origin: { x: 1 }, colors: colors });
        if (Date.now() < end) requestAnimationFrame(frame);
    }());
    setTimeout(() => {
        document.getElementById('page1').classList.add('hidden');
        document.getElementById('page2').classList.remove('hidden');
    }, 1000);
});

nextBtn.addEventListener('click', () => {
    document.getElementById('page2').classList.add('hidden');
    document.getElementById('page3').classList.remove('hidden');
});

document.querySelectorAll('.gift-box').forEach(box => {
    box.addEventListener('click', () => {
        const giftId = box.getAttribute('data-gift');
        document.getElementById(giftId).classList.remove('hidden');
        if (giftId === 'gift-collage') startCollage();
        if (giftId === 'gift-rose') startPetals();
    });
});

document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        this.parentElement.classList.add('hidden');
        if (this.classList.contains('close-music')) {
            const audio = document.getElementById('bg-music');
            audio.pause();
            audio.currentTime = 0;
        }
        // Stop petals when closing rose gift
        if (this.parentElement.id === 'gift-rose') {
            stopPetals();
        }
    });
});

document.querySelector('.envelope-container').addEventListener('click', function () {
    this.classList.toggle('open');
});

function startCollage() {
    const audio = document.getElementById('bg-music');
    audio.play().catch(e => console.log("Audio play failed"));

    const cols = document.querySelectorAll('.col');

    // Ensure all 8 filenames are here
    const images = [
        "photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg"
    ];

    cols.forEach((col, colIdx) => {
        col.innerHTML = '';
        // We add 12 images per column to ensure the scroll is seamless
        for (let i = 0; i < 12; i++) {
            let img = document.createElement('img');

            // This logic shifts the starting photo for each column
            // so they don't all look identical
            let imageIndex = (i + colIdx) % images.length;

            img.src = images[imageIndex];
            img.className = 'photo-item';
            col.appendChild(img);
        }
    });
}

function startBackgroundHearts() {
    const container = document.getElementById('hearts-bg');
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = '❤';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }, 300);
}

// Floating petals for rose gift
let petalInterval;
function startPetals() {
    const container = document.querySelector('#gift-rose .rose-container');
    petalInterval = setInterval(() => {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.left = Math.random() * 100 + '%';
        petal.style.animationDuration = (Math.random() * 4 + 4) + 's';
        petal.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(petal);
        setTimeout(() => petal.remove(), 8000);
    }, 300);
}

function stopPetals() {
    if (petalInterval) {
        clearInterval(petalInterval);
        petalInterval = null;
    }
    // Remove existing petals
    document.querySelectorAll('.petal').forEach(p => p.remove());
}