function revGeoLookup(e) {
  geocoder
    .reverse()
    .latlng(e.latlng)
    .run(function (error, result) {
      if (error) {
        return;
      }

      const lngLatString = `${Math.round(result.latlng.lng * 100000) / 100000}, ${Math.round(result.latlng.lat * 100000) / 100000}`;

      layerGroup.clearLayers();
      marker = L.marker(result.latlng)
        .addTo(layerGroup)
        .bindPopup(`<b>${lngLatString}</b><p>${result.address.Match_addr}</p>`)
        .openPopup();
    });
};

function markerAt(e) {
  lat = e.latlng.lat.toFixed(3);
  lng = e.latlng.lng.toFixed(3);
  marker.setLatLng(e.latlng)
  .bindPopup("[" + lat + ", " + lng + "]")
  .openPopup();
}