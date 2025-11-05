import React from 'react'
import './Category.css';
import { Link } from 'react-router-dom';

import electronicsImg from '../assets/electronic.jpg';
import makeupImg from '../assets/makeup.jpg';
import menClothesImg from '../assets/menclothes.jpg';
import womenClothesImg from '../assets/womenclothes.jpg';
import skincareImg from '../assets/skincare.jpg';
import bagsPursesImg from '../assets/purse.webp';
import fragrancesImg from '../assets/perfume.jpg';
import watchesImg from '../assets/watch.jpeg';


const categories = [
  {
    name: "Electronics",
    image: electronicsImg,
    link: "electronics",
  },
  {
    name: "Women Clothes",
    image: womenClothesImg,
    link: "women-clothes",
  },
  {
    name: "Men Clothes",
    image: menClothesImg,
    link: "men-clothes",
  },
  {
    name: "Makeup",
    image: makeupImg,
    link: "makeup",
  },
  {
    name: "Skincare",
    image: skincareImg,
    link: "skincare",
  },
  {
    name: "Bags & Purses",
    image: bagsPursesImg,
    link: "bags-purses",
  },
  {
    name: "Fragrances",
    image: fragrancesImg,
    link: "fragrances",
  },
  {
    name: "Watches",
    image: watchesImg,
    link: "watches",
  },
];

const Category = () => {
  return (
    <section className="categories" id='category'>
      <h2 className="cat-title">Shop by Category</h2>

      <div className="cat-grid">
        {categories.map((cat, index) => (
          <div className="cat-card" key={index}>
            <img src={cat.image} alt={cat.name} className="cat-image" />
            <h3 className="cat-name">{cat.name}</h3>
            <Link to={`/category/${cat.link}`} className="view-btn">
              View All
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Category