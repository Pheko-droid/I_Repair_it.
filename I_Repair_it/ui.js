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