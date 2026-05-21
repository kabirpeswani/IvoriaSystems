// app.js - Ivoria Systems Interactive Scripts

document.addEventListener('DOMContentLoaded', () => {
  // ----- Initialize AOS (Animate On Scroll) -----
  try {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });
  } catch (error) {
    console.warn('AOS failed to initialize:', error);
  }

  // ----- Mobile Navigation Toggle -----
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.querySelector('.nav-menu');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });
  }

  // ----- Three.js Interactive 3D Particle Grid -----
  initInteractive3DGrid();

  // ----- Form Submission Handler -----
  const contactForm = document.getElementById('emailContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      
      const name = document.getElementById('userName').value;
      const email = document.getElementById('userEmail').value;
      const company = document.getElementById('userCompany').value || 'N/A';
      const interest = document.getElementById('userInterest').value;
      const message = document.getElementById('userMessage').value;

      const subject = encodeURIComponent(`Ivoria Systems Inquiry - ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Company: ${company}\n` +
        `Product of Interest: ${interest}\n\n` +
        `Message:\n${message}`
      );

      const mailtoUrl = `mailto:ivoriasystems@gmail.com?subject=${subject}&body=${body}`;
      
      // Trigger local mail application
      window.location.href = mailtoUrl;

      // Close modal
      closeContactModal();
    });
  }
});

// ----- Three.js Setup -----
let scene, camera, renderer, particleSystem;
let mouseX = 0, mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

function initInteractive3DGrid() {
  const container = document.getElementById('hero');
  const canvas = document.getElementById('canvas3d');
  if (!canvas || !container) return;

  try {
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    scene = new THREE.Scene();

    // Camera
    camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
    camera.position.z = 250;
    camera.position.y = 80;

    // Particles Geometry
    const particleCount = 1200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x4169e1); // Royal Blue
    const color2 = new THREE.Color(0xd4af37); // Metallic Gold

    for (let i = 0; i < particleCount; i++) {
      // Grid wave layout
      const x = (Math.random() - 0.5) * 800;
      const y = (Math.random() - 0.5) * 200 - 50;
      const z = (Math.random() - 0.5) * 800;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Mix colors based on position
      const mixedColor = color1.clone().lerp(color2, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Material
    const material = new THREE.PointsMaterial({
      size: 3,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true
    });

    // Particle System
    particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // Renderer
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Event Listeners
    document.addEventListener('mousemove', onDocumentMouseMove);
    window.addEventListener('resize', onWindowResize);

    // Run loop
    animate3DGrid(0);
  } catch (e) {
    console.error('Three.js failed to initialize:', e);
  }
}

function onDocumentMouseMove(event) {
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
}

function onWindowResize() {
  const container = document.getElementById('hero');
  if (!container || !camera || !renderer) return;

  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
}

function animate3DGrid(time) {
  requestAnimationFrame(animate3DGrid);

  if (!scene || !camera || !renderer) return;

  // Slowly rotate grid
  if (particleSystem) {
    particleSystem.rotation.y = time * 0.0001;
    
    // Wave animation on positions
    const positions = particleSystem.geometry.attributes.position.array;
    const count = positions.length / 3;
    
    for (let i = 0; i < count; i++) {
      const x = positions[i * 3];
      const z = positions[i * 3 + 2];
      
      // Calculate a dynamic wave height
      positions[i * 3 + 1] = Math.sin(x * 0.01 + time * 0.002) * 15 + Math.cos(z * 0.01 + time * 0.002) * 15 - 50;
    }
    
    particleSystem.geometry.attributes.position.needsUpdate = true;
  }

  // Smooth camera tracking of mouse
  camera.position.x += (mouseX * 0.4 - camera.position.x) * 0.05;
  camera.position.y += (-mouseY * 0.2 + 80 - camera.position.y) * 0.05;
  camera.lookAt(scene.position);

  renderer.render(scene, camera);
}

// ----- Modal Actions -----
window.openContactModal = function() {
  const modal = document.getElementById('contactModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock background scrolling
  }
};

window.closeContactModal = function() {
  const modal = document.getElementById('contactModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Unlock background scrolling
  }
};
