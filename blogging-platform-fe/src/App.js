import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginForm from "./LoginForm";

const Register = () => <h2>Register</h2>;

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginForm/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </Router>
    );
}

export default App;
