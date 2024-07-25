import { renderAboutUs } from './aboutUs.js';
import { popularActivitiesData } from './destination.js'
// import { navigate } from './router.js';



export function renderHeader(){
    const headerTemplate = `
    <header>
        <div class="left-div">
            <h1>Travel Agency</h1>
        </div>
        <div class="center-div">
            <ul>
              <li><a href="">Home</a><i class="fa-sharp fa-solid fa-angle-down"></i></li>                            
              <li><a href="">Tours</a><i class="fa-sharp fa-solid fa-angle-down"></i></li>           
              <li><a href="#destination-title">Destination</a><i class="fa-sharp fa-solid fa-angle-down"></i></li>
              <li><a href="">Blogs</a><i class="fa-sharp fa-solid fa-angle-down"></i></li>        
              <li><a href="">Shop</a><i class="fa-sharp fa-solid fa-angle-down"></i></li>        
              <li><a href="">Pages</a><i class="fa-sharp fa-solid fa-angle-down"></i></li>                    
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
        // navigate('/aboutus') 
        renderAboutUs();                                 
        document.getElementById('activities').remove()
       
    });

    //add event listener to menu bar icon
    document.querySelector('.menu-bar-icon').addEventListener('click', function(){      
        renderMenubar()                
    })   
    //add event listener to add to cart icon
    document.getElementById('add-to-cart').addEventListener('click',function(){
        renderAddToCart()      
    })
   
    
} 

// function of hamburger menubar
export function renderMenubar(){
    const menubarTemplate = `<div class= "menu-bar" >
        <button id="menu-btn">X</button>
        <ul>
            
            <li><a href="">Home</a></li>
            <li><a href="">Tours</a></li>           
            <li><a href="#destination-title">Destination</a></li>
            <li><a href="">Blogs</a></li>        
            <li><a href="">Shop</a></li>        
            <li><a href="">Pages</a></li>                    
            <li >About Us</li>            
        </ul> 
    </div>`
    document.body.innerHTML += menubarTemplate

    // Add event listener for the menu button inside the rendered menu bar
    document.getElementById('menu-btn').addEventListener('click', function() {
        const menubar = document.querySelector('.menu-bar');
        menubar.remove()
    });
    // Add event listeners to li 
    var menuItems = document.querySelectorAll('.menu-bar li, .menu-bar li a');
    menuItems.forEach(function(item) {
        item.addEventListener('click', function () {
            var menubar = document.querySelector('.menu-bar');
            menubar.remove();
        });
    });    
}


//function of add to Cart
export function renderAddToCart(){
    const addToCartTemplate =`
    <div id="cart-container"> 
        <h2>Cart</h2>
    </div>`
    document.body.innerHTML += addToCartTemplate
}



