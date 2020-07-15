import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllCharacters from "./views/AllCharacters/AllCharacters";
import CharacterDetails from "./components/CharacterDetails";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component ={AllCharacters}/>
        <Route path='/character/:id' component={CharacterDetails}  />
      </Switch>

    </div>
  );
}

export default App;
