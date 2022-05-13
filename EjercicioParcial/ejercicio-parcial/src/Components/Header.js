import React from 'react'
import logo from '../img/aribnb-logo.png'
import world from '../img/world.svg'
import menu from '../img/menu.svg'

const Header = () => {
  return (
    <header>
      <a href="#."><img src={logo} class='airbnb-logo' alt="logo-img"/></a>
      <nav>
        <h1>Become a Host</h1>
        <img src={world} alt="world-img"/>
        <div class="user">
          <img src={menu} class="menu" alt="menu-img"/>
          <img src="https://picsum.photos/200" class="user-pic" alt="user-img"/>
        </div>
      </nav>
    </header>
  )
}

export default Header