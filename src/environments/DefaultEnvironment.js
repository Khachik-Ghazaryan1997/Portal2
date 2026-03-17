import * as THREE from 'three';
import { StaticEntity } from '../entities/StaticEntity.js';

/**
 * DefaultEnvironment - simple demo environment with a torus knot.
 */
export function createDefaultEnvironment() {
  const geometry = new THREE.TorusKnotGeometry(0.8, 0.3, 128, 32);
  const material = new THREE.MeshStandardMaterial({ color: 0x6c63ff });
  const mesh = new THREE.Mesh(geometry, material);

  const torus = new StaticEntity({ position: { x: 0, y: 0, z: 0 }, mesh });
  torus.update = (delta, elapsed) => {
    torus.group.rotation.x = elapsed * 0.3;
    torus.group.rotation.y = elapsed * 0.5;
  };

  return [torus];
}
