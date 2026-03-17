import * as THREE from 'three';

/**
 * World - container for the level. Holds the scene and manages placeable entities.
 * Equivalent to Unreal's World/Level.
 */
export class World {
  constructor() {
    this.scene = new THREE.Scene();
    this.entities = [];
  }

  add(entity) {
    if (entity?.group != null) {
      this.scene.add(entity.group);
      this.entities.push(entity);
      return entity;
    }
    return null;
  }

  remove(entity) {
    const index = this.entities.indexOf(entity);
    if (index !== -1) {
      this.scene.remove(entity.group);
      this.entities.splice(index, 1);
      return true;
    }
    return false;
  }
}
