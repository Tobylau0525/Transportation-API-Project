$(function(){
    
map.data.loadGeoJson('../nyc-subway-station-locator/data/subway-lines');

func subwayLinesHandler(w http.ResponseWriter, r *http.Request) {
  w.Header().Set("Content-type", "application/json")
  w.Write(GeoJSON["subway-lines.geojson"])
}


    
});