import React from 'react';

const News = (props) => {
    const {title, body} = props.info;
    
    return (
        <div className='news-box' style={{border: '1px solid green', margin: '5px'}}>
            <h5>{title}</h5>
            <p>{body}</p>
        </div>
    );
};

export default News;