import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import BookList from '../BookList/BookList';
import Loader from '../Loader/Loader';

const Home = () => {
    return (
       <main>
           <Header />
           <Outlet />
           <BookList />

       </main>
    )
}

export default Home
