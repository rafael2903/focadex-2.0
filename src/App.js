import React, { useEffect, useState } from "react";
import Home from "./pages/Home"
import LoginPage from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles.js'

const App = () => {

  const [loggedIn, setLogin] = useState(0);

  useEffect(() => {
    setLogin(localStorage.getItem('logged'));
  }, []);

  return (

    <div className="App">
      <GlobalStyle />
      <Router>
        <Switch>

          <Route exact path="/">
            {loggedIn ? <Home setLogin={setLogin} username={username} /> : <Redirect to="/login" />}
          </Route>

          <Route path="/login">
            {loggedIn ? <Redirect to="/" /> : <LoginPage />}
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
