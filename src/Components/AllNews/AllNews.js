import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import News from './News';

const AllNews = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setNews(data))
    }, [])


    return (
        <div className="bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Sidebar />
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            {
                                news.map(info => <News info={info} key={info.id}></News>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllNews;