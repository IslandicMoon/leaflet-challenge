const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Create a legend
const legend = L.control({ position: 'bottomright' });

legend.onAdd = function (map) {
    // Your legend creation logic here
    // You might want to dynamically generate legend based on your data
    return /* Your legend HTML */;
};

legend.addTo(map);

// Add markers to the map
earthquakeData.forEach((quake) => {
    const marker = L.circleMarker([quake.lat, quake.lon], {
        radius: quake.magnitude * 2, // Adjust the factor for better visualization
        color: 'black',
        fillColor: getColor(quake.depth),
        fillOpacity: 0.8,
    }).addTo(map);

    marker.bindPopup(`<b>Earthquake</b><br>Magnitude: ${quake.magnitude}<br>Depth: ${quake.depth}`);
});

