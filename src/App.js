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
    </div>
  );
}

export default App;
