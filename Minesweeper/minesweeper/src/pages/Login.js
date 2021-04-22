import React, { useState } from 'react';
import { firebaseApp } from '../db/firebase-config';
import { useHistory } from "react-router";
import swal from 'sweetalert';
import 'firebase/auth';
import './css/Login.css';



export default function Login( props ) {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const firebase = firebaseApp;
  const history = useHistory();
  
  
  const  handleSubmit = (e) =>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password)
        .then(()=>{
            history.push('/Home')
            swal({
                title:"Welcome, have fun!",
                text: "I'm Cristian Machuca, Thanks for visiting my project.",
                icon:"success",
             
              });
        }).catch((error)=>{
            swal({
                title: "Check your username or password.",
                text: "You must have an account.",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
        })
  }

  return (
    <div className="container">
        <div className="rows">
        <h1 className='container title'>Minesweeper Fun!</h1>
        <svg xmlns="http://www.w3.org/2000/svg" 
        width="56" 
        height="56" 
        fill="currentColor" 
        className="bi bi-key container" 
        viewBox="0 0 16 16">
        <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 
        .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 
        1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 
        0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3
         3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 
         0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.
         646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
        <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
        </svg>
        <h3 className='container'>Login</h3>
            <form  className="col-xs-12 col-sm-12 col-md-12"  onSubmit={ handleSubmit }>          
                <div className="form-group">
                    <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="Insert your email... *" 
                    name="email"
                    value={ email }
                    onChange={ (e) => setEmail(e.target.value)} 
                    required />
                </div>
                <div className="form-group">
                    <input 
                     type="password" 
                     className="form-control" 
                     id="password" 
                     placeholder="Password minimun 6 characters...*" 
                     name="password" 
                     value={ password }
                     onChange={ (e) => setPassword(e.target.value)}
                     pattern="[A-Za-z0-9!?-]{6,12}"
                     required />
                </div>
                <p>Mandatory information(*)</p>
                    <button 
                    type="submit" 
                    className="btn btn-success container mb-5"
                    >Send
                    </button><hr/>
                 <p>Do you not have account? <a href="/">Register</a></p>
            </form>
        </div>
  </div>
  );
}