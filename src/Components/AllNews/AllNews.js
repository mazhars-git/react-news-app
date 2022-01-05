import React, { useEffect, useState } from 'react';
import News from './News';

const AllNews = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setNews(data))
    }, [])


    return (
        <div className="container">
            <div className='row'>
                {
                news.map(info => <News info={info} key={info.id}></News>)  
                }
            </div>
        </div>
    );
};

export default AllNews;