import * as THREE from 'three';

export function createTorusKnot() {
  const geometry = new THREE.TorusKnotGeometry(0.8, 0.3, 128, 32);
  const material = new THREE.MeshStandardMaterial({ color: 0x6c63ff });
  const mesh = new THREE.Mesh(geometry, material);
  return mesh;
}
