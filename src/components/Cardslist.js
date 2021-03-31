import React from 'react';
import Cards from './Cards';

const Cardslist=({robots})=>{
    const cardarray= robots.map((user,i)=>{
        return(
            <Cards key={i} name={robots[i].name} id={robots[i].id} email={robots[i].email}/>
        );
    })
    return(
        <div>
            {cardarray};
        </div>
       );
}
export default Cardslist;