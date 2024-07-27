import { renderAboutUs } from './aboutUs.js';
import { renderTours } from './aboutUs.js';
// import { navigate } from './router.js';
import { renderLandingPage } from "./landingPage.js";
import { renderData, allDestinationData } from './destination.js';



export function renderHeader(){
    const headerTemplate = `
    <header>
        <div class="left-div">
            <h1>Travel Agency</h1>
        </div>
        <div class="center-div">
        <button id="hide-menubar-btn">X</button>
            <ul>
              <li><a href="">Home</a></li>                            
              <li id="tours-link">Tours</li>           
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
            <span id="add-to-cart"><i class="fa-duotone fa-solid fa-cart-shopping"></i></span> 
            <button>Sign In</button>
        </div>
        <span class="menu-bar-icon"> <i class="fa-solid fa-bars"></i></span> 
    </header>   
        
    `
    document.getElementById('header-div').innerHTML += headerTemplate 
      // Add event listener to about us
      document.getElementById('about-us-link').addEventListener('click', function() {          
        renderAboutUs();                                 
        document.getElementById('activities').remove()      
    });
    // add event listener to Tours
    document.getElementById('tours-link').addEventListener('click',function(){        
        renderTours()
        document.getElementById('activities').remove()   
    })
    //add event listener to menubar icon when i click this then menubar will be open 
    document.querySelector('.menu-bar-icon').addEventListener('click', function(){
      var menubarr = document.querySelector('.center-div')
      menubarr.style.display = "block"
    })
    //add event listener to close menu bar 
    document.getElementById('hide-menubar-btn').addEventListener('click', function(){      
        var menubarContainer = document.querySelector('.center-div')
        menubarContainer.remove()            
                 
    })
    var menuItems = document.querySelectorAll('.center-div li');
        menuItems.forEach(function(item) {
            item.addEventListener('click', function () {
                var menubar = document.querySelector('.center-div');
                menubar.remove()
            });  
        });       
    
} 






