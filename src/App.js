import React, { useEffect, useState } from "react";
import Home from "./pages/Home"
import LoginPage from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles.js'
import Pokemon from "./pages/Pokemon";
import Profile from "./pages/Profile";

const App = () => {

  const [loggedIn, setLogin] = useState(() => {
    return JSON.parse(localStorage.getItem('logged'));
  });

  const [username, setUsername] = useState(() => {
    return localStorage.getItem('username');
  });

  return (

    <div className="App">
      <GlobalStyle />
      <Router>
        <Switch>

          <Route exact path="/">
            {loggedIn ? <Home setLogin={setLogin} username={username} /> : <Redirect to="/login" />}
          </Route>

          <Route path="/login">
            {loggedIn ? <Redirect to="/" /> : <LoginPage username={username} setUsername={setUsername} setLogin={setLogin} />}
          </Route>


          <Route path="/pokemons/:name">
            <Pokemon />
          </Route>

          <Route path="/users/:name" render={(props) => <Profile username={props.match.params.name} setLogin={setLogin} />} >

          </Route>

          <Route path="">
            <PageNotFound />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;

