import express from 'express'
import { signup, login, fetchUser, getUserByQuery, connections, profileUpdate,logout,getAllUsers } from '../controllers/users.js'
import { isLoggesIn } from '../middlewares/index.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout)
router.get('/userz',isLoggesIn, getAllUsers)
router.get('/user/:userId',isLoggesIn, fetchUser);
router.get('/users',isLoggesIn, getUserByQuery);
router.put('/connections/:userId/:connectionId',isLoggesIn, connections);
router.put('/profileUpdate/:userId',isLoggesIn, profileUpdate)



export default router;
