const actualDate = document.getElementById("date");
const options = {weekday: "long", month: "short", day: "numeric"};
actualDate.innerHTML = new Date().toLocaleDateString("en-US", options);

export function showTime() {
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    const time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;

    setTimeout(showTime, 1000);
}
showTime();