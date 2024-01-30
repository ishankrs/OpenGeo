var map = L.map('map').setView([20.5937, 78.9629], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker for testing
L.marker([20.5937, 78.9629]).addTo(map);

// Log to console for debugging
console.log("Map and tile layer added successfully");
