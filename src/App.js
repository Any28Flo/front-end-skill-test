import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import CharacterDetails from "./components/CharacterDetails";
import NavBar from "./components/NavBar";
import CharacterList from "./components/CharacterList";


function App() {
  return (
    <div className="App">
        <Link to ="/">
            <NavBar/>
        </Link>
      <Switch>
        <Route exact path="/" component ={CharacterList}/>
        <Route path='/character/:id' component={CharacterDetails}  />
      </Switch>
    </div>
  );
}

export default App;
