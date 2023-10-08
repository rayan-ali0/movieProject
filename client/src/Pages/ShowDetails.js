// import React, { useState ,useEffect} from "react";
import Movie from "../Components/Movie/Movie";
// import '../Components/Movie/movie.css'
import { useParams } from "react-router-dom";

function ShowDetails() {
    const params = useParams()
    let Id = params.Id;
  
    return (
        <>
        <Movie movieId={Id} />
    </>
    )
}

export default ShowDetails