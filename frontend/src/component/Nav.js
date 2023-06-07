import React from 'react';
const Nav=()=>{
    return(
        <div>
            <ul className="Nav-ul">
            <li><a href="/">Products</a></li>
            <li><a href="/add">Add product</a></li>
            <li><a href="/update"> Update Products</a></li>
            <li><a href="/logout">logout</a></li>
            <li><a href="/profile">profile</a></li>
            <li><a href="/signup">signup</a></li>
            </ul>
        </div>
    )
}
export default Nav;
