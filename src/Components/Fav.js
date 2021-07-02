import React from 'react'

import Stock from './Stock'


const Fav = (props) => { 

    return (
        <div>
           <h1>Portfolio</h1>
           {props.favorites.map( fav =>  <div key={fav.id}><Stock stock={fav} sell={props.sell}/></div>)}
  
        </div>
    )
} 

export default Fav;
