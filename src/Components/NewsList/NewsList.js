import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
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
        <div className="bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Sidebar />
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            {
                                newsInfo.map(data => <NewsData info ={data} key={data.id}></NewsData>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsList;