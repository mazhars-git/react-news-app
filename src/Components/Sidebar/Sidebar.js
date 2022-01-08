import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft, faCoffee, faList, faListAlt } from '@fortawesome/free-solid-svg-icons';
import { faLine } from '@fortawesome/free-brands-svg-icons';
import Pic from '../../images/profile.jpg';
import '../Css/Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <section className="sidebar">
            <div className="profile d-flex">
                <div><img style={{width: '30px', borderRadius: '50%'}} src={Pic} alt="" /></div>
                <div>
                    <h6>Hi! Reader,</h6>
                    <p>Here's your News!</p>
                </div>
            </div>

            <div className="toggle-area">
                <h4>View Toggle</h4>

                <div className="news-toggle">                    
                    <Link to="/newsList"><a href="#"><FontAwesomeIcon icon={faAlignLeft} /></a></Link>
                    <Link to="/news"><a href="#"><FontAwesomeIcon icon={faList} /></a></Link>                     
                </div>
            </div>

            <div className="feedback">
                <h4>Have a Feedback?</h4>
                <button className="btn btn-secondary">
                    <Link to="/feedback"> We're Listening!</Link></button>
            </div>


        </section>
    );
};

export default Sidebar;