import './App.css'
import MovieArticle from './components/MovieArticle';
import movies from './assets/Lev1_1-React_JS-Movie Database';

function App() {

  return (
    <>
    <h1>Movie Map</h1>
    <section className='movieArt'>
     {movies.map((item, index) => <MovieArticle movie={item} key={index} />)}
    </section>
    </>
  )
}

export default App
