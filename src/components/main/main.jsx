import React from 'react';
import '../main/main.css'
import AboutImg1 from '../img/photo-1513104890138-7c749659a591.jpg'
import AboutImg2 from '../img/eating-pizza.png'
import AboutImg3 from '../img/Pizza_(1).jpg'

export default function Main() {
  return (
    <>
        <main>
            <div className='mainDiv'>
                <h2>Taste the perfect pizza</h2>
                <button type='button'>Order Now</button>
            </div>

            <div className="aboutUs" id='about'>
                <h2>About Us</h2>
                    <p>All the way back in the early 70’s, Sal was tossing pizza dough and making delicious New York style pizza.</p>
                    <p>Sal opened his first restaurant in NYC in 75, the rest as they say, was history…</p>
                    <p>Later, in 1982 after relocating to Dallas, he opened the downtown location on Wycliff and the Tollway. 
                        Ever since then Sals Pizza has been the place for any New York syte pizza connoisseur.</p>
                    <p>Even if you have never been to New York city, on your first visit you will realize why Sal wins award after award for his pizza. 
                        On the menu is a varied selection of fine italian dishes that are sure to appease even the most demanding of appetites.</p>
                    <p>The atmosphere can’t be beat… 
                        New Yorkers feel right at home here, in our very own New York style restaurant smack dab in the middle of Dallas, Texas!.</p>
                <div className='aboutImg'>
                    <img src={AboutImg1} alt="1" />
                    <img src={AboutImg2} alt="2" />
                    <img src={AboutImg3} alt="3" />
                </div>
              
            </div>
        </main>
    </>
  )
}
