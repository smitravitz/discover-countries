function revGeoLookup(e) {
  geocoder
    .reverse()
    .latlng(e.latlng)
    .run(function (error, result) {
      if (error) {
        return;
      }
      const c_code = result.address.CountryCode;
      //call function to set c_code as active

      const address = result.address.Match_addr;
      const lngLatString = `${Math.round(result.latlng.lng * 100000) / 100000}, ${Math.round(result.latlng.lat * 100000) / 100000}`;

      pointerLayerGroup.clearLayers();
      marker = L.marker(result.latlng)
        .addTo(pointerLayerGroup)
        .bindPopup(`<b>${lngLatString}</b><p>${c_code}</p></b><p>${address}</p>`)
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