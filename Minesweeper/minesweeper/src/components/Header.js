import React from 'react'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">
                <img src="https://img2.freepng.es/20180325/kqe/kisspng-minesweeper-computer-icons-bing-maps-video-game-mines-5ab7a191c79531.0286407715219838898175.jpg" 
                    width="30"
                    height="30" 
                    alt="logo" 
                    className="mr-2"
                    />MINESWEEPER
            </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <button  className="btn btn-primary mt-2" href="/">Logout</button>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;