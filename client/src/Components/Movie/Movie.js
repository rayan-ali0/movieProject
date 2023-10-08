import React, { useEffect, useState } from "react"
import '../Movie/movie.css'
import img from '../../images/movie.png'
function Movie({ movieId }) {
    const [movieData, setMovie] = useState({})
    const [updated, setUpdated] = useState(false)
    const [stars, setStars] = useState([])
    const [movieRate, setMovieRate] = useState()

    const getMovie = async () => {
        return await
            fetch(`/movies/get/id/${movieId}`)
                .then((response) => response.json())
                .then((data) => setMovie(data),
                setMovieRate(movieData.rating)
                )
                .catch((error) =>
                    console.log(error))
    }

    //     const editMovie = async (id) => {
    //         try {
    //             await fetch(`/movies/edit/${id}`, { method: `PUT` });
    // setUpdated(!updated)  
    //       }
    //         catch (error) {
    //             console.log(error)
    //         }
    //     }

    const rateBoard = () => {
        setMovieRate(movieData.rating)
        console.log(movieRate)
        let stars = [];
        const rate = Math.round(movieRate);
        for (let i = 1; i <= 10; i++) {
            if (i <= rate) {
                stars.push(String.fromCodePoint(parseInt('9733')))
            }
            else {
                stars.push(String.fromCodePoint(parseInt('9734')))
            }
        }
        setStars(stars)
    }

    useEffect(() => {
        getMovie()
    },[])
    
    useEffect(()=>{
        rateBoard()
    },[movieData])

    return (
        <figure className="Card" >
            <article className="ImageRate">
                <img src={img} alt="movieImg" />
                <span className="rate">{stars.join('')}</span>
            </article>
            <article className="Details">
                <h3 className="card-title cardChild">Movie's Title : {movieData.title}</h3>
                <h5 className="card-year cardChild">Movie Realease : {movieData.year} </h5>
                <p className="cardChild"> Movie Description : {movieData.description}  </p>
                <figcaption className="buttons cardChild">
                    <a href="www.google.com" className="editButton button">Edit</a>
                </figcaption>
            </article>
        </figure>
    )

}

export default Movie