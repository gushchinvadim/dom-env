
import './css/style.css';
import { initGame } from './js/app';

let gameInstance = null;

document.addEventListener('DOMContentLoaded', () => {
  gameInstance = initGame();

  // остановка через 10 секунд
  setTimeout(() => {
    gameInstance.stopGame();
  }, 10000);
});