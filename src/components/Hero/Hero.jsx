import React from 'react'
import './Hero.css'
import hero_image from '../../assets/hero_pic.png'
const Hero = () => {
  return (
    <section className='Hero container'>
        <section className='left-sec'>
            <h1 className='headline'>Boost Your Brand’s Reach with<br/> 
                Expert Digital Marketing.</h1>
            <p className='subheadline'>We help businesses grow with SEO, social media,<br/> 
                and content marketing. 
                Let’s take your<br/> brand to the next level.</p>
            <section className='CTA'>
                <button className='btn'>Get a Free Consultation</button>
                <button className='btn btn-special'>See Our Work</button>
            </section>
        </section>
        <section className='right-sec'>
            <img src={hero_image} alt='Hero Image' className='hero-Img'/>
        </section>

        <div className='circle-blue vector-circle'></div>
        <div className='circle-yellow vector-circle'></div>
        <div className='circle-pink vector-circle'></div>
        <div className='circle-green vector-circle'></div>

    </section>
  )
}

export default Hero