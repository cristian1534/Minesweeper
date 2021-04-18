'use strict'

const firebase = require('../db');
const Comment = require('../models/comment');
const firestore = firebase.firestore(); 


const addComment = async ( req, res ) => {
    try {
        const data = req.body;
        if(data.email && data.comment !== "") 
        {
            await firestore.collection('Comments').doc().set(data);
            res.status(200).send({
            success: true,
            added: data
            }) 
        }else { res.status(400).send({
            success: false,
            error: 'Data must be complete to Post.'
        })}
    }catch( err ) {
        res.status(400).send({
            success: false,
            error: err.message
        })
    
    }
}

const getComments = async ( req, res ) => {
    try {      
        const userMessage = await firestore.collection('Comments');
        const data = await userMessage.get();
        const commentList = []
        if(data.empty) {
            res.status(400).send('No hay mensajes...')
        }else {
            data.forEach( doc => {
                const comments = new Comment (
                    doc.id,
                    doc.data().email,
                    doc.data().comment
                );
                commentList.push(comments);
            })
            res.json({
                Operation: "Success",
                Clients: commentList
            });
        }
    }catch( err ) {
        res.status(404)
    }
}

const getComment = async (req, res ) => {
    try {
        const id = req.params.id;
        const comment = await firestore.collection('Comments').doc(id);
        const data = await comment.get();
        if(!data.exists) {
            res.status(404).send('Comment not found.');
        }else {
            res.send(data.data());
        }
    } catch ( err ) {
        res.status(400).send({
            success: false,
            error: err.message
        })
    
    }
}

const updateComment = async ( req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const comment = await firestore.collection('Comments').doc(id);
        
        await comment.update(data);
        res.send('Comment updated successfully.')

    }
    catch( err ) {
        res.status(400).send({
            success: false,
            error: err.message
        })
    
    }
}

const deleteComment = async (req, res ) => {
    try {
        const id = req.params.id;
        firestore.collection('Comments').doc(id).delete()
            res.status(200).send({
                success: true,
                message: 'Comment deleted successfully.'
            })   
       
    } catch (err ) {
        res.status(404)
    }
}


module.exports = {
    addComment,
    getComments, 
    getComment,
    updateComment,
    deleteComment
}