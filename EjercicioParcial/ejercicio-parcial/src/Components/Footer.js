import React from 'react'
import world from '../img/world.svg'

const Footer = () => {
  return (
    <footer>
      <div class="footer-menu">
        <ul>
          <li>Support</li>
          <li>Help Center</li>
          <li>AirCover</li>
          <li>Safety information</li>
          <li>Supporting people with disabilities</li>
          <li>Cancellation options</li>
          <li>Our COVID-19 Response</li>
          <li>Report a neighborhood concern</li>
        </ul>
        <ul>
          <li>Community</li>
          <li>Airbnb.org: disaster relief housing</li>
          <li>Support Afghan refugees</li>
          <li>Combating discrimination</li>
        </ul>
        <ul>
          <li>Hosting</li>
          <li>Try hosting</li>
          <li>AirCover for Hosts</li>
          <li>Explore hosting resources</li>
          <li>Visit our community forum</li>
          <li>How to host responsibly</li>
        </ul>
        <ul>
          <li>About</li>
          <li>Newsroom</li>
          <li>Learn about new features</li>
          <li>Letter from our founders</li>
          <li>Careers</li>
          <li>Investors</li>
        </ul>
      </div>
      <div class="footer-bottom">
        <p>© 2022 Airbnb, Inc. · Privacy · Terms · Sitemap</p>
        <p><img src={world} class='world' alt="world-img"/>English (US) Choose a currency $MXN </p>
      </div>
    </footer>
  )
}

export default Footer