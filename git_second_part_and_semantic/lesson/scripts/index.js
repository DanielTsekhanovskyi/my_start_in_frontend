const startBtn = document.getElementById('start');
const output = document.getElementById('output');

let count = 0;

startBtn.addEventListener('click', () => {
  count++;
  output.textContent = count;
});