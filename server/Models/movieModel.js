import {mongoose } from 'mongoose' // to allow us create models and schemas
const Schema=mongoose.Schema;
const movieSchema = new Schema({
    id:{
        type : Number,

    },
    title :{
        type: String ,
        required:true
    },  
    year : {
        type : Number,
        required : true,
        min : 1000,
        max : 9999
        
    },
    rating :{
        type : Number,
        min : 0,
        max:10,
        required : false,
        default : 4

    },
    description:{
        type : String,
        required:false,
        default: "No Description added"
    }
}
/*  
,{timestamps :true}// to say when the document was ceated , or updated
*/
)
// module.exports=mongoose.model('movie',movieSchema)
export default mongoose.model('movie',movieSchema)
