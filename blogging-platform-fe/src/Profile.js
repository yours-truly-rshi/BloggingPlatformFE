import React, {useEffect, useState} from 'react';
import {axiosInstance} from "./utils";
import jwt_decode from 'jwt-decode';

const Profile = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        const decodedToken = jwt_decode(token);
        const id = decodedToken.sub;
        axiosInstance.get(`/api/users/${id}`).then(response => {
            setName(response.data.name)
            setPassword(response.data.password)
            setEmail(response.data.email)
        }).catch(error => {
            console.error(error)
        })
    }, []);


    return (
        <div>
            <h1>Name : {name}</h1>
            <h1>Email : {email}</h1>
            <h1>Password : {password}</h1>
        </div>
    )
}
export default Profile;