import React from 'react';



const Cards=(props)=>{
     return(
         <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
             <img src={`https://robohash.org/${props.name}?size=200x200`} alt="robots"/>

             <div>
                <h3>{props.name}</h3>
                <p>{props.email}</p>
             </div>
         </div>
        );
}
export default Cards;