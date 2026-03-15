import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const textureLoader = new THREE.TextureLoader();
const gltfLoader = new GLTFLoader();

export function loadTexture(path) {
  return textureLoader.load(path);
}

export function loadModel(path) {
  return new Promise((resolve, reject) => {
    gltfLoader.load(path, resolve, undefined, reject);
  });
}
