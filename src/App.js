import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import AllCharacters from "./views/AllCharacters/AllCharacters";

function App() {
  return (
    <div className="App">
      <Switch>

        <Route exact path="/" component ={AllCharacters}/>
      </Switch>

    </div>
  );
}

export default App;
