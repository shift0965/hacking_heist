import React from 'react'
import { Link } from 'react-router-dom'
import { StyledHeader } from './styles/HeaderStyled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function Header({setSignOpen}) {
  return ( 
        <StyledHeader>
            <div className="navbar_container">
                <div id="navbar_logo"><img src='imgs/Logo.png'></img></div>
                <ul className="navbar_manu">
                    <li className="nav-links">
                        <Link className="navbar_links" to="/">men</Link>
                    </li>
                    <li className="nav-links">
                        <Link className="navbar_links" to="/">women</Link>
                    </li>
                    <li className="nav-links">
                        <Link className="navbar_links" to="/">kids</Link>
                    </li>
                    <li className="nav-links">
                        <Link className="navbar_links" to="/ShoppingCart">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </Link>
                    </li>
                    
                    <li className="navbar_btn">
                        <button className="signup_button" onClick={() => setSignOpen()}>Sign Up</button>
                    </li>
                </ul>
            </div>
        </StyledHeader>
  )
}
