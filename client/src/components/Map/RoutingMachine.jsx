import { MapLayer } from 'react-leaflet';
import L from 'leaflet';
import { withLeaflet } from 'react-leaflet';
import 'leaflet-routing-machine/src';
//import '../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.css';
import '../../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.css';

class RoutingMachine extends MapLayer {
  createLeafletElement() {
    const { color, map } = this.props;

    const road = [
      L.latLng(57.74, 11.94),
      L.latLng(57.6792, 11.949)
    ]

    let leafletElement = L.Routing.control({
      waypoints: this.props.wayPoints,
      lineOptions: {
        styles: [{ 
          color, 
          opacity: .8,
          weight: 6 
        }]
      },
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: false,
      showAlternatives: false,
      altLineOptions: { styles: [{opacity: 0}] },
      createMarker: () => { return null; },
      
    })
    .addTo(map.current.leafletElement);

    leafletElement.hide(); // hide road describtion

    return leafletElement.getPlan();
  }
}

export default withLeaflet(RoutingMachine);