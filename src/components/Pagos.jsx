import React from 'react'
import Barra from './Barra'
import Formatos from './Formatos'
import Header from './Header'

const Pagos = () => {
  return (
    <div>
        <Header/>
        <div className='subtitulo'>
        </div>
    <div id='container'>
        <Barra/>
        <Formatos/>
    </div>
    <div className='soporte'>
        <img src="src/assets/help.svg" alt="menú" className='list__img'/>
        <a href="#" className='nav__link'>Soporte</a>
      </div>
    </div>

  )
}

export default Pagos