
import { initGame } from './app';

let gameInstance = null;

beforeEach(() => {
  document.body.innerHTML = '<div id="game-board"></div>';
  gameInstance = initGame();
});

afterEach(() => {
  if (gameInstance && gameInstance.stopGame) {
    gameInstance.stopGame();
  }
  document.body.innerHTML = '';
});

describe('Game board initialization', () => {
  it('should create a 4x4 grid (16 cells)', () => {
    const cells = document.querySelectorAll('#game-board .cell');
    expect(cells.length).toBe(16);
  });

  it('should place the goblin image in one of the cells initially', () => {
    const cells = Array.from(document.querySelectorAll('#game-board .cell'));
    const hasGoblin = cells.some(cell => cell.querySelector('img') !== null);
    expect(hasGoblin).toBe(true);
  });

  it('should have exactly one goblin on the board', () => {
    const goblins = document.querySelectorAll('#game-board img');
    expect(goblins.length).toBe(1);
  });
});