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
    const toursTemplate = `
    <div id="container">
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
        </div>
    <div>`
    
    document.getElementById('app').innerHTML = toursTemplate 
     //add event listener to delete tour
     document.getElementById('delete-tour-btn').addEventListener('click',function(){
        document.getElementById('container').remove(); 
        renderLandingPage();
        renderData(allDestinationData)   
     }) 
} 


export function renderBlog(){
    const BlogTemplate = `
    <div class="blog-full-container">
        <div class="blog-container">
            <button class="close-blog-btn">X</button>
            <img src="https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
            <img src="https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
            <img src="https://images.pexels.com/photos/1796736/pexels-photo-1796736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
            <img src="https://images.pexels.com/photos/1059078/pexels-photo-1059078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
            <img src="https://images.pexels.com/photos/261204/pexels-photo-261204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
            <img src="https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
            
        </div>
        <div class="blog-text">
            <h2>Welcome to Our Travel Agency Blog!</h2>
            <h4>Embark on Adventures with Us</h4>
            <p>Welcome to the official blog of [Your Travel Agency Name]! Here, we share our passion for exploration, adventure, and creating   unforgettable travel experiences. Whether you're a seasoned traveler or planning your first big trip, our blog is your go-to resource for travel inspiration, tips, and updates on the latest happenings in the world of travel.</p>
            <h4>Discover New Destinations</h4>
            <p>At [Your Travel Agency Name], we believe that every destination has a story to tell. Our blog features in-depth guides on some of the most breathtaking places around the globe. From the pristine beaches of Bali to the bustling streets of Tokyo, our travel experts bring you firsthand accounts and insider tips to help you make the most of your journey.</p>
            <h4>Travel Tips and Hacks</h4>
            <p>Traveling can be both exciting and daunting, especially when navigating new cultures and environments. Our blog provides valuable tips and hacks to make your travels smoother and more enjoyable. Learn how to pack efficiently, navigate airport security like a pro, and find the best local eats no matter where you are.</p>
        </div>
    </div>
    `
    document.getElementById('app').innerHTML = BlogTemplate 
    document.querySelector('.close-blog-btn').addEventListener('click', function(){
        document.querySelector('.blog-full-container').remove()
        renderLandingPage();
        renderData(allDestinationData) 
    })

}