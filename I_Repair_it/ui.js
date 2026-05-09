//ui.js writing function to display the repair services on the webpage
import { repairServices } from './data.js';

const sevicesContainer =
 document.querySelector('#services-grid');

 export const displayServices = () => {
  const servicesHtml = repairServices.map(service => `
    <div class="service-card">
    <h3>${service.icon} ${service.title}</h3>
    <p>${service.description}</p>
    <button class="cta-buton">Book Now</button>
    </div>
  `).join('');
    
    servicesContainer.innerHTML = servicesHtml;
 };