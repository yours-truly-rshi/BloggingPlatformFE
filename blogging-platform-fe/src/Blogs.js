import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap';


const Blogs = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/blogs').then(r => setData(r.data))
            .catch(error => {
                console.error(error);
            });
    }, []);

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
                    <tr key={index}>
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
