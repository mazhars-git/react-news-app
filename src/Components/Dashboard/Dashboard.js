import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className="container">
            <div className="row py-5">
                <div className='col-md-4'>
                    <Sidebar />
                </div>
                <div className='col-md-8'>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;