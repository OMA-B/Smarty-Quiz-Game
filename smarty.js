// Intro area
// let intro_tip = document.querySelector('.intro');
// const tips = [`Time to test your IQ Level, by answering in 15s!`, 
//             `You can tap on or hover over the question to alter background.`];
// let counter = 0;

// setInterval(() => {
//     if (counter === tips.length) {
//         counter = 0;
//     };
//     intro_tip.textContent = tips[counter];
//     counter++;
// }, 4000);

// setting timer countdown...
let timer = document.querySelector('.timer');
const time = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
let count = 0;

setInterval(() => {
    timer.textContent = time[count];
    count++;
    if (count > time.length) {
        timer.textContent = 0;
    };
}, 1000);

// Answering questions
const answers = document.querySelectorAll('.answer');
const correct_answers = ['Angel falls', 'Uranus', '1929', 'Hard to believe'];
let score = 0;

// for first option
const first_answer = () => {
    correct_answers.forEach(answer => {
        if (answer === answers[0].textContent) {
            score++;
        };
    });
    answers[0].style.background = '#74C0FC';
    answers[0].style.color = '#001C40';
    answers[0].style.transition = 'all 0.8s';
    // to make the answer clickable once
    answers[0].removeEventListener('click', first_answer);
};

answers[0].addEventListener('click', first_answer);

// for second option
const second_answer = () => {
    correct_answers.forEach(answer => {
        if (answer === answers[1].textContent) {
            score++;
        };
    });
    answers[1].style.background = '#74C0FC';
    answers[1].style.color = '#001C40';
    answers[1].style.transition = 'all 0.8s';
    // to make the answer clickable once
    answers[1].removeEventListener('click', second_answer);
};

answers[1].addEventListener('click', second_answer);

// for third option
const third_answer = () => {
    correct_answers.forEach(answer => {
        if (answer === answers[2].textContent) {
            score++;
        };
    });
    answers[2].style.background = '#74C0FC';
    answers[2].style.color = '#001C40';
    answers[2].style.transition = 'all 0.8s';
    // to make the answer clickable once
    answers[2].removeEventListener('click', third_answer);
};

answers[2].addEventListener('click', third_answer);