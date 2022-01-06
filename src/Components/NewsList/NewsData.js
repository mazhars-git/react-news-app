import React from 'react';

const NewsData = (props) => {
    const {title, body} = props.info;
    return (
        <div className="col-md-4">
            <h6>{title}</h6>
            <p>{body}</p>
        </div>
    );
};

export default NewsData;