/**
 * CharacterMovement - locomotion for Character (humanoid-style).
 * Equivalent to Unreal's CharacterMovementComponent.
 */
export class CharacterMovement {
  constructor({ speed = 5 } = {}) {
    this.speed = speed;
    this.character = null;
    this.velocity = { x: 0, y: 0, z: 0 };
  }

  attach(character) {
    this.character = character;
  }

  move(dx, dy, dz) {
    this.velocity.x += dx;
    this.velocity.y += dy;
    this.velocity.z += dz;
  }

  update(delta, elapsed) {
    if (!this.character) return;

    const { velocity, speed } = this;
    const dt = Math.min(delta, 0.1);

    this.character.setPosition(
      this.character.position.x + velocity.x * speed * dt,
      this.character.position.y + velocity.y * speed * dt,
      this.character.position.z + velocity.z * speed * dt
    );

    velocity.x *= 0.9;
    velocity.y *= 0.9;
    velocity.z *= 0.9;
  }
}
