import React from 'react'
import s from './navbar.module.css'

import burger from './burger.svg'
import logo from './logo.png'

export default function Navbar() {
  return (


    
    <nav>
      <img className={s.logo} src={logo} alt="" />
      <ul>
        <li>we can</li>
        <li>we do</li>
        <li>we write</li>
        <li>we exist</li>
      </ul>
      <img className={s.burger} src={burger} alt="" />
    </nav>

     
      


  )
}
