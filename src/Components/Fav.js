import React from 'react'

import Stocks from './Stocks'


const Fav = (props) => { 
    console.log(props)

    return (
        <div>
           <h1>Portfolio</h1>
           {props.favorites.map( fav =>  <Stocks symbol={fav} name={fav} price={fav} id={fav}/>)}
  
        </div>
    )
} 

export default Fav;
