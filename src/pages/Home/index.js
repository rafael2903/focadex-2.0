import Header from "../../components/Header";
import Title from "../../components/Title";
import Footer from "../../components/Footer";
import Cards from "../../components/Cards";
import Pagination from "../../components/Pagination";

export default function Home({ username,pokemons,favorites,backgroundColors,setFavorites,prev_page,current_page,setCurrentPage,next_page }) {


    console.log(pokemons);

    return (
        <>
            <Header username={username} />
            <main>
                <Title>Pokemons</Title>
                <Cards pokemons={pokemons} favorites={favorites} backgroundColors={backgroundColors} username={username} setFavorites={setFavorites}/>
            </main>
                <Pagination prev_page={prev_page} current_page={current_page} setCurrentPage={setCurrentPage} next_page={next_page} />
            <Footer />
        </>
    );
}
