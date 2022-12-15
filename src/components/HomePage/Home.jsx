import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import { Outlet } from 'react-router';

const Home = () => {
    return (
       <main>
           <Header />
           <Outlet />
       </main>
    )
}

export default Home
