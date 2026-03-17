import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Controller } from './Controller.js';

/**
 * PlayerController - handles player input. Can drive camera (orbit) or possess a Pawn.
 * Equivalent to Unreal's APlayerController.
 */
export class PlayerController extends Controller {
  constructor({ camera, renderer } = {}) {
    super();
    this.camera = camera;
    this.renderer = renderer;
    this.controls = renderer
      ? new OrbitControls(camera, renderer.domElement)
      : null;
    if (this.controls) {
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.05;
    }
  }

  update(delta, elapsed) {
    this.controls?.update?.();
    super.update(delta, elapsed);
  }
}
