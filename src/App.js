import React from 'react';
import Header from '../src/components/Header/Header';
import QuestionOne from '../src/components/QuestionOne/QuestionOne';
import QuestionTwo from '../src/components/QuestionTwo/QuestionTwo';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <QuestionOne />
      <QuestionTwo />
    </div>
  );
}

export default App;
