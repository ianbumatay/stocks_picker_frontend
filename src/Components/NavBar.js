import React from 'react' 
import {NavLink} from 'react-router-dom'

const NavBar = () => { 

    const link = {
        width: '100px', 
        padding: '12px',
        margin: '0 6px 6px',
        textDecoration: 'none',
        color:'white', 
    }

    return(
        <div>
            <span>
                <NavLink exact to="/" style={link} activeStyle={{backround: "bluegreen"}}>Home</NavLink>
                <NavLink exact to="/stocks" style={link} activeStyle={{backround: "bluegreen"}}>Stocks</NavLink> 
                <NavLink exact to="/stocks/new"style={link} activeStyle={{backround: "bluegreen"}}>Create</NavLink>
            </span>
         
        </div>
    )
} 

export default NavBar;