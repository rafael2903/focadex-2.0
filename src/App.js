import React, { useState } from "react";
import Home from "./pages/Home"
import LoginPage from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles.js'

const App = () => {

  const [loggedIn, setLogin] = useState({});

  //componentWillMount(setLogin(localStorage.getItem('logged')));

  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Switch>

          <Route exact path="/">
            {loggedIn ? <Home setLogin={setLogin} /> : <Redirect to="/login" />}
          </Route>

          <Route path="/login">
            {loggedIn ? <Redirect to="/" /> : <LoginPage setLogin={setLogin} />}
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
