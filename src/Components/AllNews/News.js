import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../Css/News.css';
import img from '../../images/profile.jpg';

const News = (props) => {
    const {title, body} = props.info;
    
    return (
        <div className='d-flex'>
            <div className="news-box d-flex">
                <img style={{width: '100px', marginRight: "10px", borderRadius: '50%'}} src={img} alt="" />
                <div>
                    <h5>{title}</h5>
                    <p>{body}</p>
                </div>
            </div>
            <a href="#"><FontAwesomeIcon icon={faTimesCircle} /></a>
            
        </div>
    );
};

export default News;