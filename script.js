let isQuestion1Correct = false
let isQuestion2Correct = false


function checkAnswer1(answer) {
    const result = document.getElementById('result1');
    if (answer === 'a') {
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'green';
        isQuestion1Correct = true
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
        isQuestion1Correct = false
    }
    calculateScore()
}

function checkAnswer2(answer) {
    const result = document.getElementById('result2');
    if (answer === 'b') {
        result.textContent = "ถูกต้อง CSD ย่อมาจาก Commercial Support & Development";
        result.style.color = 'green';
        isQuestion2Correct = true
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
        isQuestion2Correct = false
    }
    calculateScore()
}

function calculateScore() {
    let score = 0
    if (isQuestion1Correct) {
        score = score + 1
    }
    if (isQuestion2Correct) {
        score = score + 1
    }

    const scoreText = document.getElementById('score');
    scoreText.textContent = "คุณตอบถูก " + score + " ข้อ"


}