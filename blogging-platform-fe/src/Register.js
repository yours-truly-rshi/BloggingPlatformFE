import React, {useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/users/register', {email, password, name});
            setMessage(response.status.toString());
        } catch (error) {
            setMessage("Request Denied");
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={handleEmailChange} type="email" placeholder="Enter email"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={handlePasswordChange} type="password"
                                  placeholder="Password"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} onChange={handleNameChange} type="string"
                                  placeholder="Enter Name"/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

                <Link to="/login" style={{padding: 5, color: "#8fea04"}}>
                    Login
                </Link>
            </Form>
            <p>{message}</p>
        </div>
    );
};

export default Register;
