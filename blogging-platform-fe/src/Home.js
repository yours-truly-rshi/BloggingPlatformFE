import React from 'react';
// import axios from 'axios';
import {Link} from "react-router-dom";

const Home = () => {


    return (
        <div>
            <h2>
                Welcome to Blogging World!
            </h2>
            <Link to="/login" style={{padding: 5, color: "#8fea04"}}>
                Login
            </Link>
            <Link to="/register" style={{padding: 5, color: "#8fea04"}}>
                Register
            </Link>
        </div>
    );
}
export default Home;