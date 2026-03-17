import * as THREE from 'three';

/**
 * Entity - base for anything placeable in the world.
 * Equivalent to Unreal's AActor.
 */
export class Entity {
  constructor({ position = { x: 0, y: 0, z: 0 } } = {}) {
    this.position = { ...position };
    this.group = new THREE.Group();
    this.group.position.set(this.position.x, this.position.y, this.position.z);
  }

  setPosition(x, y, z) {
    this.position.x = x ?? this.position.x;
    this.position.y = y ?? this.position.y;
    this.position.z = z ?? this.position.z;
    this.group.position.set(this.position.x, this.position.y, this.position.z);
  }

  addToScene(scene) {
    scene.add(this.group);
  }

  update(delta, elapsed) {}
}
