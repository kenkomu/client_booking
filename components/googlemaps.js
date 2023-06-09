import { useState } from 'react';
import { GoogleMap, MarkerCluster } from 'vue3-google-map';
const locations = {
    FCB: {
      id: 'FCB',
      headline: 'FC Bayern München',
      text: 'Bayern München is the most successful soccer club in Germany. In the german Bundesliga their current rank is #1. Add some more text for this item to make it look bigger',
      lat: 48.21888549557031,
      lng: 11.625109549171704,
    },
    SCF: {
      id: 'SCF',
      headline: 'SC Freiburg',
      text: 'SC Freiburg is also a german soccer club from the 1. Bundesliga in Germany. In the german Bundesliga their current rank is #2. Add some more text for this item to make it look bigger',
      lat: 48.021196964093434,
      lng: 7.82996300258625,
    },
    RBL: {
      id: 'RBL',
      headline: 'Red Bull Leipzig',
      text: 'Red Bull Leipzig is a very good soccer club as well. They are sponsered by Red Bull I guess. In the german Bundesliga their current rank is #3. Add some more text for this item to make it look bigger',
      lat: 51.34762220651972,
      lng: 12.35519705573161,
    },
    FCUB: {
      id: 'FCUB',
      headline: 'Union Berlin',
      text: 'This is a soccer club from Berlin. I dont know anything about soccer but here is more text. In the german Bundesliga their current rank is #5. Add some more text for this item to make it look bigger',
      lat: 52.45755304910101,
      lng: 13.568600380052235,
    },
    BVB: {
      id: 'BVB',
      headline: 'BVB Borussia Dortmund',
      text: 'BVB is also pretty good soccer club right? They are colored in yellow and black and I thats all I know. In the german Bundesliga their current rank is #6. Add some more text for this item to make it look bigger',
      lat: 51.492787217050754,
      lng: 7.452501674962833,
    },
  };
  
  function Map() {
    const [zoom, setZoom] = useState(6);
    const [center, setCenter] = useState({ lat: 51.075857938487424, lng: 10.313596029890055 });
  
    function handleZoomEvent(item) {
      setCenter({ lat: item.lat, lng: item.lng });
      setZoom(15);
    }
  
    return (
      <div>
        <h2 className="text-4xl text-center container mx-auto p-10"> Nuxt 3 - Google Map</h2>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          <GoogleMap apiKey="YOUR API KEY HERE" className="map" center={center} zoom={zoom}>
            <MarkerCluster options={{ position: center }}>
              {Object.values(locations).map((marker) => (
                <MarkerList key={marker.id} marker={marker} />
              ))}
            </MarkerCluster>
          </GoogleMap>
        <div/>
        <div/>
          )
}
