
export function createAnswerList(incorrectAnswers, correctAnswer) {
    if(incorrectAnswers && correctAnswer) {
        const answerList = incorrectAnswers.map((answer) => {
                return [answer, false];
            });
        answerList.push([correctAnswer, true]);
        const shuffledList = shuffleArray(answerList);
        console.log(shuffledList);
        return shuffledList;
    }
}

function shuffleArray(array) {
    //shuffle outer array
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}