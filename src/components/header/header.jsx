import React from 'react'
import { Link } from "react-router-dom"
import './header.styles.scss'
import CartIcon from '../cart-icon/cart-icon'

function Header() {
    return (
        <div>
            <nav className="nav-menu container">
                <div className="logo">
                    <Link to='/'>Mini</Link>
                </div>

                <ul>
                    <li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/shop'>
                            Shop
                        </Link>
                    </li>
                </ul>
                <CartIcon/>
            </nav>
        </div>
    )
}

export default Header
