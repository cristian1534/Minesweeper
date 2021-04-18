import React, { useState } from 'react';
import { firebaseApp } from '../db/firebase-config';
import { useHistory } from "react-router";
import swal from 'sweetalert';
import 'firebase/auth';
import './css/Register.css';



export default function Register( props ) {
  const [ name, setName ] = useState('');
  const [ surname, setSurname ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const firebase = firebaseApp;
  const history = useHistory();
 
  const handleSubmit = (e) => {
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword( email, password )
    swal({
      title:`Account created successfully ${ name } ${ surname }!`,
      icon:"success",
   
    })
    history.push("/login")  
    
  }
  

  return (
    <div className="container">
        <div className="rows">
        <h1 className='container'>Minesweeper Fun!</h1>
        <svg xmlns="http://www.w3.org/2000/svg" 
        width="56" 
        height="56" 
        fill="currentColor" 
        className="bi bi-person-check container" 
        viewBox="0 0 16 16">
        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4
         8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.
         664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
        <path fillRule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708
         0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
        </svg>
        <h3 className='container'>Create Account</h3>
            <form  className="col-xs-12 col-sm-12 col-md-12"  onSubmit={ handleSubmit }>       
                <div className="form-group">
                    <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder="Insert your firstname...*" 
                    name="name"
                    value={ name } 
                    onChange={ (e) => setName(e.target.value)}
                    required />
                  </div>           
                <div className="form-group">
                    <input 
                    type="text" 
                    className="form-control" 
                    id="surname" 
                    placeholder="Insert your lastname... *" 
                    name="surname" 
                    value={ surname }
                    onChange={ (e) => setSurname(e.target.value)}
                    required />
                  </div>               
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
                 <p>Do you have account? <a href="/login">Login</a></p>
            </form>
        </div>
  </div>
  );
}