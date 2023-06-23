import React from 'react'
import BannerImage from '../assets/1beef.jpg'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage:`url(${BannerImage})`}}></div>
        <div className="aboutBottom">
            <h1>ABOUT US</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime ab, doloremque eius corporis laudantium nam dolorem sequi pariatur aliquam vitae nemo quis omnis assumenda sed atque dignissimos tenetur fugit facere.</p>
        </div>
        
    </div>
  )
}

export default About