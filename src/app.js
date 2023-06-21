import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import userRoutes from '../src/routes/userRoutes.js'
import postRoutes from './routes/postRoutes.js'

const app = express()

// global middlewares
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({extended : true}))

// cors middleware
app.use(cors())

// logging middleware
app.use(morgan("tiny"))


// testing route
app.get('/',(req,res)=>{
    res.status(200).json({status : true, message : "SOCIOMATE IS RUNNING LIKE BOLT"})
})


// routing middlewares
app.use('/api/v1', userRoutes)
app.use('/api/v1', postRoutes)

// http://localhost:3000/api/v1/user


export default app