import React from 'react';
import Cards from './Cards';


const Cardslist = ({ robots }) => {
    return (
        <div>
        {robots.map((user, i) => {
      return  <Cards key = {robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    })}
       </div>
    )
}



export default Cardslist;


