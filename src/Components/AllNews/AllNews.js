import React, { useEffect, useState } from 'react';

const AllNews = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setNews(data))
    }, [])

    console.log(news)


    return (
        <div>
            
        </div>
    );
};

export default AllNews;