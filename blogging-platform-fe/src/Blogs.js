import React, {useEffect, useState} from 'react';
import {Table, Button} from 'react-bootstrap';
import {axiosInstance} from './utils';
import {useNavigate} from "react-router-dom";


const Blogs = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getBlogs();
    }, []);


    function getBlogs() {
        axiosInstance.get('/api/blogs').then(r => setData(r.data))
            .catch(error => {
                console.error(error);
            });
    }

    const handleRowClick = ({id}) => {
        navigate(`/SingleBlog/${id}`);
    };

    const handleDelete = (id, event) => {
        event.stopPropagation()
        axiosInstance.delete(`/api/blogs/${id}`).then(() => getBlogs())
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <h2>Blogs</h2>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Topic</th>
                    <th>Content</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index} onClick={() => handleRowClick(item)}>
                        <td>{index + 1}</td>
                        <td>{item.topic}</td>
                        <td>{item.data}</td>
                        <td>
                            <Button variant="danger"
                                    onClick={(event) => handleDelete(item.id, event)}>
                                Delete
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Blogs;
