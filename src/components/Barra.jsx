import React from 'react'
import LiComponent from './LiComponent'

const Barra = () => {
  return (
    <aside>
         <nav className='nav'>
            <ul className='list'>

              <li className='list__item'>
                <div className='list__button'>
                  <img src="src/assets/perfil.svg" alt="menú" className='list__img'/>
                  <a href="/Perfil" className='nav__link'>Perfil</a>
                </div>
              </li>

              <li className='list__item list__item--click'>
                <div className="list__button list__button--click">
                  <img src="src/assets/libro.svg" alt="cog" className='list__img' />
                  <a href="#" className='nav__link'>Categorías</a>
                  <img src="src/assets/arrow.svg" alt="flecha" className='list__arrow'/>
                </div>

                <ul className='list__show'>
                  <li className='list__inside'>
                    <a href="/Pagos" className='nav__link nav__link--inside'>Pagos</a>
                  </li>

                  <li className='list__inside'>
                    <a href="/" className='nav__link nav__link--inside'>Home</a>
                  </li>

                </ul>
              </li>

              <li className='list__item list__item--click'>
                <div className="list__button list__button--click">
                  <img src="src/assets/cog.svg" alt="cog" className='list__img' />
                  <a href="#" className='nav__link'>Configuración</a>
                  <img src="src/assets/arrow.svg" alt="flecha" className='list__arrow'/>
                </div>

                <ul className='list__show'>
                  <LiComponent/>

                  <LiComponent/>

                </ul>
              </li>

              <li className='list__item'>
                <div className='list__button'>
                  <img src="src/assets/help.svg" alt="menú" className='list__img'/>
                  <a href="#" className='nav__link'>Soporte</a>
                </div>
              </li>

            </ul>
          </nav>
         </aside>
  )
}

export default Barra