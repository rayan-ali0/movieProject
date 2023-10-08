import { useEffect, useState } from 'react';
import './App.css';
import Movies from './Components/Movies';
import Movie from './Components/Movie'

function App() {
  const [movies,setMovies]=useState([])
  const [updated,setUpdated]=useState(false)
  const getMovies=async()=>{
    return await
    fetch("/movies/get")
    .then((response)=>response.json())
    .then((data)=>setMovies(data))
    .catch((error)=>
    console.log(error))
  }
  useEffect(()=>{
getMovies()
}
  ,[updated])

  const changeUpdate=()=>{
    setUpdated(!updated)
  }
  return (
    <div className="App">
       

  {/* <Movies moviesData={movies} update={changeUpdate}/> */}
  <Movie moviesData={movies}/>
    </div>
  );
}

export default App;
