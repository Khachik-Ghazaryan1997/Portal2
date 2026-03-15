import * as THREE from 'three';

import { camera } from './scene/camera.js';
import { renderer } from './scene/renderer.js';
import { createLights } from './scene/lighting.js';
import { setupEnvironment } from './scene/environment.js';
import { createControls } from './controls/controls.js';
import { setupResize } from './utils/resize.js';
import { createTorusKnot } from './objects/TorusKnot.js';

// Scene
const scene = new THREE.Scene();

// Environment & lighting
setupEnvironment(scene);
createLights(scene);

// Controls
const controls = createControls(camera, renderer);

// Objects
const torusKnot = createTorusKnot();
scene.add(torusKnot);

// Resize handler
setupResize(camera, renderer);

// Animation loop
const clock = new THREE.Clock();

function animate() {
  const elapsed = clock.getElapsedTime();

  torusKnot.rotation.x = elapsed * 0.3;
  torusKnot.rotation.y = elapsed * 0.5;

  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();
