import React from 'react';
import Header from '../src/components/Header/Header';
import QuestionOne from '../src/components/QuestionOne/QuestionOne';
import QuestionTwo from '../src/components/QuestionTwo/QuestionTwo';
import QuestionThree from '../src/components/QuestionThree/QuestionThree';
import QuestionFour from '../src/components/QuestionFour/QuestionFour';


import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <QuestionOne />
      <QuestionTwo />
      <QuestionThree />
      <QuestionFour />
      <footer>Built by Dustin Haefele because I want to make a positive impact in the world in my career.</footer>
    </div>
  );
}

export default App;
