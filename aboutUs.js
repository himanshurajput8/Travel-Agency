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

//function tours 
export function renderTours(){
    const toursTemplate = `<div id="container">
    <div class="tours-container">
        
        <div><img src="https://images.unsplash.com/photo-1648030258221-53428147b4ff?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div>
        <div><img src="https://images.unsplash.com/photo-1534238151781-c62af32c97a0?q=80&w=1906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div>
        <div><img src="https://plus.unsplash.com/premium_photo-1683126899216-9572ecfd06a7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div>
        <div><img src="https://plus.unsplash.com/premium_photo-1683800241997-a387bacbf06b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div>   
        <button id="delete-tour-btn">X</button>    
    </div>
    <div class="tour-text">
        <div class="tour-inner-div">
            <p>Our tours are meticulously planned by travel experts to ensure you get most out of every destination.
            Local Guides: Experience true essence of each location with our knowledgeable local guides who provide insider insights and tips.
            Comfort and Convenience: Enjoy seamless travel with our premium services, including comfortable  private transfers,and 24/7 support.
            Join us on an unforgettable journey to [Destination], a place where breathtaking landscapes, vibrant culture, and rich history come together to create an extraordinary experience. Whether you’re seeking adventure, relaxation, or a bit of both, our [Duration] tour has something for everyone.</p>       
        </div>
        
    </div><div>`
    
    document.getElementById('app').innerHTML = toursTemplate 
     //add event listener to delete tour
     document.getElementById('delete-tour-btn').addEventListener('click',function(){
        document.getElementById('container').remove(); 
        renderLandingPage();
        renderData(allDestinationData)   
     }) 
} 


export function renderShop(){
    const shopTemplate = `
    `
    document.getElementById('app').innerHTML = shopTemplate 
}