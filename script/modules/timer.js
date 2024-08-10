const timerDisplay = document.getElementById('timer');

function startTimer() {
  let remainingTime = 6 * 60 * 60 * 1000;
  if (localStorage.getItem('remainingTime')) remainingTime = parseInt(localStorage.getItem('remainingTime'), 10);

  updateTimerDisplay(remainingTime);

  const intervalId = setInterval(() => {
    remainingTime -= 1000;
    localStorage.setItem('remainingTime', remainingTime);
    updateTimerDisplay(remainingTime);

    if (remainingTime <= 0) {
      localStorage.setItem('remainingTime', 0);
      clearInterval(intervalId);
      startTimer();
    }
  }, 1000);
}

function updateTimerDisplay(remainingTime) {
  const hours = Math.floor(remainingTime / (60 * 60 * 1000));
  const minutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);

  timerDisplay.querySelector(".timer__container").innerHTML = `<div class="timer__item-wrapper">
                                                    <span class="timer__item timer__item_hidden">00h</span>
                                                    <span class="timer__item">${hours.toString().padStart(2, '0')}h</span>
                                                </div>
                                                <div class="timer__delimiter"></div>
                                                <div class="timer__item-wrapper">
                                                    <span class="timer__item timer__item_hidden">00m</span>
                                                    <span class="timer__item">${minutes.toString().padStart(2, '0')}m</span>
                                                </div>
                                                <div class="timer__delimiter"></div>
                                                <div class="timer__item-wrapper">
                                                    <span class="timer__item timer__item_hidden">00s</span>
                                                    <span class="timer__item">${seconds.toString().padStart(2, '0')}s</span>
                                                </div>`
}

startTimer();