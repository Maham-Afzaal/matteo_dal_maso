import React from 'react'
import NavBarr from './NavBarr'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <NavBarr/>
        <div className='boxImg max-[420]:min-h-350 '> 
            <div className='boxOverlay'></div>
            <div></div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home