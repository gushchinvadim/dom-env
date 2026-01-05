// src/js/app.js
import '../css/style.css';
import moleImage from '../assets/goblin.png';

export function initGame() {
  const board = document.getElementById('game-board');
  if (!board) {
    throw new Error('Element #game-board not found');
  }

  board.innerHTML = '';

  const cells = [];
  for (let i = 0; i < 16; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.dataset.index = i;
    board.append(cell);
    cells.push(cell);
  }

  const mole = document.createElement('img');
  mole.src = moleImage;
  mole.alt = 'Goblin';

  function getRandomCell() {
    return cells[Math.floor(Math.random() * cells.length)];
  }

  let currentCell = getRandomCell();
  currentCell.append(mole);

  // 💡 Сохраняем идентификатор таймера
  let intervalId = setInterval(() => {
    let newCell;
    do {
      newCell = getRandomCell();
    } while (newCell === currentCell);
    newCell.appendChild(mole);
    currentCell = newCell;
  }, 1500);

  // 💡 Функция остановки
  function stopGame() {
    clearInterval(intervalId);
    // Опционально: очистить DOM
    // board.innerHTML = '';
  }

  return { board, cells, mole, stopGame };
}