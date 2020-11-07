import React, {useState} from "react";
import Home from "./pages/Home"
import LoginPage from "./pages/LoginPage";
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

function App() {

  const [loggedIn,setLogin] = useState(() => {
    return JSON.parse(localStorage.getItem('logged'));
  });

  
  return (
    <div className="App">
      <Router>
          <Switch>

            <Route exact path="/">
              {loggedIn ? <Home setLogin={setLogin}/> : <Redirect to="/login" />}
            </Route>

            <Route path="/login">
              {loggedIn ? <Redirect to="/" /> : <LoginPage  setLogin={setLogin} />}
            </Route>

            <Route path="">
              <PageNotFound/>
            </Route>
            
          </Switch>
        </Router>
    </div>
  );
}

export default App;
