import { Entity } from './Entity.js';

/**
 * Pawn - Entity that can be possessed by a Controller (player or AI).
 * Equivalent to Unreal's APawn.
 */
export class Pawn extends Entity {
  constructor({ position = { x: 0, y: 0, z: 0 } } = {}) {
    super({ position });
    this.controller = null;
  }

  possess(controller) {
    this.controller = controller;
    controller.pawn = this;
  }

  unpossess() {
    if (this.controller) {
      this.controller.pawn = null;
      this.controller = null;
    }
  }

  update(delta, elapsed) {
    this.controller?.update?.(delta, elapsed);
  }
}
