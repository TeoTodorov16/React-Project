import React from 'react';
import './Header.css';
import SearchForm from '../SearchForm/SearchForm';
import Profile from '../ProfileForm/Profile'

const Header = () => {
    return (
        <div className='holder'>
            <div className='header'>
                <Profile></Profile>

                <SearchForm />
                
            </div>
        </div>
    )
}

export default Header
