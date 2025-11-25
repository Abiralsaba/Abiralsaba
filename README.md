<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3D Pixel Animated README</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background: #0a0a0a;
            font-family: 'Courier New', monospace;
            color: #FF6600;
            overflow-x: hidden;
            perspective: 1000px;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 30px 20px;
        }

        .pixel-title {
            font-size: 36px;
            text-align: center;
            margin-bottom: 20px;
            color: #FF6600;
            text-shadow: 
                2px 2px 0px #000,
                4px 4px 0px #FF6600,
                6px 6px 0px #000,
                8px 8px 0px #FF3300;
            animation: float3d 3s ease-in-out infinite;
            font-weight: bold;
            letter-spacing: 3px;
            transform-style: preserve-3d;
        }

        @keyframes float3d {
            0%, 100% { 
                transform: translateY(0px) rotateX(0deg) rotateY(0deg);
            }
            25% { 
                transform: translateY(-15px) rotateX(5deg) rotateY(-5deg);
            }
            50% { 
                transform: translateY(-20px) rotateX(0deg) rotateY(5deg);
            }
            75% { 
                transform: translateY(-15px) rotateX(-5deg) rotateY(-5deg);
            }
        }

        .subtitle {
            text-align: center;
            font-size: 16px;
            margin-bottom: 40px;
            color: #FF6600;
            text-shadow: 2px 2px 0px #000;
            animation: glow 2s ease-in-out infinite;
        }

        @keyframes glow {
            0%, 100% { 
                text-shadow: 2px 2px 0px #000, 0 0 10px #FF6600;
            }
            50% { 
                text-shadow: 2px 2px 0px #000, 0 0 20px #FF6600, 0 0 30px #FF6600;
            }
        }

        .section-title {
            font-size: 24px;
            margin: 30px 0 15px;
            color: #FF6600;
            text-shadow: 
                2px 2px 0px #000,
                4px 4px 0px #FF3300;
            animation: pulse3d 2s ease-in-out infinite;
            transform-style: preserve-3d;
        }

        @keyframes pulse3d {
            0%, 100% { 
                transform: scale(1) translateZ(0px);
            }
            50% { 
                transform: scale(1.05) translateZ(10px);
            }
        }

        .pixel-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 15px;
            margin-bottom: 30px;
        }

        .pixel-box {
            background: linear-gradient(145deg, #1a1a1a, #0a0a0a);
            border: 3px solid #FF6600;
            padding: 15px;
            text-align: center;
            position: relative;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 
                0 4px 0px #FF3300,
                0 8px 0px #000,
                0 12px 20px rgba(255, 102, 0, 0.3);
            transform-style: preserve-3d;
            animation: float-box 3s ease-in-out infinite;
        }

        .pixel-box:nth-child(1) { animation-delay: 0s; }
        .pixel-box:nth-child(2) { animation-delay: 0.2s; }
        .pixel-box:nth-child(3) { animation-delay: 0.4s; }
        .pixel-box:nth-child(4) { animation-delay: 0.6s; }
        .pixel-box:nth-child(5) { animation-delay: 0.8s; }
        .pixel-box:nth-child(6) { animation-delay: 1s; }

        @keyframes float-box {
            0%, 100% { 
                transform: translateY(0px) translateZ(0px) rotateX(0deg);
            }
            50% { 
                transform: translateY(-10px) translateZ(20px) rotateX(5deg);
            }
        }

        .pixel-box:hover {
            transform: translateY(-15px) translateZ(30px) rotateX(10deg) scale(1.1);
            box-shadow: 
                0 6px 0px #FF3300,
                0 12px 0px #000,
                0 20px 40px rgba(255, 102, 0, 0.6);
            border-color: #FF3300;
        }

        .skill-icon {
            font-size: 36px;
            margin-bottom: 8px;
            display: inline-block;
            animation: bounce3d 1.5s ease-in-out infinite;
            transform-style: preserve-3d;
        }

        @keyframes bounce3d {
            0%, 100% { 
                transform: translateY(0) rotateY(0deg);
            }
            25% { 
                transform: translateY(-8px) rotateY(90deg);
            }
            50% { 
                transform: translateY(0) rotateY(180deg);
            }
            75% { 
                transform: translateY(-8px) rotateY(270deg);
            }
        }

        .skill-name {
            font-size: 13px;
            color: #FF6600;
            font-weight: bold;
            text-shadow: 1px 1px 0px #000;
        }

        .about-box {
            background: linear-gradient(145deg, #1a1a1a, #0a0a0a);
            border: 3px solid #FF6600;
            padding: 20px;
            margin: 20px 0;
            box-shadow: 
                0 4px 0px #FF3300,
                0 8px 0px #000,
                0 12px 30px rgba(255, 102, 0, 0.3);
            position: relative;
            animation: box-float 4s ease-in-out infinite;
            transform-style: preserve-3d;
        }

        @keyframes box-float {
            0%, 100% { 
                transform: translateZ(0px) rotateX(0deg);
            }
            50% { 
                transform: translateZ(15px) rotateX(2deg);
            }
        }

        .about-box p {
            line-height: 1.8;
            font-size: 14px;
            color: #FF6600;
            text-shadow: 1px 1px 0px #000;
        }

        .pixel-divider {
            height: 3px;
            background: linear-gradient(90deg, 
                transparent, 
                #FF6600 20%, 
                #FF3300 50%, 
                #FF6600 80%, 
                transparent);
            margin: 25px 0;
            animation: divider-pulse 2s ease-in-out infinite;
            box-shadow: 0 0 10px #FF6600;
        }

        @keyframes divider-pulse {
            0%, 100% { 
                transform: scaleX(1);
                opacity: 1;
            }
            50% { 
                transform: scaleX(0.95);
                opacity: 0.8;
            }
        }

        .particles {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
        }

        .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: #FF6600;
            box-shadow: 0 0 10px #FF6600;
            animation: particle-float 5s ease-in-out infinite;
        }

        @keyframes particle-float {
            0% { 
                transform: translateY(0) translateX(0) translateZ(0);
                opacity: 0;
            }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { 
                transform: translateY(-100vh) translateX(100px) translateZ(50px);
                opacity: 0;
            }
        }

        .trophy-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
            gap: 10px;
            margin: 20px 0;
        }

        .trophy-box {
            background: linear-gradient(145deg, #1a1a1a, #0a0a0a);
            border: 2px solid #FF6600;
            padding: 12px;
            text-align: center;
            animation: trophy-spin 4s ease-in-out infinite;
            transform-style: preserve-3d;
            box-shadow: 
                0 3px 0px #FF3300,
                0 6px 0px #000,
                0 10px 20px rgba(255, 102, 0, 0.3);
        }

        .trophy-box:nth-child(1) { animation-delay: 0s; }
        .trophy-box:nth-child(2) { animation-delay: 0.3s; }
        .trophy-box:nth-child(3) { animation-delay: 0.6s; }
        .trophy-box:nth-child(4) { animation-delay: 0.9s; }
        .trophy-box:nth-child(5) { animation-delay: 1.2s; }
        .trophy-box:nth-child(6) { animation-delay: 1.5s; }

        @keyframes trophy-spin {
            0%, 100% { 
                transform: rotateY(0deg) translateZ(0px);
            }
            50% { 
                transform: rotateY(180deg) translateZ(20px);
            }
        }

        .trophy-icon {
            font-size: 28px;
            animation: trophy-bounce 1s ease-in-out infinite;
        }

        @keyframes trophy-bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
        }

        .trophy-text {
            font-size: 11px;
            color: #FF6600;
            margin-top: 5px;
            text-shadow: 1px 1px 0px #000;
        }

        .connect-links {
            display: flex;
            justify-content: center;
            gap: 15px;
            flex-wrap: wrap;
            margin: 20px 0;
        }

        .connect-btn {
            background: linear-gradient(145deg, #FF6600, #FF3300);
            color: #000;
            padding: 10px 20px;
            text-decoration: none;
            font-weight: bold;
            border: 2px solid #000;
            box-shadow: 
                0 3px 0px #FF3300,
                0 6px 0px #000;
            transition: all 0.3s ease;
            animation: btn-float 2s ease-in-out infinite;
            transform-style: preserve-3d;
        }

        .connect-btn:nth-child(1) { animation-delay: 0s; }
        .connect-btn:nth-child(2) { animation-delay: 0.2s; }
        .connect-btn:nth-child(3) { animation-delay: 0.4s; }
        .connect-btn:nth-child(4) { animation-delay: 0.6s; }

        @keyframes btn-float {
            0%, 100% { 
                transform: translateY(0) translateZ(0);
            }
            50% { 
                transform: translateY(-5px) translateZ(10px);
            }
        }

        .connect-btn:hover {
            transform: translateY(-8px) translateZ(20px) scale(1.1);
            box-shadow: 
                0 5px 0px #FF3300,
                0 10px 0px #000,
                0 15px 30px rgba(255, 102, 0, 0.6);
        }

        .footer-text {
            text-align: center;
            font-size: 16px;
            margin: 30px 0;
            color: #FF6600;
            text-shadow: 2px 2px 0px #000;
            animation: footer-glow 3s ease-in-out infinite;
        }

        @keyframes footer-glow {
            0%, 100% { 
                text-shadow: 2px 2px 0px #000, 0 0 10px #FF6600;
            }
            50% { 
                text-shadow: 2px 2px 0px #000, 0 0 30px #FF6600, 0 0 50px #FF3300;
            }
        }

        @media (max-width: 768px) {
            .pixel-title { font-size: 24px; }
            .section-title { font-size: 18px; }
            .pixel-grid { grid-template-columns: repeat(auto-fit, minmax(80px, 1fr)); }
        }
    </style>
</head>
<body>
    <div class="particles" id="particles"></div>
    
    <div class="container">
        <h1 class="pixel-title">▓▒░ DEVELOPER ░▒▓</h1>
        <div class="subtitle">⚡ PROBLEM SOLVER | CODE ARCHITECT | FULL STACK ⚡</div>

        <div class="pixel-divider"></div>

        <h2 class="section-title">🎨 FRONTEND</h2>
        
        <div class="pixel-grid">
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
                <div class="skill-name">HTML5</div>
            </div>
            <div class="pixel-box">
                <div class="skill-icon">🎨</div>
                <div class="skill-name">CSS3</div>
            </div>
            <div class="pixel-box">
                <div class="skill-icon">🎯</div>
                <div class="skill-name">Figma</div>
            </div>
        </div>

        <div class="pixel-divider"></div>

        <h2 class="section-title">⚙️ BACKEND</h2>
        
        <div class="pixel-grid">
            <div class="pixel-box">
                <div class="skill-icon">🟢</div>
                <div class="skill-name">Node.js</div>
            </div>
            <div class="pixel-box">
                <div class="skill-icon">🐍</div>
                <div class="skill-name">Python</div>
            </div>
            <div class="pixel-box">
                <div class="skill-icon">☕</div>
                <div class="skill-name">Java</div>
            </div>
            <div class="pixel-box">
                <div class="skill-icon">💻</div>
                <div class="skill-name">C++</div>
            </div>
            <div class="pixel-box">
                <div class="skill-icon">🗄️</div>
                <div class="skill-name">MySQL</div>
            </div>
            <div class="pixel-box">
                <div class="skill-icon">🍃</div>
                <div class="skill-name">MongoDB</div>
            </div>
        </div>

        <div class="pixel-divider"></div>

        <h2 class="section-title">🧩 PROBLEM SOLVING</h2>
        
        <div class="about-box">
            <p>
                ▸ Passionate about algorithmic challenges<br>
                ▸ Full-stack development with modern tech<br>
                ▸ Building scalable and efficient solutions<br>
                ▸ Clean code enthusiast<br>
                ▸ Always learning, always growing
            </p>
        </div>

        <div class="pixel-divider"></div>

        <h2 class="section-title">🏆 ACHIEVEMENTS</h2>
        
        <div class="trophy-grid">
            <div class="trophy-box">
                <div class="trophy-icon">⭐</div>
                <div class="trophy-text">Stars</div>
            </div>
            <div class="trophy-box">
                <div class="trophy-icon">💪</div>
                <div class="trophy-text">Commits</div>
            </div>
            <div class="trophy-box">
                <div class="trophy-icon">📦</div>
                <div class="trophy-text">Repos</div>
            </div>
            <div class="trophy-box">
                <div class="trophy-icon">🔀</div>
                <div class="trophy-text">PRs</div>
            </div>
            <div class="trophy-box">
                <div class="trophy-icon">🐛</div>
                <div class="trophy-text">Issues</div>
            </div>
            <div class="trophy-box">
                <div class="trophy-icon">👥</div>
                <div class="trophy-text">Network</div>
            </div>
        </div>

        <div class="pixel-divider"></div>

        <h2 class="section-title">🌐 CONNECT</h2>
        
        <div class="connect-links">
            <a href="YOUR_LINKEDIN" class="connect-btn">LinkedIn</a>
            <a href="YOUR_TWITTER" class="connect-btn">Twitter</a>
            <a href="YOUR_PORTFOLIO" class="connect-btn">Portfolio</a>
            <a href="mailto:YOUR_EMAIL" class="connect-btn">Email</a>
        </div>

        <div class="pixel-divider"></div>

        <div class="footer-text">⚡ "CODE > SLEEP" ⚡</div>
    </div>

    <script>
        // Generate 3D floating particles
        const particlesContainer = document.getElementById('particles');
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 5 + 's';
            particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
            particlesContainer.appendChild(particle);
        }

        // Add extra 3D effects on mouse move
        document.addEventListener('mousemove', (e) => {
            const boxes = document.querySelectorAll('.pixel-box, .trophy-box, .about-box');
            const mouseX = e.clientX / window.innerWidth - 0.5;
            const mouseY = e.clientY / window.innerHeight - 0.5;
            
            boxes.forEach(box => {
                const rect = box.getBoundingClientRect();
                const boxX = (rect.left + rect.width / 2) / window.innerWidth - 0.5;
                const boxY = (rect.top + rect.height / 2) / window.innerHeight - 0.5;
                
                const deltaX = (mouseX - boxX) * 10;
                const deltaY = (mouseY - boxY) * 10;
                
                box.style.transform = `perspective(1000px) rotateY(${deltaX}deg) rotateX(${-deltaY}deg)`;
            });
        });
    </script>
</body>
</html>
