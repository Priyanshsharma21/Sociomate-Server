import app from './app.js'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import {
    v2 as cloudinary
} from 'cloudinary'
dotenv.config()

const { MONGODB_URL,PORT,CLOUDINARY_CLOUD_NAME,CLOUDINARY_API_KEY,CLOUDINARY_API_SECRET } = process.env

cloudinary.config({
    cloud_name : CLOUDINARY_CLOUD_NAME,
    api_key : CLOUDINARY_API_KEY,
    api_secret : CLOUDINARY_API_SECRET,
})

const startServer = async()=>{
    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect(MONGODB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connected to DB')
        app.listen(PORT, ()=>{
            console.log(`Running Up The Hill At ${PORT}km/hr`)
        })


    } catch (error) {
        console.log(error)
    }
}
startServer()