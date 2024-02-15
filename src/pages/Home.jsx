import React from 'react'
import Body from '../components/Body'
import Barra from '../components/Barra'

const Home = () => {
  return (
    <div id='container'>
         <header>
          <h1>Residencia los Robles</h1>
         </header>

         {/* SIDE BAR EMPIEZA */}
         <Barra/>
         {/* SIDE BAR TERMINA */}

         {/* BODY HOME EMPIEZA */}
         <Body/>
         {/* BODY HOME TERMINA */}

      </div>
  )
}

export default Home