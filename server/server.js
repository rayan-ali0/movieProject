import express from "express"
import {} from "dotenv/config"
const app=express()
const port=process.env.PORT
import {mongoose} from "mongoose"
const mongo_url=process.env.MOVIE_URL

mongoose.connect(mongo_url)
    .then(() => {
        app.listen(port, () => {
            console.log(`connected & listening on port ${port}`)
        })
    })
    .catch((error) => {
        console.log(error)
    }

    )
    app.use(express.json);
