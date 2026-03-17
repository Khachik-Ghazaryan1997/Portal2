import { camera } from './scene/camera.js';
import { renderer } from './scene/renderer.js';
import { Game } from './core/Game.js';
import { PlayerController } from './controllers/PlayerController.js';
import { createDefaultEnvironment } from './environments/DefaultEnvironment.js';

camera.position.z = 3;

const playerController = new PlayerController({ camera, renderer });

const game = new Game({ playerController });

for (const entity of createDefaultEnvironment()) {
  game.world.add(entity);
}

game.start();
