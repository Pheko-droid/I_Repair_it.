// A single, robust render function keeps logic perfectly organized and maintainable. It handles all dynamic content updates based on the current page state.
    const renderServices = (servicesToDisplay) => {
      const iconColorMap = {
        1: 'icon-electrical',
        2: 'icon-plumbing',
        3: 'icon-general',
        4: 'icon-automotive',
        5: 'icon-painting',
        6: 'icon-carpentry',
        7: 'icon-connstruction',
      };
      if (servicesToDisplay.length === 0) {
        servicesGrid.innerHTML = '<p class="no-results">No services found matching your search. Try another search term.</p>';
          return;
      }
      servicesGrid.innerHTML = servicesToDisplay.map(service => `
        <div classs="service-card">
          <div class="service-icon ${iconColorMap[service.id] || ''}">
             ${service.icon}
             </div>
             <h3>${service.title}</h3>
             <p>${service.description}</p>
             <button class="book-btn">Request Service</button>
             </div>
      `).join('');
      };