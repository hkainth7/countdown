const interval = 1000;
let month = "Aug";
let day = "20";
let year = "2021";
let time = "00:00:00";
let timeString = month + " " + day + ", " + year + " " + time;
const $body = $('body');
const $countdownOutput = $('#countdown-output');


let countdownDate = new Date(timeString).getTime();

function countDown() {
    let currentDate = new Date().getTime();
    let timeLeft = countdownDate - currentDate;
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const timeOutput = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    $countdownOutput.html(timeOutput);
};