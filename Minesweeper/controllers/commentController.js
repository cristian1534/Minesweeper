'use strict'

const firebase = require('../db');
const Comment = require('../models/comment');
const firestore = firebase.firestore(); 


const addComment = async ( req, res ) => {
    try {
        const data = req.body;
        await firestore.collection('Comments').doc().set(data);
        res.send('Loading...')
    }catch( err ) {
        res.status(400).send( error.message )
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
                const comment = new Comment (
                    doc.id,
                    doc.data().email,
                    doc.data().message
                );
                commentList.push(comment);
            })
            res.json({
                Operation: "Success",
                Clients: commentList
            });
        }
    }catch( err ) {
        res.status(400).send( err.message )
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
    } catch (error) {
        res.status(400).send(error.message);
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
        res.status(400).send( error.message )
    }
}

const deleteComment = async (req, res ) => {
    try {
        const id = req.params.id;
        await firestore.collection('Comments').doc(id).delete();
        res.send('Comment was deleted successfully.');
    } catch (error) {
        res.status(400).send(error.message);
    }
}


module.exports = {
    addComment,
    getComments, 
    getComment,
    updateComment,
    deleteComment
}