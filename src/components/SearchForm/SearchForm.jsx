import React from 'react';
import image from "../../assets/4bff2816-7ab6-424b-b77b-7a179060b123.png"
import { useNavigate } from 'react-router';
import "./SearchForm.css";

const SearchForm = () => {

  

    return (
        <div className="search-form">
           <div className="container">
               <div className="search-form-container">
                   <form className="search-form">
                       <div className="search-form-container flex flex-sb bg-white">
                           <h4 className="all-books-heading">ALL BOOKS</h4>
                           <input type="text" className="form-control" placeholder="Search" />
                           <button className="btn-search" >
                             <img src={image}></img>
                           </button>
                       </div>
                   </form>
               </div>
           </div>
        </div>
    )
}

export default SearchForm
