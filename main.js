import './style.css'
import { renderHeader } from "./header.js";
import { renderLandingPage } from "./landingPage.js";
import { renderData, allDestinationData, filterData, popularActivities, renderFooter} from './destination.js';



renderHeader()
renderLandingPage()
renderData(allDestinationData)
popularActivities() 
document.getElementById('searchInput').addEventListener('input', filterData);
renderFooter()


 
