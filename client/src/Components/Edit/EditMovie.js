import React, { useEffect, useState } from "react";
import "./edit.css"
function EditMovie({movie}){
const [movieDetail,setMovie]=useState(movie)
const[title,setTitle]=useState(movieDetail.title)
const [year,setYear]=useState(movieDetail.year)
const[rate,setRate]=useState(movieDetail.rating)
const[description,setDescription]=useState(movieDetail.description)


useEffect(()=>{
console.log(movie)
},[])
    return( 
        <> 
        <form>
            <fieldset> 
        <legend>Edit Movie's Data</legend>
        <label for="title" value={title}>Title</label>

<input type="text" id="title" required></input>
<label for="year">Year</label>

<input type="number" id="year"   required min="1000" max="9999" ></input>
<label for="rating">Rate</label>

<input type="number" id="rating"  min="0" max="10"></input>
<label for="description">Description</label>

<textarea type="textbox" id="description"></textarea>
<button className="editButton" type="submit" >Submit</button>
</fieldset>
</form>
    </>
    )
}


export default EditMovie