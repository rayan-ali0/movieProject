// import { useEffect, useState } from 'react';
import './App.css';
// import Movies from './Components/Movies';
// import Movie from './Components/Movie'
import {BrowserRouter, Routes , Route} from "react-router-dom"
import ShowMovies from './Pages/ShowMovies'
import ShowDetails from './Pages/ShowDetails'

function App() {

  return (
    <div className="App">
       <BrowserRouter>
<Routes>
  <Route path="/" element={<ShowMovies/>}></Route>
  <Route path="/ShowDetails/:Id" element={<ShowDetails/>}></Route>

</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;

  /* <Movies moviesData={movies} update={changeUpdate}/> */
  /* <Movie moviesData={movies[0]}/> */

//   const [movies,setMovies]=useState([])
//   const [updated,setUpdated]=useState(false)
//   const getMovies=async()=>{
//     return await
//     fetch("/movies/get")
//     .then((response)=>response.json())
//     .then((data)=>setMovies(data))
//     .catch((error)=>
//     console.log(error))
//   }
//   useEffect(()=>{
// getMovies()
// }
//   ,[updated])

//   const changeUpdate=()=>{
//     setUpdated(!updated)
//   }