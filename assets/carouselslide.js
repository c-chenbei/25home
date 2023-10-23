//倒计时
const element = document.getElementById("hander_countdowns");
const targetDateStr = element.getAttribute("data-count-time");
const targetDateParts = targetDateStr.split("/");
const year = parseInt(targetDateParts[0]);
const month = parseInt(targetDateParts[1]) - 1; // 月份从 0 开始
const day = parseInt(targetDateParts[2]);
const hours = parseInt(targetDateParts[3]);
const minutes = parseInt(targetDateParts[4]);
const targetDate = new Date(year, month, day, hours, minutes).getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;
    if (timeRemaining <= 0) {
        window.clearTimeout(timers);
    } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("countdowns_days").textContent = formatTimeValue(days);
        document.getElementById("countdowns_hours").textContent = formatTimeValue(hours);
        document.getElementById("countdowns_minutes").textContent = formatTimeValue(minutes);
        document.getElementById("countdowns_seconds").textContent = formatTimeValue(seconds);
    }
}

function formatTimeValue(value) {
    return value < 10 ? "0" + value : value;
}

// 更新倒计时每秒钟
const timers = setInterval(updateCountdown, 1000);

// 初始化倒计时
updateCountdown();
{/* <span class="number" id="countdowns_days">00</span>days
      <span class="number" id="countdowns_hours">00</span>hrs
      <span class="number" id="countdowns_minutes">00</span>min
      <span class="number" id="countdowns_seconds">00</span>sec */}