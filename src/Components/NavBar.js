import React from 'react' 
import {NavLink} from 'react-router-dom'

const NavBar = () => {

    return(
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/stocks">Stocks</NavLink> 
            <NavLink to="/stocks/;id"> Stock</NavLink>
            <NavLink to="/stocks/new">Create</NavLink>
        </div>
    )
} 

export default NavBar;