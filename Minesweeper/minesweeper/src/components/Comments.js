import React, { useState } from 'react'
import { db } from '../db/firebase-config';
import swal from 'sweetalert';


const Comments = () => {
    const [ email, setEmail ] = useState("");
    const [ comment, setComment ] = useState("");


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
             setEmail("")
             setComment("")
             
        })
     
        .catch((err) => {
            alert(err.message)        
        })
       

    }
 
    return (
        <div>
           <form onSubmit={ handleSubmit } id="form">
                <div className="mb-3 mt-5 ml-2">
                        <label forhtml="exampleFormControlInput1" className="form-label">Email address:</label>
                        <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="name@example.com" 
                        onChange={ (e) => setEmail(e.target.value)}
                        value={ email }
                        required
                        />
                    </div>
                    <div className="mb-3 ml-2">
                        <label forhtml="exampleFormControlTextarea1" className="form-label">Comments:</label>
                        <textarea 
                        className="form-control" 
                        id="comment" 
                        rows="3"
                        onChange={ (e) => setComment(e.target.value)}
                        required
                        value={ comment }
                        ></textarea>
                        <button  className="btn btn-primary mt-3" type="submit">Send</button>
                 </div>
           </form>
        </div>
    );
}

export default Comments;