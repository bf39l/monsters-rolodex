import React from 'react';
import './search-box.style.css';

/*  functional componet is get some props and return some html 
    if you don not need internal state nor access life cycle method 
    then just use functional component -> easy to read & test
*/
export const Searchbox = ({ placeholder, handleChange }) => (
    // const Searchbox = (props)
    // this.props.placeholder
    <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
    />
);