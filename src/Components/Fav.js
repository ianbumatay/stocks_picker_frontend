import React from 'react'

import Stock from './Stock'


const Fav = (props) => { 
    console.log(props)

    return (
        <div>
           <h1>Portfolio</h1>
           {props.favorites.map( fav =>  <div key={fav.id}><Stock stock={fav} deleteFavFucntion={props.deleteFavFucntion}/></div>)}
  
        </div>
    )
} 

export default Fav;
