import { renderAboutUs } from './aboutUs.js';
export function renderHeader(){
    const headerTemplate = `
    <header>
    <div class="left-div">
        <h1>Travel Agency</h1>
    </div>
    <div class="center-div">
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Tours</a></li>           
            <li><a href="#destination-title">Destination</a></li>
            <li><a href="">Blogs</a></li>        
            <li><a href="">Shop</a></li>        
            <li><a href="">Pages</a></li>                    
            <li id="about-us-link">About Us</li>            
        </ul>    
    </div>
    <div class="right-div">
        <span><i class="fa-duotone fa-solid fa-globe"></i></span>
        <span>English</span>
        <span>USD</span>
        <span><i class="fa-duotone fa-solid fa-cart-shopping"></i></span>
        <button>Sign In</button>
    </div>

    </header>    
    `
    document.getElementById('header-div').innerHTML += headerTemplate 
      // Add event listener to about us
      document.getElementById('about-us-link').addEventListener('click', function() {
        renderAboutUs();
        document.getElementById('activities').remove()
    });
} 

