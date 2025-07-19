import './CSS/App.css'
import { Routes,Route } from 'react-router-dom'
import { MovieProvider } from './Contexts/MovieContext'
import Home from './pages/Home'
import Favorites from './Pages/Favorites'
import NavBar from './Component/NavBar'

function App() {
  return (
    <MovieProvider>
      <NavBar />
    <main className='main-content'>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/favorite' element={ <Favorites/> } />
      </Routes>
    </main>
    </MovieProvider>
  )

}

export default App
