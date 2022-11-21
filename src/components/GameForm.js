
// Game Submission Form to select from a category list and number of questions

export const GameForm = (props) => {
    const { categories, startGame} = props;

    const handleSubmit = (event) => {
        event.preventDefault();
        const selectedCategory = event.target.category.value;
        const numQuestions = event.target.numQuestions.value;
        startGame(selectedCategory, numQuestions);
    }

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <label className="form-label" htmlFor="category">Category</label>
                <select className="form-select" name="category" id="category" >
                    {categories.map((category) => {
                        return <option key={category.id} value={category.id}>{category.name}</option>
                    }
                    )}
                </select>
                <label className="form-label" htmlFor="numQuestions">Number of Questions</label>
                <select className="form-select" name="numQuestions" id="numQuestions">
                    <option value="1">1</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                </select>
                <button type="submit">Start Game</button>
            </form>
        </div>
    )
}