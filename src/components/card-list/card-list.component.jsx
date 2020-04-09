import React from 'react';
import './card-list.style.css';

/* 
    function component -> stateless
    main property exists on this props objects is children
    children are actually what we pass in between the brackets
    <></> of our componets thats gets called
    {props.children} -> {} is js 
 */
export const Cardlist = (props) =>{
    console.log(props);
    return (<div className = 'card-list'>{props.children}</div>)
};