import React from 'react';
import Board from '../components/Board';
import Header from '../components/Header';
import Comment from '../components/Comments';
import Footer from '../components/Footer';
import './css/Home.css';


const Home = () => {

    const styles = {
        main: {
            display: "flex",
        }
    }
    return (
       <div>
           <Header />
           <div style= { styles.main } className="main">
                <Board />
                <Comment />
           </div>
           <Footer />   
       </div>
    );
}

export default Home;