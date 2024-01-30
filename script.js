var map = L.map('map').setView([20.5937, 78.9629], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);
var map = L.map('map').setView([20.5937, 78.9629], 10);



// Log to console for debugging
console.log("Map and tile layer added successfully");
