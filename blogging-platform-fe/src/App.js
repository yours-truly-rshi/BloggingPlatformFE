import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginForm from "./LoginForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./Register";
import Home from "./Home";
import Blogs from "./Blogs";


function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/blogs" element={<Blogs/>}/>
            </Routes>
        </Router>
    );
}

export default App;
