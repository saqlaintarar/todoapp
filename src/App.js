import React from 'react';
import './App.css';
import ToDo from './Components/ToDo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Welcome to Todo app</h1>
        </header>
        <div>
          <ToDo/>
        </div>

    </div>
  );
}

export default App;
