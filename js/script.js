let clicks = 0;
const TIMEOUT = 5000;

let display = document.querySelector('.display');
let button = document.querySelector('.button');
let counter = document.querySelector('.counter');

button.onclick = start; //первый onclick для старта игры

function start() {
    const startTime = Date.now(); //возвращает текущее время в количестве миллисекунд
    display.text = formatTime(TIMEOUT);

    button.onclick = () => counter.textContent = ++clicks; //переопределение onclick для подсчёта кликов

    let interval = setInterval(() => { //вызываем функцию регулярно, повторяя вызов через определённый интервал времени
        let value = Date.now() - startTime;
        display.textContent = formatTime(TIMEOUT - value);
    }, 100);

    let timeOut = setTimeout(() => { //вызываем функцию один раз через определённый интервал времени
        button.onclick = null;
        display.textContent = "Game over";

        clearInterval(interval); //очистка обработчика setInterval
        clearTimeout(timeOut); //очистка обработчика setTimeout
    }, TIMEOUT);
}

function formatTime(ms) { //функция перевода в секунды
    return (ms / 1000).toFixed(2);
}