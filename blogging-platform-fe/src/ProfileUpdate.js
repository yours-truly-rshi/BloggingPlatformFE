import React, {useState} from 'react';
import Modal from 'react-modal';
import {axiosInstance} from "./utils";
import jwt_decode from "jwt-decode";


const ProfileUpdate = ({isOpen, onRequestClose, name, email, password}) => {
    const [updatedName, setUpdatedName] = useState(name.toString());
    const [updatedEmail, setUpdatedEmail] = useState(email.toString());
    const [updatedPassword, setUpdatedPassword] = useState(password.toString());
    const [message, setMessage] = useState("");


    const handleNameChange = (event) => {
        setUpdatedName(event.target.value);
    };
    const handleEmailChange = (event) => {
        setUpdatedEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setUpdatedPassword(event.target.value);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        // Call API to update user's profile with updatedName
        // Close the modal after updating
        const token = localStorage.getItem('jwtToken');
        const decodedToken = jwt_decode(token);
        const id = decodedToken.sub;
        try {
            const response = await axiosInstance.put(`/api/users/${id}`, {
                email: updatedEmail,
                password: updatedPassword,
                name: updatedName
            });
            setMessage(response.status.toString());
            window.location.reload();
        } catch (error) {
            setMessage("Request Denied");
            console.log(message);
        }

        onRequestClose();
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <h2>Update Profile</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={updatedName} onChange={handleNameChange}/>
                </label>
                <label>
                    Email:
                    <input type="email" value={updatedEmail} onChange={handleEmailChange} autoComplete="off"/>
                </label>
                <label>
                    Password:
                    <input type="password" value={updatedPassword} onChange={handlePasswordChange} autoComplete="new-password"/>
                </label>
                <button type="submit">Update</button>
                <button onClick={onRequestClose}>Cancel</button>
            </form>
        </Modal>
    );
};

export default ProfileUpdate;
