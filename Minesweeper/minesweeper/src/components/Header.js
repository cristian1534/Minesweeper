import React from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../db/firebase-config';
import { useHistory } from "react-router";
import 'firebase/auth';



const Header = () => {


    const firebase = firebaseApp;
    const history = useHistory();

    const handleLogout = () => {
        firebase.auth().signOut()
        history.push('/')       
    }


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light main">
            <a class="navbar-brand" href="/">
                <img src="https://img2.freepng.es/20180325/kqe/kisspng-minesweeper-computer-icons-bing-maps-video-game-mines-5ab7a191c79531.0286407715219838898175.jpg" 
                    width="30"
                    height="30" 
                    alt="logo" 
                    className="mr-2"
                    />MINESWEEPER
            </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#options">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="options" >
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/">
                            <button  
                            onClick={ handleLogout }
                            className="btn btn-primary mt-2" >Logout</button>
                        </Link >
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;