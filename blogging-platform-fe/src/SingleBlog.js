import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {axiosInstance} from "./utils";

const SingleBlog = () => {

    const [topic, setTopic] = useState('')
    const [data, setData] = useState('')
    const {id} = useParams();
    useEffect(() => {
        axiosInstance.get(`/api/blogs/${id}`).then(response => {
            setData(response.data.data);
            setTopic(response.data.topic);
        }).catch(error => {
            console.error(error)
        })
    }, []);


    return (
        <div>
            <h1>{topic}</h1>
            <p>{data}</p>
        </div>

    )
};

export default SingleBlog
