// const tips = [`Time to test your IQ Level, by answering in 15s!`, 
//             `You can tap on or hover over the question to alter background.`];

// setting timer countdown...
let timer = document.querySelector('.timer');
const time = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
let count = 0;

const count_down = setInterval(() => {
    timer.textContent = time[count];
    count++;
    if (count > time.length) {
        timer.textContent = 0;
    };
    // if (timer.textContent) {
    //     localStorage.setItem(timer.textContent, time[count]);
    //     location.reload();   
    // }
    // return timer.textContent;
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
    // to make the answer clickable once
    answers[0].removeEventListener('click', first_answer);
};

answers[0].addEventListener('click', first_answer);
// making option 1 inactive after timer runs out
setTimeout(() => {
    answers[0].removeEventListener('click', first_answer);
}, 21000);

// for second option
const second_answer = () => {
    correct_answers.forEach(answer => {
        if (answer === answers[1].textContent) {
            score++;
        };
    });
    // to make the answer clickable once
    answers[1].removeEventListener('click', second_answer);
};

answers[1].addEventListener('click', second_answer);
// making option 2 inactive after timer runs out
setTimeout(() => {
    answers[1].removeEventListener('click', second_answer);
}, 21000);

// for third option
const third_answer = () => {
    correct_answers.forEach(answer => {
        if (answer === answers[2].textContent) {
            score++;
        };
    });
    // to make the answer clickable once
    answers[2].removeEventListener('click', third_answer);
};

const answer3 = answers[2].addEventListener('click', third_answer);
// making option 3 inactive after timer runs out
setTimeout(() => {
    answers[2].removeEventListener('click', third_answer);
    alert('Time Up!. . .Kindly move to the next!');
}, 21000);

// to keep data/current state intact on page refresh
// first save data before refresh...
// window.addEventListener('unload', () => {
//     sessionStorage.setItem('count_down', count_down);
//     sessionStorage.setItem('score', score);
//     sessionStorage.setItem('answer1', answer1);
//     sessionStorage.setItem('answer2', answer2);
//     sessionStorage.setItem('answer3', answer3);
// });
// // then get data after refresh
// window.addEventListener('load', () => {
//     const count_down = sessionStorage.getItem('count_down');
//     const score = sessionStorage.getItem('score');
//     const answer1 = sessionStorage.getItem('answer1');
//     const answer2 = sessionStorage.getItem('answer2');
//     const answer3 = sessionStorage.getItem('answer3');

//     if (count_down !== null) {
//         count_down;
//     };
//     if (score !== null) {
//         score;
//     };
//     if (answer1 !== null) {
//         answer1;
//     };
//     if (answer2 !== null) {
//         answer2;
//     };
//     if (answer3 !== null) {
//         answer3;
//     };
// });