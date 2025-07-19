import "../CSS/Favorites.css"
import { useMovieContext } from "../Contexts/MovieContext"
import MovieCard from "../Component/MovieCard"

function Favorites(){
    const {favorite} = useMovieContext();
    if(favorite) {
        return  <div className="favorites">
            <h2>Your Favorites</h2>
            <div className="movies-grid">
                {favorite.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
            </div>
    }
    return <div className="favorites-empty">
        <h2>No favorite movies yet</h2>
        <p>Start adding movies to your favorite and they will appear here!</p>
    </div>
}
export default Favorites    