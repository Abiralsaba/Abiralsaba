# ✨ 3D Pixel README — Abiralsaba (Upgraded Version)

<!-- Animated 3D Pixel Header Placeholder -->

<p align="center">
  <img src="assets/3d-pixel.gif" width="620" alt="3D Pixel Animated Title" />
</p>

<h1 align="center">🔥 Abiralsaba — Problem Solver • Full‑Stack Developer • Designer 🔥</h1>

<p align="center">3D Pixel Animations • Competitive Programming • Full‑Stack Web Development • UI/UX</p>

---

## 🚀 About Me

Hi! I'm **Abiralsaba**, a developer passionate about:

* ⚡ Algorithmic Problem Solving (C++, Java, JS, Python)
* 🎨 Building stunning UI/UX (Figma, 3D Pixel, Animations)
* 🧩 Creating fast, modern, scalable full‑stack apps
* 🧠 Learning, experimenting & innovating with new tech

---

## 🧠 Problem Solving Directory

```
problems/
  cpp/
  java/
  javascript/
  react/
  python/
  html-css/
  mysql/
  mongodb/
  nodejs/
  figma/
```

---

## 🛠️ Tech Stack

### 🧩 Languages

* C++, Java, JavaScript, Python

### 🎨 Frontend

* HTML, CSS, React.js

### ⚙️ Backend

* Node.js, Express.js

### 🗄️ Databases

* MySQL, MongoDB

### 🧰 Tools / Design

* Figma, Git, GitHub

---

# 🎆 **✨ New Upgraded Section: Animated Typing Banner**

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=28&duration=3000&pause=900&color=00F7FF&center=true&vCenter=true&width=600&lines=Full+Stack+Developer;Problem+Solver;3D+Pixel+Designer;Node.js+%7C+React.js+%7C+MySQL;Welcome+to+my+GitHub+Profile!" />
</p>

---

# 🧊 **✨ New Upgraded Section: 3D Pixel Skill Icons**

(These are themed pixel icons for your skills)

<p align="center">
<img src="https://img.shields.io/badge/C%2B%2B-3D%20Pixel-blue?style=for-the-badge" />
<img src="https://img.shields.io/badge/Java-3D%20Pixel-orange?style=for-the-badge" />
<img src="https://img.shields.io/badge/JavaScript-3D%20Pixel-yellow?style=for-the-badge" />
<img src="https://img.shields.io/badge/React-3D%20Pixel-blue?style=for-the-badge" />
<img src="https://img.shields.io/badge/Node.js-3D%20Pixel-green?style=for-the-badge" />
<img src="https://img.shields.io/badge/MySQL-3D%20Pixel-blue?style=for-the-badge" />
<img src="https://img.shields.io/badge/MongoDB-3D%20Pixel-green?style=for-the-badge" />
<img src="https://img.shields.io/badge/Python-3D%20Pixel-yellow?style=for-the-badge" />
</p>

---

# 🏆 **✨ New Upgraded Section: GitHub Stats**

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=Abiralsaba&show_icons=true&theme=tokyonight&hide_border=true" width="49%" />
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=Abiralsaba&theme=tokyonight&hide_border=true" width="49%" />
</p>

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Abiralsaba&layout=compact&theme=tokyonight&hide_border=true" width="42%" />
</p>

---

# 🔥 3D Pixel Animated Username Generator

*(Put this inside `/assets/3d-pixel.html`)*

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>3D Pixel Text Demo</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    html,body{height:100%;margin:0;background:#0b1020;overflow:hidden}
    #app{width:100%;height:100%}
    .ui{position:fixed;left:12px;top:12px;color:#fff;font-family:monospace;z-index:3}
    .ui small{opacity:0.8;display:block;margin-top:6px}
  </style>
</head>
<body>
  <div id="app"></div>
  <div class="ui">3D Pixel Text — press <b>R</b> to randomize<br><small>Edit TEXT in the script</small></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r146/three.min.js"></script>
<script>
const TEXT = 'Abiralsaba'; // Your Username
const PIXEL_SIZE = 6;
const FONT_SIZE = 120;
const GAP = 1.2;

const container = document.getElementById('app');
const scene = new THREE.Scene(); scene.background = new THREE.Color(0x0b1020);
const camera = new THREE.PerspectiveCamera(40, innerWidth/innerHeight, 0.1, 2000);
camera.position.set(0, 60, 220);

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setPixelRatio(devicePixelRatio);
renderer.setSize(innerWidth, innerHeight);
container.appendChild(renderer.domElement);

scene.add(new THREE.DirectionalLight(0xffffff, 1));
scene.add(new THREE.AmbientLight(0x404040, 1.2));

const cvs = document.createElement('canvas');
const ctx = cvs.getContext('2d');
function buildPixelData(text){
  cvs.width = Math.min(2048, text.length * FONT_SIZE);
  cvs.height = FONT_SIZE * 1.2;
  ctx.fillStyle = '#000'; ctx.fillRect(0,0,cvs.width,cvs.height);
  ctx.font = `${FONT_SIZE}px monospace`;
  ctx.fillStyle = '#fff';
  ctx.fillText(text, 8, cvs.height/2);
  const img = ctx.getImageData(0,0,cvs.width,cvs.height).data;
  const pixels = [];
  const step = PIXEL_SIZE;
  for(let y=0;y<cvs.height;y+=step){
    for(let x=0;x<cvs.width;x+=step){
      const idx = (x + y*cvs.width)*4;
      const r = img[idx];
      if(r > 40){ pixels.push({x,y}); }
    }
  }
  return {pixels,w:cvs.width,h:cvs.height};
}

let voxels;
function createVoxelsFromText(text){
  if(voxels) scene.remove(voxels);
  voxels = new THREE.Group();
  const data = buildPixelData(text);
  const geo = new THREE.BoxGeometry(PIXEL_SIZE*GAP, PIXEL_SIZE*GAP, PIXEL_SIZE*GAP);
  const offX = data.w/2, offY = data.h/2;
  for(const p of data.pixels){
    const m = new THREE.Mesh(geo,new THREE.MeshStandardMaterial());
    m.position.set((p.x-offX)*0.6, -(p.y-offY)*0.6, Math.random()*20);
    m.material.color.setHSL((p.x/data.w),0.7,0.5);
    voxels.add(m);
  }
  scene.add(voxels);
}

createVoxelsFromText(TEXT);
let t = 0;
function animate(){
  t+=0.01;
  if(voxels){ voxels.rotation.y = Math.sin(t*0.7)*0.3; }
  renderer.render(scene,camera);
  requestAnimationFrame(animate);
}
animate();

addEventListener('resize',()=>{
  camera.aspect = innerWidth/innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth,innerHeight);
});
</script>
</body>
</html>
```

---

# 📫 Contact

📌 GitHub: **[@Abiralsaba](https://github.com/Abiralsaba)**

---

# ⭐ If you like this README, consider starring the repo!
