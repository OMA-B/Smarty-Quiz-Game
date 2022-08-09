// setting custom timer countdown...
let timer = document.querySelector('.timer');
const time = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let count = 0;

const count_down = setInterval(() => {
    timer.textContent = time[count];
    count++;
    // to let timer retain a value of 0 in the HTML node
    if (count > time.length) {
        timer.textContent = 0;
    };
}, 1000);

// Answering question
const answers = document.querySelectorAll('.answer');
const answers_database = ['Angel falls', 'Uranus', '1929', 'Hard to believe'];
let score = 0;

// for first option
const get_answer = () => {
    answers_database.forEach(answer => {
        // since the first option is the right answer
        if (answer === answers[0].textContent) {
            if (score < 3) {
                score++;
                // caching in browser storage if score is not more than 1 here
                sessionStorage.setItem('scored', score);
            };
        };
    });
    
    // to make the answer clickable once
    answers[0].removeEventListener('click', get_answer);
};

answers[0].addEventListener('click', get_answer);
// making option inactive after timer runs out
setTimeout(() => {
    answers[0].removeEventListener('click', get_answer);
    alert('Time Up!. . .Kindly move to the next question using the >> button');
}, 21000);

// returning stored score data on page refresh...
window.addEventListener('load', () => {
    let stored_score = sessionStorage.getItem('scored');
    score = stored_score;
});