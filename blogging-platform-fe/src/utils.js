import axios from 'axios';

// Assuming you have a JWT token stored in jwtToken variable
const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1IiwiZXhwIjoxNjkyODE2MjE5fQ.9uqxffzJ8B9SjBe5P7v0jJOPiLHHzlXKyzGOIzuIfkw';


export const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        'Authorization': `Bearer ${jwtToken}` // Add JWT token to the Authorization header
    }
});
