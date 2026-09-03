<<<<<<< HEAD
// Initialise on page load
document.addEventListener('DOMContentLoaded', function() {
  // Render services
  if (typeof repairServices !== 'undefined') {
    renderServices(repairServices);
  }

  // Setup search
  setupSearch();

  // Hide loading screen
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    loadingScreen.style.display = 'none';
  }

  // Set active filter button
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });
});




//ui.js - Renders service cards dynamically
const servicesGrid = document.getElementById('servicesGrid');

function renderServices(services) {
  if (!servicesGrid) {
    console.error('servicesGrid element not found');
    return;
  }

  if (!services || services.length === 0) {
    servicesGrid.innerHTML = '<p>No services available at the moment.</p>';
    return;
  }

  servicesGrid.innerHTML = services.map(service => `
    <div class="service-card" data-id="${service.id}">
    <div class="service-icon">${service.icon}</div>
    <h3>${service.title}</h3>
    <p>${service.description}</p>
    </div>
  `).join('');

  //Add event listeners to all "Request Service" buttons
  document.querySelectorAll('.book-btn').forEach(button => {
    button.addEventListener('click', function() {
      const serviceName = this.getAttribute('data-service');
      handleBooking(serviceName);
    });
  });
}

//Booking handler whatsapp integrated
function handleBooking(serviceName) {
  const phone = "27602499397";
  const message = `Hello, I need ${serviceName} service. Please connect me with a verified artisan.`;
  // Open WhatsApp chat with prefilled message
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}
=======
// A single, robust render function keeps logic perfectly organized and maintainable. It handles all dynamic content updates based on the current page state.
const renderServices = (servicesToDisplay) => {
  const iconColorMap = {
    1: 'icon-electrical',
    2: 'icon-plumbing',
    3: 'icon-general',
    4: 'icon-automotive',
    5: 'icon-painting',
    6: 'icon-carpentry',
    7: 'icon-construction',
  };

  const servicesGrid = document.getElementById('services-grid');
  if (!servicesGrid) return;

  if (servicesToDisplay.length === 0) {
    servicesGrid.innerHTML = '<p class="no-results">No services found matching your search. Try another search term.</p>';
    return;
  }

  // Function to clear away the screen overlay safely
  function removeLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.style.opacity = '0';
      loadingScreen.style.visibility = 'hidden';
      setTimeout(() => {
        loadingScreen.remove();
      }, 500);
    }
  }

  servicesGrid.innerHTML = servicesToDisplay.map((service) => `
    <div class="service-card">
      <div class="service-icon ${iconColorMap[service.id] || 'icon-default'}">
        ${service.icon || ''}
      </div>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
      <div class="gallery-grid">
        ${service.images ? service.images.map((img) => `<img src="${img}" alt="${service.title}">`).join('') : ''}
      </div>
      <button class="book-btn">Request Service</button>
    </div>
  `).join('');

  removeLoadingScreen();
};
document.addEventListener('DOMContentLoaded', () => {
  if (typeof repairServices !== 'undefined') {
    renderServices(repairServices);
  }
});
>>>>>>> 5cdedbcc02c857128516960c0b009399ee7f431a
