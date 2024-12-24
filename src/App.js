// src/App.js

import React from 'react';
import EditorComponent from './components/Editor';
import './App.css';

function App() {
  const handleClick = () => {

  }
  return (
    <div className="App">
      <header>
        <div className="wrapper">
          <h1>Welcome to the React Tiptap Editor</h1>
        </div>
      </header>

      <main onClick={() => {handleClick()}}>
        <EditorComponent />
      </main>
    </div>
  );
}

export default App;