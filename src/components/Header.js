import React from 'react'
import { StyledHeader } from './styles/HeaderStyled'


export default function Header() {
  return ( 
    <StyledHeader>
        <div class="navbar_container">
            <div id="navbar_logo">logo</div>
            <ul className="navbar_manu">
                <li className="navbar_item">
                    <a href="" className="navbar_links">man</a>
                </li>
                <li className="navbar_item">
                    <a href="" className="navbar_links">woman</a>
                </li>
                <li className="navbar_item">
                    <a href="" className="navbar_links">kids</a>
                </li>
                <li className="shopping_cart">
                    <a href="" className="navbar_links">shopping cart</a>
                </li>
                
                <li className="navbar_btn">
                    <a href="signup.html" className="signup_button" type="button">Sign up</a>
                </li>
            </ul>
        </div>
    </StyledHeader>
  )
}