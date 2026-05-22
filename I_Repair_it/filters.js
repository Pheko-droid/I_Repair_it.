// Logic for filter.js
/** Filters my repair services based on what the user types
 * @param {Array} services - The repair services array from data.js
 * @param {string} searchTerm - The search term entered by the user
 * @returns {Array} - The filtered array of repair services
 */
export const filterServices= (services, searchTerm) => {
  const cleanTerm = searchTerm.toLowerCase().trim();
return services.filter(service => {
  return artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) 
  ||
  service.title.toLowerCase().includes(cleanTerm) ||
  service.description.toLowerCase()
});
};         