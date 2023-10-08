import React, { useEffect, useState } from "react"
import './movie.css'
import img from '../images/movie.png'

function Movie({ moviesData, update }) {
    // console.log(moviesData[0].rating)
    const [movieRate, setMovieRate] = useState(6.7)
    const [stars, setStars] = useState([])
    const editMovie = async (movie, id) => {
        try {
            await fetch(`/movies/edit/${id}`, { method: `PUT` });
            update();
        }
        catch (error) {
            console.log(error)
        }
    }

    const rateBoard = () => {
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
        console.log(stars)
        rateBoard(movieRate)
    }, [movieRate])

    return (
        moviesData.map((movie, i) => (
            <figure className="Card" key={i} >
                <article className="ImageRate">
                    <img src={img} alt="movieImg" />
                    <span className="rate">{stars.join('')}</span>
                </article>
                <article className="Details">
                    <h3 className="card-title cardChild">Movie's Title : {movie.title}</h3>
                    <h5 className="card-year cardChild">Movie Realease : {movie.year} </h5>
                    <p className="cardChild"> Movie Description : {movie.description}  </p>
                    <figcaption className="buttons cardChild">
                        <a href="www.google.com" className="editButton button " onClick={() => editMovie(movie, movie._id)}>Edit</a>
                    </figcaption>
                </article>
            </figure>
        ))
    )
}

export default Movie