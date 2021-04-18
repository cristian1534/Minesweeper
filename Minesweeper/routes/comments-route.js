const express = require('express');
const {  addComment,
         getComments, 
         getComment,
         updateComment,
         deleteComment
    } = require('../controllers/commentController');
const router = express.Router();


router.post('/comment', addComment);
router.get('/comments', getComments);
router.get('/comments/:id', getComment);
router.put('/comments/:id', updateComment);
router.delete('/comments/:id', deleteComment);


module.exports ={
    routes: router
}