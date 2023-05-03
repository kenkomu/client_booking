import { CustomMarker } from 'react-google-maps';
import { MarkerCluster } from 'react-google-maps';
import MarkerList from './MarkerList';
function Marker({ marker }) {
  return (
    <CustomMarker
      options={{ position: { lat: marker.lat, lng: marker.lng }, anchorPoint: 'CENTER' }}
    >
      <img src="../images/location-outline.svg" width="50" height="50" alt="marker" />
    </CustomMarker>
  );
}

export default Marker;


function MapComponent({ center, locations }) {
  return (
    <MarkerCluster options={{ position: center }}>
      {locations.map((marker) => (
        <div key={marker.id}>
          <MarkerList marker={marker} />
        </div>
      ))}
    </MarkerCluster>
  );
}