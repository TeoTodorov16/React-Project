import React from 'react';
import './Loader.css';
import LoaderImg from '../../assets/loader.svg'

const Loader = () => {
    return (
        <div className="loader flex flex-c">
           <img src={LoaderImg} alt="loader"></img> 
        </div>
    )
}

export default Loader
