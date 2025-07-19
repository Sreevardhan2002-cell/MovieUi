const API_KEY="147554a905f66658d1153a71b2ce343b";
const BASE_URL="https://api.themoviedb.org/3"

export const getPopularMovies=async ()=>{
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results
}
export const searchMovies=async (query)=>{
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json()
    return data.results
}
// 147554a905f66658d1153a71b2ce343b
// https://api.themoviedb.org/3