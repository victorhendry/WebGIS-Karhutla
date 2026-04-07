var map = L.map('map').setView([-0.5, 117.1], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Basemap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'OpenStreetMap'
}).addTo(map);

//API
fetch('API_URL')
    .then(response => response.json())
    .then(data => {
        data.forEach(point => {
            L.circleMarker([point.latitude, point.longitude], {
                radius: 5
            }).addTo(map);
        });
    });
// Load GeoJSON + popup attribute
fetch('data/mahakamkayan.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            style: {
                color: 'green',
                weight: 2
            },
            onEachFeature: function(feature, layer) {
                layer.bindPopup(
                    "<b>Kabupaten:</b> " + feature.properties.nama
                );
            }
        }).addTo(map);
    });

fetch('https://firms.modaps.eosdis.nasa.gov/api/...')
    L.circleMarker([lat, lon], {
    radius: 5
        }).addTo(map);
var legend = L.control({position: 'bottomright'});

legend.onAdd = function() {
    var div = L.DomUtil.create('div', 'info legend');
    div.innerHTML = '<b>Legenda</b><br>Merah = Hotspot';
    return div;
};

legend.addTo(map);
