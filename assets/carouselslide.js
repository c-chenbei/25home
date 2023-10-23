//倒计时
const element = document.getElementById("hander_countdowns");
const targetDateStr = element.getAttribute("data-count-time");
const targetDateParts = targetDateStr.split("/");
const year = parseInt(targetDateParts[0]);
const month = parseInt(targetDateParts[1]) - 1; // 月份从 0 开始
const day = parseInt(targetDateParts[2]);
const hours = parseInt(targetDateParts[3]);
const minutes = parseInt(targetDateParts[4]);
const seconds = parseInt(targetDateParts[5]);
const targetDate = new Date(year, month, day, hours, minutes, seconds).getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;
    console.log(targetDate,now,'55555555')
    if (timeRemaining <= 0) {
        window.clearTimeout(timers);
    } else {
        const totalHours = Math.floor(timeRemaining / (1000 * 60 * 60));
        // const days = Math.floor(totalHours / 24); // 将小时转换为天
        const hours = totalHours; // 获取不满一天的小时数
        const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
        const seconds = Math.floor((timeRemaining / 1000) % 60);
        const milliseconds = timeRemaining % 1000;

        // document.getElementById("countdowns_days").textContent = formatTimeValue(days);
        document.getElementById("countdowns_hours").textContent = formatTimeValue(hours);
        document.getElementById("countdowns_minutes").textContent = formatTimeValue(minutes);
        document.getElementById("countdowns_seconds").textContent = formatTimeValue(seconds);
        document.getElementById("countdowns_milliseconds").textContent = formatmilliseconds(milliseconds);
    }
}

function formatTimeValue(value) {
    return value < 10 ? "0" + value : value;
}
function formatmilliseconds(value) {
    return value < 10 ? value : parseInt(value.toString()[0]);
}

// 更新倒计时每秒钟
const timers = setInterval(updateCountdown, 100);

// 初始化倒计时
updateCountdown();
{/* <span class="number" id="countdowns_days">00</span>days
      <span class="number" id="countdowns_hours">00</span>hrs
      <span class="number" id="countdowns_minutes">00</span>min
      <span class="number" id="countdowns_seconds">00</span>sec */}