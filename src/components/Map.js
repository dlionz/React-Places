import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const Map = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyB38Sc5wTfmc0lN46922-amLYcBzoLf7cU&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%`, width: `100%` }} />,
    containerElement: <div style={{ width: `100%` }} />,
    mapElement: <div style={{ height: `100%`, width: `100%` }} />,


  }),
  withScriptjs,
  withGoogleMap

)(props => (
  <GoogleMap
    bootstrapURLKeys={{ key: "AIzaSyB38Sc5wTfmc0lN46922" }}
    defaultZoom={10}
    defaultCenter={{ lat: 29.7604, lng: -95.3698 }}
    location={props.cords}

  >
     <Marker position={{ lat:
        (props.cords.eat.isActive ? props.cords.eat.lat : 0) ||
        (props.cords.study.isActive ? props.cords.study.lat: 0) ||
        (props.cords.play.isActive ? props.cords.play.lat: 0 ),
        lng:
        (props.cords.eat.isActive ? props.cords.eat.lng : 0) ||
        (props.cords.study.isActive ? props.cords.study.lng : 0) ||
        (props.cords.play.isActive ? props.cords.play.lng : 0) }}/>
  </GoogleMap>
));

<Map isMarkerShown={true} />;

export default Map;
