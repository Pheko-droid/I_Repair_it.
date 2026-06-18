// Logic for filter.js
 const filterServices = (services, searchTerm) => {
  const cleanTerm = searchTerm.toLowerCase().trim();
if (!cleanTerm) {
  return services;
}
return services.filter(service => {
  return service.title.toLowerCase().includes(cleanTerm) ||
  service.description.toLowerCase().includes(cleanTerm);
});
};