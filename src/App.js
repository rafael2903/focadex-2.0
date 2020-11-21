import Home from "./pages/Home"
import LoginPage from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles.js'
import Pokemon from "./pages/Pokemon";
import Profile from "./pages/Profile";
import axios from 'axios';
import { useState, useEffect } from "react";

const App = () => {


  const [loggedIn, setLogin] = useState(() => {
    return JSON.parse(localStorage.getItem('logged'));
  });

  const [username, setUsername] = useState(() => {
    return localStorage.getItem('username');
  });

  const [prev_page, setPrevPage] = useState();
  const [current_page, setCurrentPage] = useState(1);
  const [next_page, setNextPage] = useState();
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    axios
      .get(`https://pokedex20201.herokuapp.com/pokemons?page=${current_page}`)
      .then((response) => response.data)
      .then((data) => {
        setPrevPage(data.prev_page);
        setNextPage(data.next_page);
        setPokemons(data.data);
        console.log("poke");
      })

  }, [current_page])

  useEffect(() => {
    axios
      .get(`https://pokedex20201.herokuapp.com/users/${username}`)
      .then((response) => response.data)
      .then((data) => {
        setFavorites(data.pokemons.map(pokemon => pokemon.name));
      })
  }, [username]);

  const backgroundColors = {

    bug: "#7ED578",
    electric: "#FFF34B",
    fairy: "#FF7EE5",
    fighting: "#F17373",
    fire: "#FFB433",
    flying: "#D7F1E9",
    ghost: "#E2E2E2",
    grass: "#5EFF53",
    ground: "#AA8546",
    ice: "#AEE3FB",
    normal: "#D7DBA8",
    poison: "#CE52F9",
    psychic: "#FFC157",
    rock: "#757575",
    steel: "#A1A1A1",
    water: "#7192FF",
    dragon: "#43372D",

  }

  return (

    <div className="App">
      <GlobalStyle />
      <Router>
        <Switch>

          <Route exact path="/">
            {loggedIn ? <Home pokemons={pokemons} favorites={favorites} backgroundColors={backgroundColors} username={username} setFavorites={setFavorites} prev_page={prev_page} current_page={current_page} setCurrentPage={setCurrentPage} next_page={next_page} /> : <Redirect to="/login" />}
          </Route>

          <Route path="/login">
            {loggedIn ? <Redirect to="/" /> : <LoginPage username={username} setUsername={setUsername} setLogin={setLogin} />}
          </Route>


          <Route path="/pokemons/:name">
            <Pokemon username={username} pokemons={pokemons} favorites={favorites} backgroundColors={backgroundColors} setFavorites={setFavorites} />
          </Route>

          <Route path="/users/:name" render={(props) => <Profile username={props.match.params.name} setLogin={setLogin} backgroundColors={backgroundColors} />} >
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

