export function renderLandingPage(){
    const landingPageTemplate = `
    <div class="container">
       <div class="overlay">
            <div class="overlay-text">
                <h1>Millions of Experiences.</h1>
                <h1>One Simple Search</h1>
                <p>find what make you happy anytime, anywhere</p>
                <h1>"Discover the world one adventure at a time. Your journey begins here."</h1>
                <input type="search" placeholder="Search a place or activity" id="searchInput">
            </div>
       </div>
    </div> 
    `
    document.getElementById('app').innerHTML += landingPageTemplate  
}

