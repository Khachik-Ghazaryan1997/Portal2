import * as THREE from 'three';

export function createPortalMaterial() {
  return new THREE.MeshStandardMaterial({
    color: 0x00aaff,
    emissive: 0x0044ff,
    emissiveIntensity: 0.5,
  });
}
