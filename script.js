let timeLeft;
let timerId = null;
let isRunning = false;
let currentMode = 'pomodoro';

const modes = {
    pomodoro: 25 * 60,
    'short-break': 5 * 60,
    'long-break': 15 * 60
};

const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const startPauseBtn = document.getElementById('start-pause');
const resetBtn = document.getElementById('reset');
const modeButtons = document.querySelectorAll('.mode-buttons button');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    minutesDisplay.textContent = minutes.toString().padStart(2, '0');
    secondsDisplay.textContent = seconds.toString().padStart(2, '0');
    document.title = `${minutesDisplay.textContent}:${secondsDisplay.textContent} - Tae's Pomodoro`;
}

function switchMode(mode) {
    currentMode = mode;
    timeLeft = modes[mode];
    
    modeButtons.forEach(btn => {
        btn.classList.toggle('active', btn.id === mode);
    });

    stopTimer();
    updateDisplay();
}

function startTimer() {
    if (isRunning) return;
    
    isRunning = true;
    startPauseBtn.textContent = 'PAUSE';
    
    timerId = setInterval(() => {
        timeLeft--;
        updateDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timerId);
            alert('시간이 다 되었습니다!');
            resetTimer();
        }
    }, 1000);
}

function stopTimer() {
    isRunning = false;
    startPauseBtn.textContent = 'START';
    clearInterval(timerId);
}

function resetTimer() {
    stopTimer();
    timeLeft = modes[currentMode];
    updateDisplay();
}

startPauseBtn.addEventListener('click', () => {
    if (isRunning) {
        stopTimer();
    } else {
        startTimer();
    }
});

resetBtn.addEventListener('click', resetTimer);

modeButtons.forEach(btn => {
    btn.addEventListener('click', () => switchMode(btn.id));
});

// Initialize
timeLeft = modes[currentMode];
updateDisplay();
