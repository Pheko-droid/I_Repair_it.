// Logic for filter.js
export const filterArtisans= (artisans, searchTerm) => {
return artisans.filter(artisan => {
  return artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) 
  ||
  artisan.location.toLowerCase().includes(searchTerm.toLowerCase());
});
};