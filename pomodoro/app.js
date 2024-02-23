const bells = new Audio('./sounds/bell.wav'); 
const startBtn = document.querySelector('.btn-start'); 
const pauseBtn = document.querySelector('.btn-pause'); 
const resetBtn = document.querySelector('.btn-reset'); 
const session = document.querySelector('.minutes'); 
let myInterval; 
let totalSeconds;
let state = true;

const appTimer = () => {
  const sessionAmount = Number.parseInt(session.textContent);

  if (state) {
    state = false;
    totalSeconds = sessionAmount * 60;
    myInterval = setInterval(updateSeconds, 1000);
  } else {
    alert('Sessão ja iniciada.');
  }
}

const updateSeconds = () => {
  const minuteDiv = document.querySelector('.minutes');
  const secondDiv = document.querySelector('.seconds');

  totalSeconds--;

  let minutesLeft = Math.floor(totalSeconds/60);
  let secondsLeft = totalSeconds % 60;

  if(secondsLeft < 10) {
    secondDiv.textContent = '0' + secondsLeft;
  } else {
    secondDiv.textContent = secondsLeft;
  }
  minuteDiv.textContent = `${minutesLeft}`;

  if(minutesLeft === 0 && secondsLeft === 0) {
    bells.play();
    clearInterval(myInterval);
  }
}

const pauseTimer = () => {
  clearInterval(myInterval);
  state = true;
}

const resetTimer = () => {
  clearInterval(myInterval);
  totalSeconds = 25 * 60; // Reset to default time (25 minutes)
  document.querySelector('.minutes').textContent = '25';
  document.querySelector('.seconds').textContent = '00';
  state = true;
}

startBtn.addEventListener('click', appTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
