import React, { useState } from "react";
import Home from "./pages/Home"
import LoginPage from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles.js'

function App() {

  // const [loggedIn, setLogin] = useState(() => {
  //   return JSON.parse(localStorage.getItem('logged'));
  // });

  const [loggedIn, setLogin] = useState(true);

  const [username, setUsername] = useState('rafael');

  return (
    
    <div className="App">
     <GlobalStyle /> 
      <Router>
        <Switch>

          <Route exact path="/">
            {loggedIn ? <Home setLogin={setLogin} username={username} /> : <Redirect to="/login" />}
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
