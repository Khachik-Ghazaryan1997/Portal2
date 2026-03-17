import { Entity } from './Entity.js';

/**
 * StaticEntity - Entity with a mesh. Does not move or animate by default.
 * Use for props, environment objects, etc.
 */
export class StaticEntity extends Entity {
  constructor({ position = { x: 0, y: 0, z: 0 }, mesh } = {}) {
    super({ position });
    this.mesh = mesh ?? null;
    if (this.mesh) {
      this.group.add(this.mesh);
    }
  }

  setMesh(mesh) {
    if (this.mesh) {
      this.group.remove(this.mesh);
    }
    this.mesh = mesh;
    if (mesh) {
      this.group.add(mesh);
    }
  }
}
