import he from 'he';

export function Game(props) {
    const { data, resetGame } = props;

    return (
        <div className='Game'>
            <h1>Game</h1>
            {data.map((question) => {
                return (
                <div>
                    <h2 key={he.decode(question.question)}>{he.decode(question.question)}</h2>
                    <ul>
                    {question.incorrect_answers.map((answer) => {
                        return <li key={he.decode(answer)}>{he.decode(answer)}</li>

                    })}
                    <li key={he.decode(question.correct_answer)}>{he.decode(question.correct_answer)}</li>
                    </ul>
                </div>
                )
            })}
            <div />
            <div>
                <button onClick={() => resetGame()}>New Game</button>
            </div>
      </div>
    )
}