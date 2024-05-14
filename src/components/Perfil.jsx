import React from 'react'
import Barra from './Barra'
import Datos from './Datos'
import Header from './Header'

const Perfil = () => {
  return (
    <div>
     <Header/>
    <div id='container'>
      <div><Barra/></div>
      <div><Datos/></div>
    </div>
    <div className='soporte'>
        <img src="src/assets/help.svg" alt="menú" className='list__img'/>
        <a href="#" className='nav__link'>Soporte</a>
    </div>
    
    </div>

  )
}

export default Perfil