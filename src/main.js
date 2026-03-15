import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.z = 3;

// Renderer
const canvas = document.getElementById('webgl');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(2, 2, 3);
scene.add(directionalLight);

// Mesh
const geometry = new THREE.TorusKnotGeometry(0.8, 0.3, 128, 32);
const material = new THREE.MeshStandardMaterial({ color: 0x6c63ff });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Handle resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Animation loop
const clock = new THREE.Clock();

function animate() {
  const elapsed = clock.getElapsedTime();

  mesh.rotation.x = elapsed * 0.3;
  mesh.rotation.y = elapsed * 0.5;

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();
