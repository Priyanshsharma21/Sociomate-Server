import express from 'express'
import {posting,posts,postsByQuery,connections,postUpdate,removePost,postByUser,singlePost,addComment,removeComment,likePost} from '../controllers/posts.js';
import { isLoggesIn } from '../middlewares/index.js';

const router = express.Router()

router.post('/posting',isLoggesIn,posting);
router.get('/getPosts',isLoggesIn,posts);
router.get('/postbyuser/:userId',isLoggesIn,postByUser);
router.get('/findPost',isLoggesIn,postsByQuery);
router.get('/post/:id',isLoggesIn,singlePost);
router.get('/mutuals/:userId/:connectionId',isLoggesIn,connections);
router.put('/postUpdate/:postId',isLoggesIn,postUpdate);
router.delete('/removePost/:postId',isLoggesIn,removePost);

router.post('/addComment/:postId', isLoggesIn, addComment);
router.delete('/removeComment/:postId/:commentId', isLoggesIn, removeComment);
router.post('/addLike/:postId/:userId', isLoggesIn, likePost);




export default router