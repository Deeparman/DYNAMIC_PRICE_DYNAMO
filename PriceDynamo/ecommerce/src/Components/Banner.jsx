import React from 'react'
import logo from '../assets/logo.png'
import './Banner.css'

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-left">
        <h1 className="banner-title">ShopEase</h1>
        <p className="banner-quote">
          “Smart prices, smarter shopping — experience e-commerce that adapts to you.”
        </p>
        <button className="shop-btn">Shop Now</button>
      </div>

      <div className="banner-right">
        <img src={logo} alt="Company Logo" className="banner-logo" />
      </div>
    </section>
  )
}

export default Banner