// Answering question
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