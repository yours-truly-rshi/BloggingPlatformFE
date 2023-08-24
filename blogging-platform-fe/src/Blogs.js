import React, {useEffect, useState} from 'react';
import {Table} from 'react-bootstrap';
import {axiosInstance} from './utils';
import {useNavigate} from "react-router-dom";


const Blogs = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axiosInstance.get('/api/blogs').then(r => setData(r.data))
            .catch(error => {
                console.error(error);
            });
    }, []);
    const navigate = useNavigate();


    const handleRowClick = ({id}) => {
        console.log('Data:', id);
        navigate(`/SingleBlog/${id}`);
    };

    return (
        <div>
            <h2>Blogs</h2>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    {/*<th>id</th>*/}
                    <th>Topic</th>
                    <th>Content</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index} onClick={() => handleRowClick(item)}>
                        <td>{index + 1}</td>
                        {/*<td>{item.id}</td>*/}
                        <td>{item.topic}</td>
                        <td>{item.data}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Blogs;
