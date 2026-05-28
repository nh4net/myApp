import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AxiosEx1() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // 로딩 상태
    const [error, setError] = useState(null);     // 에러 상태

    useEffect(() => {     
        const fetchPosts = async () => {
            try {
                setLoading(true);
                //const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                const response = await axios.get('http://localhost:3001/data');
                setData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    if (loading) return <p>데이터 불러오는 중...</p>;
    if (error) return <p>에러: {error}</p>

    return (
        <div>
            <h1>Posts</h1>                           
            {data.message}         
            {data.data[0] + data.data[1]}
            
        </div>
    )
}