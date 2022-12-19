import React from 'react'
import logo from '../img/pizza-logo-design_9845-319-removebg-preview.png'
import appStore from '../img/download-on-the-app-store-apple-logo-svgrepo-com.svg'
import playStore from '../img/google-play-badge-logo-svgrepo-com.svg'
import visa from '../img/visa.svg'
import mastercard from '../img/mastercard-2.svg'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import './footer.css'


export default function Footer() {
  return (
    <div id='footer'>
        <div className="wrapper">
            <div className='firstFloor'>
                <div className='firstCol'>
                  <span>NY Pizza</span>
                  <a href="#menu">Menu</a>
                  <a href="#">Pizzerias</a>
                  <a href="#">Franchising</a>
                  <a href="#">Information</a>
                  <a href="#">Food safety policy</a>
                </div>
                <div className='firstCol'>
                  <span>Services</span>
                  <a href="#">Pizza Tracker</a>
                </div>
                <div className='firstCol'> 
                  <span>Contacts</span>
                  <a href="mailto:hnativ.dev@gmail.com">hnativ.dev@gmail.com</a>
                  <a href="#">Send complaint</a>
                  <a href="tel:0967149450">+380967149450</a>
                </div>
                <div className='firstCol'>
                  <a href="#"><img src={logo} alt="" /></a>
                  <p>© 2022 NY Pizza</p>
                </div>
            </div>
            <div className='secondFloor'>
                <div className='secondCol'><a href="https://www.linkedin.com/in/roman-hnativ-824768210/" target="_blank">SITE DEVELOPED BY Roman Hnativ</a></div>
                <div className='secondCol applications'>
                  <span>Download Application</span>
                  <div>
                    <a href="#"><img src={appStore} alt="" /></a>
                    <a href="#"><img src={playStore} alt="" /></a>
                  </div>
                </div>
                <div className='secondCol payments'>
                  <span>Supported Payments</span>
                  <div>
                    <img className='paymentsImg' src={visa} alt="" />
                    <img className='paymentsImg' src={mastercard} alt="" />
                  </div>
                </div>
                <div className='secondCol social'>
                  <span>Follow</span>
                  <div>
                    <a href="https://github.com/hromok" target="_blank"><GitHubIcon /></a>
                    <a href="https://www.linkedin.com/in/roman-hnativ-824768210/" target="_blank"><LinkedInIcon /></a>
                    <a href="https://instagram.com/hnativ_roma?igshid=YTY2NzY3YTc=" target="_blank"><InstagramIcon /></a>
                    <a href="https://t.me/hromok" target="_blank"><TelegramIcon /></a>
                  </div>
                </div>
            </div>
        </div>
    </div>  
  )
}
