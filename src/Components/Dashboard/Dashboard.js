import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import '../Css/Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="container">
                <div className="row py-5">
                    <div className='col-md-4'>
                        <Sidebar />
                    </div>
                    <div className='col-md-8'>
                        
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default Dashboard;