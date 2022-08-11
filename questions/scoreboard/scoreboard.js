// Display Score
const show_score = document.querySelector('.score span');
// fetching stored score data
let score = sessionStorage.getItem('scored');
// appending score to display in percentage
show_score.textContent = score * 25;

// Dropdown Solutions Tab
const drop_icon = document.querySelector('.fa-chevron-down');
const quiz_container = document.querySelector('.quiz-container');
// making quiz container open and close
drop_icon.addEventListener('click', () => {
    if (quiz_container.className !== 'open') {
        quiz_container.className = 'open';
        quiz_container.style.transition = 'all 1s';
        drop_icon.style.transform = 'rotate(180deg)';
    } else {
        quiz_container.className = 'quiz-container';
        drop_icon.style.transform = 'rotate(0deg)';
    }
});

// Displaying Answers of Questions
const options = document.querySelectorAll('.answer');
const answers_database = ['Angel falls', 'Uranus', '1929', 'Hard to believe'];

options.forEach(option => {
    answers_database.forEach(answer => {
        if (option.textContent === answer) {
            option.style.background = '#74C0FC';
            option.style.color = '#001C40';
            option.style.transform = 'scale(1.2)';
        }
    })
})