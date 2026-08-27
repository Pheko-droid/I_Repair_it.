// filter.js -Filters services based on search
function filterServices(services, searchTerm) {
  if (!searchTerm || searchTerm.trim() === '') {
    return services; // Return all services if search term is empty
  }

  const term = searchTerm.toLowerCase().trim();
  return services.filter(service =>
    service.title.toLowerCase().includes(term) ||
    service.description.toLowerCase().includes(term) ||
    service.category.toLowerCase().includes(term)
  );
}

// Search handler (to be connected to a search input in HTML)
function setupSearch(){
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', function() {
    const filter = filterServices(repairServices, this.value);
    renderServices(filtered);
  });
}
 // Category filter handler
 function filterByCategory(category) {
   if (category === 'all') {
    renderServices(repairServices);
   } else {
    const filtered = repairServices.filter(service => service.category === category);
    renderServices(filtered);
   }
  }