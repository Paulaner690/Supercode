const MovieArticle = (props) => {
    return ( 
       <div className="movies">
        <h3>Title: {props.movie.title}</h3>
        <p>Year: {props.movie.year}</p>
        <p>Director: {props.movie.director}</p>
        <p>Duration: {props.movie.duration}</p>
        {/* Map fügt Leerzeile zwischen Genres ein. (Array) */}
        <p>Genre: {props.movie.genre.map((element) => element + " ")}</p>
        <p>Rate: {props.movie.rate} ★</p>
       </div>
     );
}
 
export default MovieArticle;