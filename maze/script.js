const start = document.getElementById('start');
const end = document.getElementById('end');
const walls = document.querySelectorAll('.wall');
let gameStarted = false;

start.addEventListener('mouseenter', () => {
  gameStarted = true;
  document.body.style.backgroundColor = 'white'; // Reset background color
});

end.addEventListener('mouseenter', () => {
  if (gameStarted) {
    alert('You win!');
    gameStarted = false;
  }
});

walls.forEach(wall => {
  wall.addEventListener('mouseenter', () => {
    if (gameStarted) {
      alert('Game Over! You hit a wall.');
      gameStarted = false;
      document.body.style.backgroundColor = 'red';
    }
  });
});