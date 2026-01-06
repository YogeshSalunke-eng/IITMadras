import React from 'react'
import './Footer.css'
import logo from '../../assets/iitm_logo.png'


const Footer = () => {
  return  (
    <div className='footers'>
      
      <div className="footer-ul"><hr />
        <ul>
          <li>Annual Reports</li>
          <li>Annual Accounts</li>
          <li>Annual Budget</li>
          <li>Act and Statuses</li>
          <li>Quality Policy</li>
          <li>ISO 9001:2015</li>


          </ul>
      </div>
      <hr />
<div className="footer-logo">
      <img src={logo} alt="logo" className='logo' />
</div>
<hr />
      <div className="footer">
      <p>Accessibility | Privacy policy | Term of Use | Sitemap
<br />@ 2020 IIT Madras - All Rights Reserved.</p>
        <ul>
            <li>Powered by

Rage Communications
</li>
<br />
<li>Website last updated on: 2025-12-22 20:00:01 PM</li>
        
        </ul>
        </div>
    </div>
  )
}

export default Footer