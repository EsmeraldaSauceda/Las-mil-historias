import React from 'react'
import Barra from './Barra'
import Formatos from './Formatos'

const Pagos = () => {
  return (
    <div id='container'>
      <header>
        <h1>Formas de pagos</h1>
      </header>
      <Barra/>
      <Formatos/>
    </div>
  )
}

export default Pagos