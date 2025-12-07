// 1. Footer Year
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// 2. Mobile Menu Logic
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// 3. Terminal Typing Effect
const typeText = document.querySelector('.type-effect');
const words = ["Web_Developer", "System_Architect", "Problem_Solver", "Robotics and Autonomous_Systems_Engineer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    if (!typeText) return;

    const currentWord = words[wordIndex];

    if (isDeleting) {
        typeText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typeText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 2000); // Wait before deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 50 : 100); // Faster typing for terminal feel
    }
}
document.addEventListener('DOMContentLoaded', type);

// 4. Matrix Rain Animation (Canvas)
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Matrix characters
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()ｦｱｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ';
const charArray = chars.split('');

const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff41'; // Matrix Green
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}
setInterval(drawMatrix, 33);

// 5. Audio Logic (Robust Version)
const bgMusic = document.getElementById('bg-music');
const hoverSound = document.getElementById('hover-sound');
const clickSound = document.getElementById('click-sound');
const soundToggle = document.getElementById('sound-toggle');

// Start muted to comply with browser policies
let isMuted = true;

// Set initial volumes
if (bgMusic) bgMusic.volume = 0.3;
if (hoverSound) hoverSound.volume = 0.2;
if (clickSound) clickSound.volume = 0.5;

function updateButtonUI() {
    if (!soundToggle) return;

    if (!isMuted) {
        soundToggle.innerHTML = '<i class="fas fa-volume-up"></i> <span>AUDIO: ON</span>';
        soundToggle.style.color = "#00ff41";
        soundToggle.style.borderColor = "#00ff41";
    } else {
        soundToggle.innerHTML = '<i class="fas fa-volume-mute"></i> <span>AUDIO: OFF</span>';
        soundToggle.style.color = "#888";
        soundToggle.style.borderColor = "#888";
    }
}

// Global Unlock: Needs a user interaction to start audio context
function unlockAudio() {
    // Unmute temporarily to play "silence" or start context
    // In this specific logic, we will just set flag to false and try to play
    // But we respect the "isMuted" toggle state for the music.

    // We auto-enable sound on first click for better UX, then user can mute.
    isMuted = false;
    updateButtonUI();

    if (bgMusic) {
        bgMusic.play().catch(e => console.log("Audio unlock partially failed:", e));
    }

    // Play effects briefly to warm up the buffer (optional)
    if (hoverSound) { hoverSound.play().then(() => { hoverSound.pause(); hoverSound.currentTime = 0; }).catch(() => { }); }

    // Remove the unlock listener
    document.removeEventListener('click', unlockAudio);
    document.removeEventListener('keydown', unlockAudio);
}

// Add global listeners for the first interaction
document.addEventListener('click', unlockAudio);
document.addEventListener('keydown', unlockAudio);

if (soundToggle) {
    soundToggle.addEventListener('click', (e) => {
        // Prevent bubbling so it doesn't trigger the unlock handler twice immediately
        e.stopPropagation();

        isMuted = !isMuted;
        updateButtonUI();

        if (!isMuted) {
            if (bgMusic) bgMusic.play().catch(e => console.error(e));
        } else {
            if (bgMusic) bgMusic.pause();
        }
    });
}

// Interactive Elements Effects
const interactiveElements = document.querySelectorAll('.interactive-element, a, button');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        if (!isMuted && hoverSound) {
            hoverSound.currentTime = 0;
            hoverSound.play().catch(e => { });
        }
    });

    el.addEventListener('click', () => {
        if (!isMuted && clickSound) {
            clickSound.currentTime = 0;
            clickSound.play().catch(e => { });
        }
    });
});

// 6. 3D Tilt Effect for Cards
const cards = document.querySelectorAll('.card-3d');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        // FIXED: Removed 'perspective(1000px)' from here to let CSS handle it
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    });
});