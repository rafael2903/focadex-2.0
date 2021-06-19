import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import axios from 'axios';

import { GlobalStyle } from './GlobalStyles';
import Home from './pages/Home';
import LoginPage from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Pokemon from './pages/Pokemon';
import Profile from './pages/Profile';
import { setPrevPage, setNextPage } from './store/pagination';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(() => {
    return JSON.parse(localStorage.getItem('logged'));
  });

  const [username, setUsername] = useState(() => {
    return localStorage.getItem('username');
  });

  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const { currentPage } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://pokedex20201.herokuapp.com/pokemons?page=${currentPage}`)
      .then((response) => response.data)
      .then((data) => {
        dispatch(setPrevPage(data.prev_page));
        dispatch(setNextPage(data.next_page));
        setPokemons(data.data);
      });
  }, [currentPage]);

  useEffect(() => {
    axios
      .get(`https://pokedex20201.herokuapp.com/users/${username}`)
      .then((response) => response.data)
      .then((data) => {
        setFavorites(data.pokemons.map((pokemon) => pokemon.name));
      });
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            {loggedIn ? (
              <Home
                pokemons={pokemons}
                favorites={favorites}
                username={username}
                setFavorites={setFavorites}
              />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>

          <Route path="/login">
            {loggedIn ? (
              <Redirect to="/" />
            ) : (
              <LoginPage
                username={username}
                setUsername={setUsername}
                setLoggedIn={setLoggedIn}
              />
            )}
          </Route>

          <Route path="/pokemons/:name">
            <Pokemon
              username={username}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          </Route>

          <Route path="/users/:username">
            <Profile setLoggedIn={setLoggedIn} />
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
