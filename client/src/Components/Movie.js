import React from "react"
import  './movies.css' 
import img from '../images/movie.png'
function Movies({moviesData,update}) {
    const deleteMovie= async (movie,id)=>{
        const confirm=window.confirm(`Are you sure you want to delete ${movie.title} movie`)
        if (confirm){
            try{
                await fetch(`/movies/delete/${id}`,{method : `DELETE`});
                console.log(id)
                update();
            }
            catch(error){
                console.log(error)
            }
        }
    }
    return (
        <section className="Cards">

      {  moviesData.map((movie,i)=>(
 <figure className="Card" key={i} >
 <img src={img} alt="movieImg" className="cardChild"/>
     <h3 class="card-title cardChild">{movie.title}</h3>
     <h5 class="card-year cardChild">{movie.year} </h5>
     <a href="www.google.com" class="cardDetail cardChild">More Details</a>

     <figcaption className="buttons cardChild">
     <a href="www.google.com" class="deleteButton button " onClick={()=>deleteMovie(movie,movie._id)}>Delete</a>{/**when delete I should call the function updated like this updated() */}
     </figcaption>
 
</figure>
))
        }
           

           
        
{/* 
            <div class="card" style={style}>
                <div class="card-body">
                    <h5 class="card-title">Movie Title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Movie Year</h6>
                    <p class="card-text">Movie Description : quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="www.google.com
          " class="card-link">Edit</a>
                    <a href="www.google.com
          " clacss="card-link">Delete</a>
                </div>
        //     </div> */}
        {/* //     <div class="card" style={style}>
        //         <div class="card-body">
        //             <h5 class="card-title">Movie Title</h5>
        //             <h6 class="card-subtitle mb-2 text-muted">Movie Year</h6>
        //             <p class="card-text">Movie Description : quick example text to build on the card title and make up the bulk of the card's content.</p>
        //             <a href="www.google.com
        //   " class="card-link">Edit</a>
        //             <a href="www.google.com
        //   " clacss="card-link">Delete</a>
        //         </div> 
                 </div>
*/}

        </section>
    )
}
export default Movies