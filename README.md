<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3D Pixel GitHub README</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
            font-family: 'Courier New', monospace;
            color: #00ff00;
            overflow-x: hidden;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
        }

        .pixel-title {
            font-size: 48px;
            text-align: center;
            margin-bottom: 30px;
            text-shadow: 
                3px 3px 0px #ff00ff,
                6px 6px 0px #00ffff,
                9px 9px 0px #ffff00;
            animation: float 3s ease-in-out infinite;
            font-weight: bold;
            letter-spacing: 4px;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px) rotateX(0deg); }
            50% { transform: translateY(-20px) rotateX(5deg); }
        }

        .subtitle {
            text-align: center;
            font-size: 24px;
            margin-bottom: 50px;
            color: #00ffff;
            text-shadow: 2px 2px 0px #ff00ff;
            animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }

        .pixel-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 20px;
            margin-bottom: 50px;
        }

        .pixel-box {
            background: rgba(0, 255, 255, 0.1);
            border: 3px solid #00ffff;
            padding: 20px;
            text-align: center;
            position: relative;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
        }

        .pixel-box::before {
            content: '';
            position: absolute;
            top: -3px;
            left: -3px;
            right: -3px;
            bottom: -3px;
            background: linear-gradient(45deg, #ff00ff, #00ffff, #ffff00);
            z-index: -1;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .pixel-box:hover {
            transform: translateY(-10px) scale(1.05);
            box-shadow: 0 10px 30px rgba(0, 255, 255, 0.6);
        }

        .pixel-box:hover::before {
            opacity: 1;
            animation: rotate 2s linear infinite;
        }

        @keyframes rotate {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }

        .skill-icon {
            font-size: 32px;
            margin-bottom: 10px;
            display: inline-block;
            animation: bounce 1s ease-in-out infinite;
        }

        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
        }

        .pixel-box:nth-child(1) .skill-icon { animation-delay: 0s; }
        .pixel-box:nth-child(2) .skill-icon { animation-delay: 0.1s; }
        .pixel-box:nth-child(3) .skill-icon { animation-delay: 0.2s; }
        .pixel-box:nth-child(4) .skill-icon { animation-delay: 0.3s; }
        .pixel-box:nth-child(5) .skill-icon { animation-delay: 0.4s; }
        .pixel-box:nth-child(6) .skill-icon { animation-delay: 0.5s; }
        .pixel-box:nth-child(7) .skill-icon { animation-delay: 0.6s; }
        .pixel-box:nth-child(8) .skill-icon { animation-delay: 0.7s; }
        .pixel-box:nth-child(9) .skill-icon { animation-delay: 0.8s; }
        .pixel-box:nth-child(10) .skill-icon { animation-delay: 0.9s; }
        .pixel-box:nth-child(11) .skill-icon { animation-delay: 1s; }

        .skill-name {
            font-size: 14px;
            color: #00ff00;
            font-weight: bold;
        }

        .section-title {
            font-size: 32px;
            margin: 40px 0 20px;
            text-align: center;
            color: #ffff00;
            text-shadow: 3px 3px 0px #ff00ff;
            animation: glow 2s ease-in-out infinite;
        }

        @keyframes glow {
            0%, 100% { text-shadow: 3px 3px 0px #ff00ff, 0 0 20px #ff00ff; }
            50% { text-shadow: 3px 3px 0px #ff00ff, 0 0 40px #ff00ff, 0 0 60px #ff00ff; }
        }

        .about-box {
            background: rgba(255, 0, 255, 0.1);
            border: 3px solid #ff00ff;
            padding: 30px;
            margin: 20px 0;
            box-shadow: 0 0 30px rgba(255, 0, 255, 0.3);
            position: relative;
            overflow: hidden;
        }

        .about-box::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(255, 0, 255, 0.05) 10px,
                rgba(255, 0, 255, 0.05) 20px
            );
            animation: scan 10s linear infinite;
        }

        @keyframes scan {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50%, 50%); }
        }

        .about-box p {
            position: relative;
            z-index: 1;
            line-height: 1.8;
            font-size: 16px;
        }

        .pixel-divider {
            height: 4px;
            background: linear-gradient(90deg, #ff00ff, #00ffff, #ffff00, #ff00ff);
            margin: 30px 0;
            animation: slide 3s linear infinite;
            background-size: 200% 100%;
        }

        @keyframes slide {
            0% { background-position: 0% 0%; }
            100% { background-position: 200% 0%; }
        }

        .particles {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        }

        .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: #00ffff;
            box-shadow: 0 0 10px #00ffff;
            animation: particle-float 4s ease-in-out infinite;
        }

        @keyframes particle-float {
            0%, 100% { 
                transform: translateY(0) translateX(0);
                opacity: 0;
            }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { 
                transform: translateY(-100vh) translateX(50px);
                opacity: 0;
            }
        }

        @media (max-width: 768px) {
            .pixel-title { font-size: 32px; }
            .subtitle { font-size: 18px; }
            .pixel-grid { grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); }
        }
    </style>
</head>
<body>
    <div class="particles" id="particles"></div>
    
    <div class="container">
        <h1 class="pixel-title">░▒▓ DEVELOPER ▓▒░</h1>
        <div class="subtitle">// Problem Solver & Code Architect //</div>

        <div class="pixel-divider"></div>

        <h2 class="section-title">⚡ TECH STACK ⚡</h2>
        
        <div class="pixel-grid">
            <div class="pixel-box">
                <div class="skill-icon">💻</div>
                <div class="skill-name">C++</div>
            </div>
            <div class="pixel-box">
                <div class="skill-icon">☕</div>
                <div class="skill-name">Java</div>
            </div>
            <div class="pixel-box">
                <div class="skill-icon">🔷</div>
                <div class="skill-name">JavaScript</div>
            </div>
            <div class="pixel-box">
                <div class="skill-icon">⚛️</div>
                <div class="skill-name">React</div>
            </div>
            <div class="pixel-box">
                <div class="skill-icon">🌐</div>
                <div class="skill-name">HTML</div>
            </div>
            <div class="pixel-box">
                <div class="skill-icon">🎨</div>
                <div class="skill-name">CSS</div>
            </div>
            <div class="pixel-box">
                <div class="skill-icon">🗄️</div>
                <div class="skill-name">MySQL</div>
            </div>
            <div class="pixel-box">
                <div class="skill-icon">🟢</div>
                <div class="skill-name">Node.js</div>
            </div>
            <div class="pixel-box">
                <div class="skill-icon">🍃</div>
                <div class="skill-name">MongoDB</div>
            </div>
            <div class="pixel-box">
                <div class="skill-icon">🐍</div>
                <div class="skill-name">Python</div>
            </div>
            <div class="pixel-box">
                <div class="skill-icon">🎯</div>
                <div class="skill-name">Figma</div>
            </div>
        </div>

        <div class="pixel-divider"></div>

        <h2 class="section-title">🧩 PROBLEM SOLVING</h2>
        
        <div class="about-box">
            <p>
                ▸ Passionate about solving complex algorithmic challenges<br>
                ▸ Full-stack development with modern technologies<br>
                ▸ Building scalable and efficient solutions<br>
                ▸ Always learning, always coding<br>
                ▸ Turning ideas into reality, one commit at a time
            </p>
        </div>

        <div class="pixel-divider"></div>
    </div>

    <script>
        // Generate floating particles
        const particlesContainer = document.getElementById('particles');
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 4 + 's';
            particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
            particlesContainer.appendChild(particle);
        }

        // Add interactive hover effects
        const pixelBoxes = document.querySelectorAll('.pixel-box');
        pixelBoxes.forEach(box => {
            box.addEventListener('mouseenter', () => {
                box.style.borderColor = ['#ff00ff', '#00ffff', '#ffff00'][Math.floor(Math.random() * 3)];
            });
        });
    </script>
</body>
</html>
