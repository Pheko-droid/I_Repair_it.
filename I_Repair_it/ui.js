//ui.js writing function to display the repair services on the webpage
import { repairServices } from './data.js';
import {filterServices} from './filters.js';
//Elements from HTML
const searchInput = document.querySelector('#search-input');
const sevicesGrid = document.querySelector('#services-grid');

//Function to draw the services cards onto the webpage
const renderServices = (servicesToDisplay) => {
  if (servicesToDisplay.Length === 0) {
    servicesGrid.innerHTML = '<p>No services found. Please try a different search term.</p>';
    return;
  }
  serivcesGrid.innerHTML = servicesToDisplay.map(service => `
    <div class="service-card">
      <div class="service-icon">${service.icon}</div>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
      <button  class="book-btn">Request Service</button>
      </div>
      `).join('');
    };
  //Listen for typing events in the search bar
  searchInput.addEventListener('input', (event) => {
    const matchingServices = filterServices(repairServices, userTyped);
    //Re-render the screen with only the matches renderServices(matchingServices);
  });
  // Run this immediately so all 5 services show up when the page first loads
  renderServices(repairServices);
