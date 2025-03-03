import React from 'react'
import './Promise.css'
import { ShieldCheck, TrendingUp } from "lucide-react";

const Promise = () => {
  return (
    <section className='Promise-section'>
        <section className='Promises'>
         {/* Promise & Guarantee Section */}
        <section className='left-sec'>
        <ShieldCheck className="icon"/>
        <h2 className="main-Text">Our Commitment</h2>
        <p className="sub-Text">
        We craft personalized strategies tailored to your<br/> brand’s needs, ensuring real impact and sustainable<br/> growth.
        </p>
        </section>
        <section className='right-sec'>
        <TrendingUp className="icon"/>
          <h2 className="main-Text">Your Success, Our Priority</h2>
          <p className="sub-Text">
            We partner with you to elevate your brand,<br/> delivering innovative marketing solutions with<br/> transparency and excellence.
          </p>  
        </section>
        </section>
    </section>
    
  )
}

export default Promise