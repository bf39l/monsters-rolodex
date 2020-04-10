import React from 'react';
import './card-list.style.css';
import {Card} from '../card/card.component';

/* 
    function component -> stateless
    main property exists on this props objects is children
    children are actually what we pass in between the brackets
    <></> of our componets thats gets called
    {props.children} -> {} is js 
 */
export const Cardlist = (props) =>(
    //console.log(props);
    <div className = 'card-list'>
         {props.monsters.map(monster => (
             // pass monster into card component
            <Card key={monster.id} monster = {monster} /> 
          ))}
     </div>
);