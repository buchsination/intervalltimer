let setsValue;
let timerValue;
let pauseValue;
let timerActive = false;
let pauseActive = false;
let stopActive = false;
let trainingStarted = false;


function startTraining () {
  if (trainingStarted === false) {
    const sets = document.querySelector('.count-sets');
    setsValue = sets.value;
    const timer = document.querySelector('.count-timer');
    timerValue = timer.value;
    const pause = document.querySelector('.count-pausetimer');
    pauseValue = pause.value;
  
    document.querySelector('.field-sets').innerHTML = setsValue;
    document.querySelector('.field-timer').innerHTML = timerValue;
    document.querySelector('.field-pause').innerHTML = pauseValue;
    stopActive = false;
    startSets();
  }

  trainingStarted = true;
}

function startSets () { // defines number of repeats
  if (setsValue > 0 && pauseActive === false) {
    countTime();
  } else if (setsValue > 0 && timerActive === false) {
    countPause();
  } else {

  }
}

function countTime(count) { // Countdown Timer
  timerActive = true;
  count = Number(timerValue) + 1;
  let i = setInterval(() => {

    if (count >= 1 && stopActive === false) {
      count--;
      document.querySelector('.field-timer').innerHTML = count;
      return count;
    } else if (count >= 1 && stopActive === true) {
      timerValue = count;
        clearInterval(i);
    } else {
      const timer = document.querySelector('.count-timer');
      timerValue = timer.value;
      timerActive = false;
      clearInterval(i);
      countPause();
    }

  }, 1000);
}

function countPause() { // Pause Timer
  pauseActive = true;
  timer = Number(pauseValue) + 1;
    let i = setInterval(() => {
    
      if (timer >= 1 && stopActive === false) {
        timer--;
        document.querySelector('.field-pause').innerHTML = timer;
        return timer;
      } else if (timer >= 1 && stopActive === true) {
          pauseValue = timer;
          //reutrn(timer);
          clearInterval(i);
      } else {
        const pause = document.querySelector('.count-pausetimer');
        pauseValue = pause.value;
        setsValue--;
        document.querySelector('.field-sets').innerHTML = setsValue;
        pauseActive = false;
        clearInterval(i);
        startSets();
      }
    }, 1000);
}

function stopResume () {
  if (stopActive === false) {
    stopActive = true;
    document.querySelector('.button-start-resume').innerHTML = 'Resume';
    document.querySelector('.button-start-resume').style.backgroundColor = "#14a032"
  } else {
    stopActive = false;
    document.querySelector('.button-start-resume').innerHTML = 'Pause';
    document.querySelector('.button-start-resume').style.backgroundColor = "#e80909"
    startSets();
  }
}

function resetButton () {
  stopActive = true;
  trainingStarted = false;
  document.querySelector('.count-sets').value = 0;
  document.querySelector('.count-timer').value = 0;
  document.querySelector('.count-pausetimer').value = 0;
  document.querySelector('.field-sets').innerHTML = 0;
  document.querySelector('.field-timer').innerHTML = 0;
  document.querySelector('.field-pause').innerHTML = 0;
  document.querySelector('.button-start-resume').innerHTML = 'Pause';
  document.querySelector('.button-start-resume').style.backgroundColor = "#e80909";
}


