import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft, faCoffee, faList, faListAlt } from '@fortawesome/free-solid-svg-icons';
import { faLine } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return (
        <section className="sidebar">
            <h4>Sidebar</h4>
            <div className="profile d-flex">
                <div><img src="" alt="" /></div>
                <div>
                    <h6>Hi! Reader,</h6>
                    <p>Here's your News!</p>
                </div>
            </div>

            <div>
                <h4>View Toggle</h4>

                <div>
                    <a href="#"><FontAwesomeIcon icon={faAlignLeft} /></a>
                    <a href="#"><FontAwesomeIcon icon={faList} /></a> 
                     
                </div>
            </div>

            <div>
                <h4>Have a Feedback?</h4>
                <button className="btn btn-secondary">We're Listening!</button>
            </div>


        </section>
    );
};

export default Sidebar;