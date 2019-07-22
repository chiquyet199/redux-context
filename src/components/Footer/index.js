import React from 'react'
import './index.css'

const Footer = () => {
  return (
    <footer>
      <section className="getintouch">
        <h1>get in touch</h1>
        <p>
          Any questions? Let us know in store at 325 Phan Van Tri or
          call us on (+84) 925 956 347
        </p>
      </section>
      <section className="categories">
        <h1>categories</h1>
        <ul>
          <li>
            <a>Men</a>
          </li>
          <li>
            <a>Women</a>
          </li>
          <li>
            <a>Dresses</a>
          </li>
          <li>
            <a>Sunglasses</a>
          </li>
        </ul>
      </section>
      <section className="links">
        <h1>links</h1>
        <ul>
          <li>
            <a>Search</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
          <li>
            <a>Returns</a>
          </li>
        </ul>
      </section>
      <section className="help">
        <h1>help</h1>
        <ul>
          <li>
            <a>Track Order</a>
          </li>
          <li>
            <a>Returns</a>
          </li>
          <li>
            <a>Shipping</a>
          </li>
          <li>
            <a>FAQs</a>
          </li>
        </ul>
      </section>
      <section className="newletter">
        <h1>newsletter</h1>
        <div className="control">
          <input placeholder="email@example.com"/>
          <button>subscribe</button>
        </div>
      </section>
    </footer>
  )
}

export default Footer
