import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import {useGlobalContext } from './context'

const clicker = document.querySelector(".modal-overlay")
console.log(clicker)
const Home = () => {
const {openSidebar,openModal} = useGlobalContext()

return <main>
    <button className='sidebar-toggle' onClick={openSidebar}>
    <FaBars/>
    </button>
    <button className='btn' onClick={openModal}>
      show Modal
    </button>
  </main>
}

export default Home
