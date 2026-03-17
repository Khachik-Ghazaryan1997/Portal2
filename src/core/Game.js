import * as THREE from 'three';

import { camera } from '../scene/camera.js';
import { renderer } from '../scene/renderer.js';
import { createLights } from '../scene/lighting.js';
import { setupEnvironment } from '../scene/environment.js';
import { setupResize } from '../utils/resize.js';
import { World } from './World.js';

/**
 * Game - owns the main loop, scene, world, and bootstraps the game.
 * Entry point for running the game.
 */
export class Game {
  constructor({ playerController } = {}) {
    this.world = new World();
    this.clock = new THREE.Clock();
    this.playerController = playerController ?? null;

    setupEnvironment(this.world.scene);
    createLights(this.world.scene);
    setupResize(camera, renderer);

    this._running = false;
    this._animateBound = this._animate.bind(this);
  }

  start() {
    this._running = true;
    this._animate();
  }

  stop() {
    this._running = false;
  }

  _animate() {
    if (!this._running) return;

    const delta = this.clock.getDelta();
    const elapsed = this.clock.getElapsedTime();

    this.update(delta, elapsed);
    renderer.render(this.world.scene, camera);

    requestAnimationFrame(this._animateBound);
  }

  update(delta, elapsed) {
    this.playerController?.update?.(delta, elapsed);
    for (const entity of this.world.entities) {
      entity.update?.(delta, elapsed);
    }
  }
}
