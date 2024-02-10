import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Body  from './components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='container'>
         <header>
          <h1>Las mil historias</h1>
         </header>

         <section className='content'>
          <article className='article'>
          <div>
          <h1 className='titulo'>Historias frecuentes</h1>
              <div className='frecuente'>portada del libro</div>
              <div className='frecuente'>portada del libro</div>
              <div className='frecuente'>portada del libro</div>
              <div className='frecuente'>portada del libro</div>
              <div className='frecuente'>portada del libro</div>
              <div className='frecuente'>portada del libro</div>
              <div className='frecuente'>portada del libro</div>
          </div>

          <div class="clearfix"></div>

            <div>
              <h1 className='titulo'>Autores</h1>
              <div className='autor'>Perfil del autor</div>
              <div className='autor'>Perfil del autor</div>
              <div className='autor'>Perfil del autor</div>
              <div className='autor'>Perfil del autor</div>
              <div className='autor'>Perfil del autor</div>
              <div className='autor'>Perfil del autor</div>
              <div className='autor'>Perfil del autor</div>
            </div>
            
            <div class="clearfix"></div>

            <div className='inicial'>
              <p className='titulo'>Brujas</p>
              <div className='caja'>Historia 1</div>
              <div className='caja'>Historia 2</div>
              <div className='caja'>Historia 3</div>
            </div>

            <div className='inicial dos'>
              <p className='titulo'>Terror Cósmico</p>
              <div className='caja'>Historia 1</div>
              <div className='caja'>Historia 2</div>
              <div className='caja'>Historia 3</div>
            </div>

            <div className='inicial tres'>
              <p className='titulo'>Real</p>
              <div className='caja'>Historia 1</div>
              <div className='caja'>Historia 2</div>
              <div className='caja'>Historia 3</div>
            </div>

          </article>
         </section>

         <aside>
         <nav className='nav'>
            <ul className='list'>

              <li className='list__item'>
                <div className='list__button'>
                  <img src="src/assets/perfil.svg" alt="menú" className='list__img'/>
                  <a href="#" className='nav__link'>Perfil</a>
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
                    <a href="#" className='nav__link nav__link--inside'>Terror análogo</a>
                  </li>

                  <li className='list__inside'>
                    <a href="#" className='nav__link nav__link--inside'>Historia de cazadores</a>
                  </li>

                  <li className='list__inside'>
                    <a href="#" className='nav__link nav__link--inside'>Thriller</a>
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
                  <li className='list__inside'>
                    <a href="#" className='nav__link nav__link--inside'>Nueva historia</a>
                  </li>

                  <li className='list__inside'>
                    <a href="#" className='nav__link nav__link--inside'>Nueva historia</a>
                  </li>

                  <li className='list__inside'>
                    <a href="#" className='nav__link nav__link--inside'>Nueva historia</a>
                  </li>

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
      </div>
    </>
  )
}

export default App
