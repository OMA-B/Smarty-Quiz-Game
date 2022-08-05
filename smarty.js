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

answers[0].addEventListener('click', (e) => {
    correct_answers.forEach(answer => {
        if (answer === answers[0].textContent.toString()) {
            console.log('SMARTY!!!');
        };
    });
    e.target.style.background = '#74C0FC';
    e.target.style.color = '#001C40';
    e.target.style.transition = 'all 0.8s';
});