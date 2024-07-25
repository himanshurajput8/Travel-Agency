import { renderLandingPage } from "./landingPage.js";
import { renderData, allDestinationData } from './destination.js';

export function renderAboutUs(){
    const aboutUsTemplate = `
    <div  class="aboutUs-container">       
        <div class="about-us-content" id="aboutUs-container">
           <div class="item1"></div>
           <div class="item2"></div>
           <div class="item3"></div>
           <div class="item4"></div>
           <div class="item5">
                <h1>About Us</h1>
                <button id="delete-aboutUs-btn">X</button>
                <p>
                    Welcome to <strong>Travel Agency</strong>, your go-to destination for unforgettable travel experiences. 
                    Founded in 2023, we are passionate about bringing the world closer to you, one trip at a time. Our mission is to provide exceptional travel services that cater to the unique needs and desires of each of our clients.
                </p> 
                <h2>
                    Why choose <strong>Travel Agency</strong>?
                </h2>  
                    <ul>
                        <li>Personalized Travel Planning: Tailored itineraries to match your interests and budget.</li>
                        <li>Expert Guidance: Professional advice and support from our knowledgeable travel consultants.</li>
                        <li>Exclusive Deals: Access to special offers and discounts that you won't find anywhere else.</li>
                        <li>24/7 Support: We're here to assist you at every step of your journey, day or night.</li>
                        <li>Sustainable Travel: Committed to promoting eco-friendly and responsible tourism.</li>
                    </ul>  
                    <p>
                         Join us on a journey to explore the wonders of the world. Let <strong>Travel Agency</strong> be your trusted travel partner, and together we'll make your travel dreams a reality.
                    </p>
                    <p>
                        Contact us today to start planning your next adventure!
                    </p>                  
            </div>                   
        </div>        
    </div>`
    document.getElementById('app').innerHTML = aboutUsTemplate 
    document.getElementById('delete-aboutUs-btn').addEventListener('click', function(){
        document.getElementById('aboutUs-container').remove(); 
        renderLandingPage();
        renderData(allDestinationData)               
    })
} 