import jwt from 'jsonwebtoken'
import User from '../models/usersModel.js'
import * as dotenv from 'dotenv'
dotenv.config()


const { JWT_SECRET } = process.env


export const isLoggesIn = async(req,res,next)=>{
    try {
        const token = req.headers.authorization.split(" ")[1] || req.headers['auth-token']

        if(!token) return res.status(404).json({status: false, message : "Token Not Found."})

        const docoded = jwt.verify(token, JWT_SECRET)

        const user = await User.findById(docoded.userId)

        if(!user) return res.status(401).json({status : false, message : "User Not Authenticated to access this route"})


        req.user_id = user.userId

        next()

    } catch (error) {
        res.status(500).json({status : false, message : error.message, middleware : "Middleware Message"})
    }
}