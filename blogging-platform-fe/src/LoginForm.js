import React, {useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/users/login', {email, password});
            setMessage(response.status.toString());
        } catch (error) {
            setMessage('Incorrect Email / Password.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={handleEmailChange} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={handlePasswordChange} type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

                <Link to="/register" style={{padding: 5, color: "#8fea04"}}>
                    Register
                </Link>
            </Form>
            <p>{message}</p>
        </div>
    );
};

export default LoginForm;
