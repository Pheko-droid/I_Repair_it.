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