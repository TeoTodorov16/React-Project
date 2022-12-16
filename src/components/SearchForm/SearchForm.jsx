import React, {useRef, useEffect} from 'react';
import image from "../../assets/4bff2816-7ab6-424b-b77b-7a179060b123.png"
import { useNavigate } from 'react-router';
import "./SearchForm.css";
import {useGlobalContext} from '../../context';


const SearchForm = () => {
    const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/home");
  };
    return (
        <div className="search-form">
           <div className="container">
               <div className="search-form-container">
                   <form className="search-form" onSubmit={handleSubmit}>
                       <div className="search-form-container flex flex-sb bg-white">
                           <h4 className="all-books-heading">ALL BOOKS</h4>
                           <input type="text" className="form-control" placeholder="Search" ref={searchText} />
                           <button className="btn-search" onClick={handleSubmit} >
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
