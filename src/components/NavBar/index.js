import React, {useContext} from 'react'
import AppContext from '../../context'
import {Link} from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
import {withRouter} from 'react-router-dom'
import './index.css'

function NavBar(props) {
  // eslint-disable-next-line no-restricted-globals
  const activePage = location.pathname.split('/')[1]
  const {state} = useContext(AppContext)
  return (
    <nav>
      <div className="logo">
        <img src="https://www.freelogodesign.org/Content/img/logo-ex-7.png" />
      </div>
      <div className="menuContainer">
        <ul className="menulist">
          <li className={activePage === '' ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={activePage === 'shop' ? 'active' : ''}>
            <Link to="/shop">Shop</Link>
          </li>
          <li className={activePage === 'sale' ? 'active' : ''}>
            <Link to="/sale">Sale</Link>
          </li>
          <li className={activePage === 'feature' ? 'active' : ''}>
            <Link to="/feature">Feature</Link>
          </li>
          <li className={activePage === 'blog' ? 'active' : ''}>
            <Link to="/blog">Blog</Link>
          </li>
          <li className={activePage === 'about' ? 'active' : ''}>
            <Link to="/about">About</Link>
          </li>
          <li className={activePage === 'contact' ? 'active' : ''}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="moreinfo">
          <Link to="/checkout">
            <FaShoppingCart />
            <span className="shopping-cart">
              {state.shoppingCart.length}
            </span>
          </Link>
          <span className="separator">|</span>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(NavBar)
