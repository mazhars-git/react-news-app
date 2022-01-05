import React from 'react';
import '../Css/News.css';

const News = (props) => {
    const {title, body} = props.info;
    
    return (
        <div className='news-box'>
            <img src="" alt="" />
            <div>
                <h5>{title}</h5>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default News;