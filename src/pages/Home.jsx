import React from 'react'
import Body from '../components/Body'
import Barra from '../components/Barra'
import Header from '../components/Header'

const Home = () => {
  return (
    <div>
        <Header/>
      <div className='content'>  
        <div><Barra/></div>
        <div><Body/></div>
      </div>

      <div className='soporte'>
        <img src="src/assets/help.svg" alt="menú" className='list__img'/>
        <a href="#" className='nav__link'>Soporte</a>
      </div>
    </div>
    

  )
}

export default Home