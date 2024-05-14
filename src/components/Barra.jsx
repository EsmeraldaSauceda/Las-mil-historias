import React from 'react'

const Barra = () => {
  return (
    <div className='barra_lateral'>
        <h2>Categorías</h2>
        <a href="/Pagos" className='nav__link nav__link--inside'><button>Pagos</button></a>
        <a href="/" className='nav__link nav__link--inside'><button>Home</button></a>
    </div>
  )
}

export default Barra