// src/js/app.test.js
import { initGame } from "./app";

beforeEach(() => {
  // Сначала создаём контейнер
  document.body.innerHTML = '<div id="game-board"></div>';
});

afterEach(() => {
  document.body.innerHTML = "";
});

describe("Game board initialization", () => {
  it("should create a 4x4 grid (16 cells)", () => {
    initGame(); // ✅ Вызываем ЗДЕСЬ — после создания DOM
    const cells = document.querySelectorAll("#game-board .cell");
    expect(cells.length).toBe(16);
  });

  it("should place the goblin image in one of the cells initially", () => {
    initGame(); // ✅
    const cells = Array.from(document.querySelectorAll("#game-board .cell"));
    const hasGoblin = cells.some((cell) => cell.querySelector("img") !== null);
    expect(hasGoblin).toBe(true);
  });

  it("should have exactly one goblin on the board", () => {
    initGame(); // ✅
    const goblins = document.querySelectorAll("#game-board img");
    expect(goblins.length).toBe(1);
  });
});
