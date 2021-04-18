import React, { useState } from 'react'
import firebase from 'firebase';
import swal from 'sweetalert';


const Comments = () => {
    const [ email, setEmail ] = useState("");
    const [ comment, setComment ] = useState("");

    const db = firebase.firestore();
    const form = document.getElementById('form')

    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('Comments').add({
            email: email,
            comment: comment
        })
        .then(() => { 
            swal({
                title:"Comment sent successfully!",
                text:"Your comment helps me to improve myself.",
                icon:"success",
             
             })
             form.reset()
        })
        .catch((err) => {
            alert(err.message)        
        })

    }
 
    return (
        <div>
           <form onSubmit={ handleSubmit } id="form">
                <div class="mb-3 mt-5 ml-2">
                        <label for="exampleFormControlInput1" class="form-label">Email address:</label>
                        <input 
                        type="email" 
                        class="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="name@example.com" 
                        onChange={ (e) => setEmail(e.target.value)}
                        required
                        />
                    </div>
                    <div class="mb-3 ml-2">
                        <label for="exampleFormControlTextarea1" class="form-label">Comments:</label>
                        <textarea 
                        class="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3"
                        onChange={ (e) => setComment(e.target.value)}
                        required
                        ></textarea>
                        <button  className="btn btn-primary mt-3" type="submit">Send</button>
                 </div>
           </form>
        </div>
    );
}

export default Comments;