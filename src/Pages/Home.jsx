import MovieCard from "../Component/MovieCard"
import "../CSS/Home.css"
import { useState,useEffect } from "react"
import { searchMovies,getPopularMovies } from "../Services/api"

function Home(){
    const [searchQuery, setSearchQuery]=useState("")
    const [movies, setMovies]=useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

    const handleSubmit= async (e) =>{
        e.preventDefault()
        if(!searchQuery.trim()) return;
        if(loading)  return;
        setLoading(true)
        try{
          const searchResult= await  searchMovies(searchQuery);
          setMovies(searchResult);
          setError(null)
        }catch(err){
          console.log(err)
          setError("Movie Not Found")
        }finally{
          setLoading(false)
        }
    }  
    return(
        <div className="home">
            <form onSubmit={handleSubmit} className="search-form">
                <input type="text"placeholder="Search for movies..." className="search-input" value={searchQuery} onChange={e=> setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-button">search</button>
            </form>
            {error && <div className="error-message">{error}</div>}
            {loading ? (
                <div className="loading">loading...</div> ) :(

                    <div className="movies-grid">
                {movies.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
            )}
        </div>
    )
}

export default Home