import React from 'react';
import Sidebar from '../../components/Sidebar';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='mainBackground flex-1 h-screen w-screen p-14'>
                <h1>Welcome to the Home Page</h1>
                <p>This is the home page of our application.</p>
            </div>
        </div>
    );
};

export default Home;
