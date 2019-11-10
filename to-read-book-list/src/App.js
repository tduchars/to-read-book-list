import React from 'react';
import './App.css';
import Booklist from './components/Booklist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Books to Read...</h1>
      </header>
      <Booklist />
    </div>
  );
}

export default App;
