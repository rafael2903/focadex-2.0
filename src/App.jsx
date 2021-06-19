import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import { GlobalStyle } from './GlobalStyles';
import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Pokemon from './pages/Pokemon';
import Profile from './pages/Profile';

const App = () => {
  const { loggedIn } = useSelector((state) => state.user);

  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            {loggedIn ? <Home /> : <Redirect to="/login" />}
          </Route>

          <Route path="/login">
            {loggedIn ? <Redirect to="/" /> : <Login />}
          </Route>

          <Route path="/pokemons/:name">
            <Pokemon />
          </Route>

          <Route path="/users/:username">
            <Profile />
          </Route>

          <Route path="">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
