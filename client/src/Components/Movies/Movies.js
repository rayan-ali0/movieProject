import React from "react"
import { Link } from "react-router-dom"
import '../Movies/movies.css'
import img from '../../images/movie.png'
function Movies({ moviesData, update }) {
    const deleteMovie = async (movie, id) => {
        const confirm = window.confirm(`Are you sure you want to delete ${movie.title} movie`)
        if (confirm) {
            try {
                await fetch(`/movies/delete/${id}`, { method: `DELETE` });
                update();
            }
            catch (error) {
                console.log(error)
            }
        }
    }
    
    return (
        <section className="Cards">
            {moviesData.map((movie) => (
                <figure className="Cardd" key={movie._id} >
                    <img src={img} alt="movieImg" className="child cardImg" />
                    <h3 className="card-title child">{movie.title}</h3>
                    <h5 className="card-year child">{movie.year} </h5>
                    <Link to={`/ShowDetails/${movie._id}`} className="cardDetails child"> More Details</Link>
                    {/* <a href="/ShowDetails/${movie._id}" className="cardDetails child">More Details</a> */}

                    <figcaption className="buttons child">
                        <a href="/" className="deleteButton button " onClick={() => deleteMovie(movie, movie._id)}>Delete</a>{/**when delete I should call the function updated like this updated() */}
                    </figcaption>

                </figure>
            ))
            }




        </section>
    )
}
export default Movies