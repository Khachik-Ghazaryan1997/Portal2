/**
 * Controller - base for input/AI logic that possesses a Pawn.
 * Equivalent to Unreal's AController.
 */
export class Controller {
  constructor() {
    this.pawn = null;
  }

  possess(pawn) {
    pawn.possess(this);
  }

  unpossess() {
    if (this.pawn) {
      this.pawn.unpossess();
    }
  }

  update(delta, elapsed) {}
}
