import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/banner.jpg'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${BannerImage})`}}>
        <div className="headerContainer">
            <h1>Burger 35</h1>
            <p>Delicious Burgers <br/> with 35 Spicy Mixed</p>
            <Link to="/menu">
             <button>Order Now</button>
            </Link> 
        </div>
       
    </div>
  )
}

export default Home