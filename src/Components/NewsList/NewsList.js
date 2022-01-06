import React, { useEffect, useState } from 'react';
import NewsData from './NewsData';

const NewsList = () => {
    const [newsInfo, setNewsInfo] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setNewsInfo(data))
    }, [])

    // console.log(newsInfo)
    return (
        <div className="container">
            <div className="row">
                {
                    newsInfo.map(data => <NewsData info ={data} key={data.id}></NewsData>)
                }
            </div>
        </div>
    );
};

export default NewsList;