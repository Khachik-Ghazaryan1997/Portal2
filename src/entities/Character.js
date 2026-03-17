import { Pawn } from './Pawn.js';

/**
 * Character - Pawn with movement support (humanoid-style).
 * Equivalent to Unreal's ACharacter.
 */
export class Character extends Pawn {
  constructor({ position = { x: 0, y: 0, z: 0 }, movement } = {}) {
    super({ position });
    this.movement = movement ?? null;
  }

  setMovement(movement) {
    this.movement = movement;
    movement?.attach?.(this);
  }

  update(delta, elapsed) {
    this.movement?.update?.(delta, elapsed);
    super.update(delta, elapsed);
  }
}
