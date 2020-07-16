import React, {useState} from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import CharacterDetails from "./components/CharacterDetails";
import NavBar from "./components/NavBar";
import CharacterList from "./components/CharacterList";
import {AppContext} from "./context";
import SearchBar from "./components/SearchBar";



const  App = () => {

    return (
      <AppContext>
          <div className="App">
              <Link to ="/">
                  <NavBar/>
              </Link>
              <SearchBar/>
              <Switch>
                  <Route exact path="/" component ={CharacterList}/>
                  <Route path='/character/:id' component={CharacterDetails}  />
              </Switch>
          </div>
      </AppContext>

  );
}

export default App;
