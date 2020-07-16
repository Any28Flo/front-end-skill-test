import React, {useState} from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import CharacterDetails from "./components/CharacterDetails";
import NavBar from "./components/NavBar";
import CharacterList from "./components/CharacterList";
import AppContext from "./context";

const  App = () => {

    const [charactersList , setCharactersList] = useState(null);

  return (
      <AppContext.Provider value={{characterList: charactersList, updateContext: setCharactersList}}>
          <div className="App">
              <Link to ="/">
                  <NavBar/>
              </Link>
              <Switch>
                  <Route exact path="/" component ={CharacterList}/>
                  <Route path='/character/:id' component={CharacterDetails}  />
              </Switch>
          </div>
      </AppContext>

  );
}

export default App;
