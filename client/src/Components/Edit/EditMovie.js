import React, { useState } from "react";
import "./edit.css"
import { Navigate, createSearchParams ,useSearchParams} from "react-router-dom"
function EditMovie({ movie }) {
    const [movieDetail, setMovie] = useState(movie)
    const [title, setTitle] = useState(movieDetail.title)
    const [year, setYear] = useState(movieDetail.year)
    const [rate, setRate] = useState(movieDetail.rating)
    const [description, setDescription] = useState(movieDetail.description)
    const [edited,setEdited]=useState(false)
    const [searchParams, setSearchParams] = useSearchParams();

    const UpdateData = async () => {
        if(description.trim()===''){
            setDescription("No Description added")
        }
        let query={title : title,year:year,rating:rate,description:description}
        // `title=${title}&year=${year}&rating=${rate}&description=${description}`
        try { 
            // await fetch(`/movies/edit/${movie._id}?${createSearchParams(query)}`,{method:"PUT",body:JSON.stringify(query)}) 
            await fetch(`/movies/edit/${movie._id}?${createSearchParams(query)}`,{method:"PUT",body:JSON.stringify(query)}) ;
            searchParams.delete(query)
            setSearchParams(searchParams)
            Navigate(-1)
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <form >
                <fieldset>
                    <legend>Edit Movie's Data</legend>
                    <label htmlFor="title" >Title</label>

                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required></input>
                    <label htmlFor="year">Year</label>

                    <input type="number" id="year" value={year} min="1000" max="9999" onChange={(e) => setYear(e.target.value)}  ></input>
                    <label htmlFor="rating">Rate</label>

                    <input type="number" id="rating" min="0" max="10" value={rate} onChange={(e) => setRate(e.target.value)} ></input>
                    <label htmlFor="description">Description</label>

                    <textarea type="textbox" id="description" value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
                    <button className="editButton" type="submit" onClick={UpdateData}>Submit</button>
                </fieldset>
            </form>
        </>
    )
}


export default EditMovie