import React  from "react";
import Movies from "../Components/Movies/Movies";
// import  '../Components/Movies/movies.css'
import { useState,useEffect } from "react";

function ShowMovies(){
    const [movies,setMovies]=useState([])
    const [updated,setUpdated]=useState(false)
    const getMovies=async()=>{
      return await
      fetch("/movies/get",{method : 'GET'})
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

return(
    <>
    <Movies moviesData={movies} update={changeUpdate}/>
    </>
)
}
export default ShowMovies;