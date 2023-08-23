import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginForm from "./LoginForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./Register";
import Home from "./Home";
// const Register = () => <h2>Register</h2>;

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </Router>
    );
}

export default App;
