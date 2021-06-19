import { useState, useEffect } from 'react';
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

const App = () => {
  const [loggedIn, setLoggedIn] = useState(() => {
    return JSON.parse(localStorage.getItem('logged'));
  });

  const [username, setUsername] = useState(() => {
    return localStorage.getItem('username');
  });

  const [prevPage, setPrevPage] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState();
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokedex20201.herokuapp.com/pokemons?page=${currentPage}`)
      .then((response) => response.data)
      .then((data) => {
        setPrevPage(data.prev_page);
        setNextPage(data.next_page);
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
                prevPage={prevPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                nextPage={nextPage}
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
