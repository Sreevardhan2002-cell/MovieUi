import "../CSS/MovieCard.css"
import { useMovieContext } from "../Contexts/MovieContext"

function MovieCard({movie}){
    const {isFavorite, addToFavorite, removeFromFavorite} = useMovieContext();
    const favorite = isFavorite(movie.id)
    function onFavouriteClick(e){
        e.preventDefault();
        if(favorite) removeFromFavorite(movie.id)
            else addToFavorite(movie)
    }
    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-overlay">
                <button className={`favourite-btn ${favorite ? "active" : ""}`} onClick={onFavouriteClick}>
                    ♥
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
}

export default MovieCard