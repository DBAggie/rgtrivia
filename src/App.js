import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { GameForm } from './components/GameForm';
import { Game } from './components/Game';
import { createAnswerList } from './components/utility';


function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [gameSettings, setGameSettings] = useState([]);
  const [categories, setCategories] = useState(null);
  const [answerList, setAnswerList] = useState(null);

  function startGame(category, numQuestions) {
    setGameSettings([category, numQuestions]);

  }

  function resetGame() {
    setGameSettings([]);
  }

  async function setAnswers() {
    if (data) {
      const answerList = await createAnswerList(data.incorrect_answers, data.correct_answer);
      setAnswerList(answerList);
      console.log(answerList);
    }
  }
  useEffect(() => {
    fetch('https://opentdb.com/api_category.php')
      .then(response => response.json())
      .then(data => {
        setCategories(data.trivia_categories);
      });

  }, []);

  useEffect(() => {
    if(gameSettings[0] && gameSettings[1]) {
      fetch(`https://opentdb.com/api.php?amount=${gameSettings[1]}&category=${gameSettings[0]}`)
      .then(response => response.json())
      .then(data => {
        setData(data.results);
        setIsLoading(false);
      } 
      );
      setAnswers();
    }
    return () => {
      setData(null);
      setIsLoading(true);
    }
  }, [gameSettings]);

  if(gameSettings.length === 0) {

    if(categories !== null) {
      return (
        <div className='App'> 
          <GameForm categories={categories} startGame={startGame} />
        </div>
        );
    }
  }

  if(!isLoading) {
    return (
      <div className='App'>
        <Game data={data} resetGame={resetGame} />
      </div>
    );
  }
}

export default App;
