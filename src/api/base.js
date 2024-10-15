
//常用变量
const ECHART_COLOR = ['#C1C9FF','#6677E6', '#46B3E7', '#3379D5', '#6ECDB9', '#999999', '#E5E19A', '#EEEEEE']
const MAP_CONFIG = [
  {
    featureType: "water",
    elementType: "geometry",
    stylers: {
      visibility: "on",
      color: "#ccd6d7ff",
    },
  },
  {
    featureType: "green",
    elementType: "geometry",
    stylers: {
      visibility: "on",
      color: "#dee5e5ff",
    },
  },
  {
    featureType: "building",
    elementType: "all",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "subwaystation",
    elementType: "geometry",
    stylers: {
      visibility: "off",
      color: "#888fa0ff",
    },
  },
  {
    featureType: "education",
    elementType: "geometry",
    stylers: {
      visibility: "on",
      color: "#e1e7e7ff",
    },
  },
  {
    featureType: "medical",
    elementType: "geometry",
    stylers: {
      visibility: "on",
      color: "#d1dbdbff",
    },
  },
  {
    featureType: "scenicspots",
    elementType: "geometry",
    stylers: {
      visibility: "on",
      color: "#d1dbdbff",
    },
  },
  {
    featureType: "highway",
    elementType: "geometry",
    stylers: {
      visibility: "on",
      weight: 4,
    },
  },
  {
    featureType: "highway",
    elementType: "geometry.fill",
    stylers: {
      color: "#ffffffff",
    },
  },
  {
    featureType: "highway",
    elementType: "geometry.stroke",
    stylers: {
      color: "#cacfcfff",
    },
  },
  {
    featureType: "highway",
    elementType: "labels",
    stylers: {
      visibility: "on",
    },
  },
  {
    featureType: "highway",
    elementType: "labels.text.fill",
    stylers: {
      color: "#999999ff",
    },
  },
  {
    featureType: "highway",
    elementType: "labels.text.stroke",
    stylers: {
      color: "#ffffffff",
    },
  },
  {
    featureType: "highway",
    elementType: "labels.icon",
    stylers: {
      visibility: "on",
    },
  },
  {
    featureType: "arterial",
    elementType: "geometry",
    stylers: {
      visibility: "on",
      weight: 1,
    },
  },
  {
    featureType: "arterial",
    elementType: "geometry.fill",
    stylers: {
      color: "#fbfffeff",
    },
  },
  {
    featureType: "arterial",
    elementType: "geometry.stroke",
    stylers: {
      color: "#cacfcfff",
    },
  },
  {
    featureType: "arterial",
    elementType: "labels",
    stylers: {
      visibility: "on",
    },
  },
  {
    featureType: "arterial",
    elementType: "labels.text.fill",
    stylers: {
      color: "#999999ff",
    },
  },
  {
    featureType: "arterial",
    elementType: "labels.text.stroke",
    stylers: {
      color: "#ffffffff",
    },
  },
  {
    featureType: "local",
    elementType: "geometry",
    stylers: {
      visibility: "on",
      weight: 1,
    },
  },
  {
    featureType: "local",
    elementType: "geometry.fill",
    stylers: {
      color: "#fbfffeff",
    },
  },
  {
    featureType: "local",
    elementType: "geometry.stroke",
    stylers: {
      color: "#cacfcfff",
    },
  },
  {
    featureType: "local",
    elementType: "labels",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "local",
    elementType: "labels.text.fill",
    stylers: {
      color: "#999999ff",
    },
  },
  {
    featureType: "local",
    elementType: "labels.text.stroke",
    stylers: {
      color: "#ffffffff",
    },
  },
  {
    featureType: "railway",
    elementType: "geometry",
    stylers: {
      visibility: "off",
      weight: 1,
    },
  },
  {
    featureType: "railway",
    elementType: "geometry.fill",
    stylers: {
      color: "#9494941a",
    },
  },
  {
    featureType: "railway",
    elementType: "geometry.stroke",
    stylers: {
      color: "#ffffff1a",
    },
  },
  {
    featureType: "subway",
    elementType: "geometry",
    stylers: {
      visibility: "off",
      weight: 1,
    },
  },
  {
    featureType: "subway",
    elementType: "geometry.fill",
    stylers: {
      color: "#c3bed433",
    },
  },
  {
    featureType: "subway",
    elementType: "geometry.stroke",
    stylers: {
      color: "#ffffff33",
    },
  },
  {
    featureType: "subway",
    elementType: "labels",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "subway",
    elementType: "labels.text.fill",
    stylers: {
      color: "#979c9aff",
    },
  },
  {
    featureType: "subway",
    elementType: "labels.text.stroke",
    stylers: {
      color: "#ffffffff",
    },
  },
  {
    featureType: "continent",
    elementType: "labels",
    stylers: {
      visibility: "on",
    },
  },
  {
    featureType: "continent",
    elementType: "labels.icon",
    stylers: {
      visibility: "on",
    },
  },
  {
    featureType: "continent",
    elementType: "labels.text.fill",
    stylers: {
      color: "#333333ff",
    },
  },
  {
    featureType: "continent",
    elementType: "labels.text.stroke",
    stylers: {
      color: "#ffffffff",
    },
  },
  {
    featureType: "city",
    elementType: "labels.icon",
    stylers: {
      visibility: "on",
    },
  },
  {
    featureType: "city",
    elementType: "labels",
    stylers: {
      visibility: "on",
    },
  },
  {
    featureType: "city",
    elementType: "labels.text.fill",
    stylers: {
      color: "#454d50ff",
    },
  },
  {
    featureType: "city",
    elementType: "labels.text.stroke",
    stylers: {
      color: "#ffffffff",
    },
  },
  {
    featureType: "town",
    elementType: "labels.icon",
    stylers: {
      visibility: "on",
    },
  },
  {
    featureType: "town",
    elementType: "labels",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "town",
    elementType: "labels.text.fill",
    stylers: {
      color: "#454d50ff",
    },
  },
  {
    featureType: "town",
    elementType: "labels.text.stroke",
    stylers: {
      color: "#ffffffff",
    },
  },
  {
    featureType: "road",
    elementType: "labels",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: {
      color: "#fbfffeff",
    },
  },
  {
    featureType: "poilabel",
    elementType: "labels.icon",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "districtlabel",
    elementType: "labels.icon",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "poilabel",
    elementType: "labels.text.fill",
    stylers: {
      color: "#999999ff",
    },
  },
  {
    featureType: "districtlabel",
    elementType: "labels.text.fill",
    stylers: {
      color: "#888fa0ff",
    },
  },
  {
    featureType: "transportation",
    elementType: "geometry",
    stylers: {
      color: "#d1dbdbff",
    },
  },
  {
    featureType: "companylabel",
    elementType: "labels",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "restaurantlabel",
    elementType: "labels",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "lifeservicelabel",
    elementType: "labels",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "carservicelabel",
    elementType: "labels",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "financelabel",
    elementType: "labels",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "otherlabel",
    elementType: "labels",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "village",
    elementType: "labels",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "district",
    elementType: "labels",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "land",
    elementType: "geometry",
    stylers: {
      color: "#edf3f3ff",
    },
  },
  {
    featureType: "nationalway",
    elementType: "geometry.stroke",
    stylers: {
      color: "#cacfcfff",
    },
  },
  {
    featureType: "provincialway",
    elementType: "geometry.stroke",
    stylers: {
      color: "#cacfcfff",
    },
  },
  {
    featureType: "cityhighway",
    elementType: "geometry.stroke",
    stylers: {
      color: "#cacfcfff",
    },
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: {
      color: "#cacfcfff",
    },
  },
  {
    featureType: "subwaylabel",
    elementType: "labels.icon",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "subwaylabel",
    elementType: "labels",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "tertiarywaysign",
    elementType: "labels.icon",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "tertiarywaysign",
    elementType: "labels",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "provincialwaysign",
    elementType: "labels.icon",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "provincialwaysign",
    elementType: "labels",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "nationalwaysign",
    elementType: "labels.icon",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "nationalwaysign",
    elementType: "labels",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "highwaysign",
    elementType: "labels.icon",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "highwaysign",
    elementType: "labels",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "nationalway",
    elementType: "geometry.fill",
    stylers: {
      color: "#fbfffeff",
    },
  },
  {
    featureType: "nationalway",
    elementType: "labels.text.fill",
    stylers: {
      color: "#999999ff",
    },
  },
  {
    featureType: "provincialway",
    elementType: "labels.text.fill",
    stylers: {
      color: "#999999ff",
    },
  },
  {
    featureType: "cityhighway",
    elementType: "labels.text.fill",
    stylers: {
      color: "#999999ff",
    },
  },
  {
    featureType: "cityhighway",
    elementType: "labels.text.stroke",
    stylers: {
      color: "#ffffffff",
    },
  },
  {
    featureType: "highway",
    stylers: {
      curZoomRegionId: "0",
      curZoomRegion: "6,8",
      level: "6",
    },
  },
  {
    featureType: "highway",
    stylers: {
      curZoomRegionId: "0",
      curZoomRegion: "6,8",
      level: "7",
    },
  },
  {
    featureType: "highway",
    stylers: {
      curZoomRegionId: "0",
      curZoomRegion: "6,8",
      level: "8",
    },
  },
  {
    featureType: "highway",
    elementType: "geometry",
    stylers: {
      visibility: "off",
      curZoomRegionId: "0",
      curZoomRegion: "6,8",
      level: "6",
    },
  },
  {
    featureType: "highway",
    elementType: "geometry",
    stylers: {
      visibility: "off",
      curZoomRegionId: "0",
      curZoomRegion: "6,8",
      level: "7",
    },
  },
  {
    featureType: "highway",
    elementType: "geometry",
    stylers: {
      visibility: "off",
      curZoomRegionId: "0",
      curZoomRegion: "6,8",
      level: "8",
    },
  },
  {
    featureType: "highway",
    elementType: "labels",
    stylers: {
      visibility: "off",
      curZoomRegionId: "0",
      curZoomRegion: "6,8",
      level: "6",
    },
  },
  {
    featureType: "highway",
    elementType: "labels",
    stylers: {
      visibility: "off",
      curZoomRegionId: "0",
      curZoomRegion: "6,8",
      level: "7",
    },
  },
  {
    featureType: "highway",
    elementType: "labels",
    stylers: {
      visibility: "off",
      curZoomRegionId: "0",
      curZoomRegion: "6,8",
      level: "8",
    },
  },
  {
    featureType: "nationalway",
    stylers: {
      curZoomRegionId: "0",
      curZoomRegion: "6,8",
      level: "6",
    },
  },
  {
    featureType: "nationalway",
    stylers: {
      curZoomRegionId: "0",
      curZoomRegion: "6,8",
      level: "7",
    },
  },
  {
    featureType: "nationalway",
    stylers: {
      curZoomRegionId: "0",
      curZoomRegion: "6,8",
      level: "8",
    },
  },
  {
    featureType: "nationalway",
    elementType: "geometry",
    stylers: {
      visibility: "off",
      curZoomRegionId: "0",
      curZoomRegion: "6,8",
      level: "6",
    },
  },
  {
    featureType: "nationalway",
    elementType: "geometry",
    stylers: {
      visibility: "off",
      curZoomRegionId: "0",
      curZoomRegion: "6,8",
      level: "7",
    },
  },
  {
    featureType: "nationalway",
    elementType: "geometry",
    stylers: {
      visibility: "off",
      curZoomRegionId: "0",
      curZoomRegion: "6,8",
      level: "8",
    },
  },
  {
    featureType: "nationalway",
    elementType: "labels",
    stylers: {
      visibility: "off",
      curZoomRegionId: "0",
      curZoomRegion: "6,8",
      level: "6",
    },
  },
  {
    featureType: "nationalway",
    elementType: "labels",
    stylers: {
      visibility: "off",
      curZoomRegionId: "0",
      curZoomRegion: "6,8",
      level: "7",
    },
  },
  {
    featureType: "nationalway",
    elementType: "labels",
    stylers: {
      visibility: "off",
      curZoomRegionId: "0",
      curZoomRegion: "6,8",
      level: "8",
    },
  },
  {
    featureType: "provincialway",
    stylers: {
      curZoomRegionId: "0",
      curZoomRegion: "8,8",
      level: "8",
    },
  },
  {
    featureType: "provincialway",
    elementType: "geometry",
    stylers: {
      visibility: "off",
      curZoomRegionId: "0",
      curZoomRegion: "8,8",
      level: "8",
    },
  },
  {
    featureType: "provincialway",
    elementType: "labels",
    stylers: {
      visibility: "off",
      curZoomRegionId: "0",
      curZoomRegion: "8,8",
      level: "8",
    },
  },
  {
    featureType: "cityhighway",
    stylers: {
      curZoomRegionId: "0",
      curZoomRegion: "6,8",
      level: "6",
    },
  },
  {
    featureType: "cityhighway",
    stylers: {
      curZoomRegionId: "0",
      curZoomRegion: "6,8",
      level: "7",
    },
  },
  {
    featureType: "cityhighway",
    stylers: {
      curZoomRegionId: "0",
      curZoomRegion: "6,8",
      level: "8",
    },
  },
  {
    featureType: "cityhighway",
    elementType: "geometry",
    stylers: {
      visibility: "off",
      curZoomRegionId: "0",
      curZoomRegion: "6,8",
      level: "6",
    },
  },
  {
    featureType: "cityhighway",
    elementType: "geometry",
    stylers: {
      visibility: "off",
      curZoomRegionId: "0",
      curZoomRegion: "6,8",
      level: "7",
    },
  },
  {
    featureType: "cityhighway",
    elementType: "geometry",
    stylers: {
      visibility: "off",
      curZoomRegionId: "0",
      curZoomRegion: "6,8",
      level: "8",
    },
  },
  {
    featureType: "cityhighway",
    elementType: "labels",
    stylers: {
      visibility: "off",
      curZoomRegionId: "0",
      curZoomRegion: "6,8",
      level: "6",
    },
  },
  {
    featureType: "cityhighway",
    elementType: "labels",
    stylers: {
      visibility: "off",
      curZoomRegionId: "0",
      curZoomRegion: "6,8",
      level: "7",
    },
  },
  {
    featureType: "cityhighway",
    elementType: "labels",
    stylers: {
      visibility: "off",
      curZoomRegionId: "0",
      curZoomRegion: "6,8",
      level: "8",
    },
  },
  {
    featureType: "cityhighway",
    elementType: "geometry.fill",
    stylers: {
      color: "#fbfffeff",
    },
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: {
      color: "#8f5a33ff",
    },
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: {
      color: "#ffffffff",
    },
  },
  {
    featureType: "country",
    elementType: "labels.text.fill",
    stylers: {
      color: "#8f5a33ff",
    },
  },
  {
    featureType: "country",
    elementType: "labels.text.stroke",
    stylers: {
      color: "#ffffffff",
    },
  },
  {
    featureType: "country",
    elementType: "labels.text",
    stylers: {
      fontsize: 28,
    },
  },
  {
    featureType: "manmade",
    elementType: "all",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "provincialway",
    elementType: "geometry.fill",
    stylers: {
      color: "#fbfffeff",
    },
  },
  {
    featureType: "tertiaryway",
    elementType: "geometry.fill",
    stylers: {
      color: "#fbfffeff",
    },
  },
  {
    featureType: "scenicspots",
    elementType: "labels.text.fill",
    stylers: {
      color: "#999999ff",
    },
  },
  {
    featureType: "scenicspots",
    elementType: "labels.text.stroke",
    stylers: {
      color: "#ffffffff",
    },
  },
  {
    featureType: "airportlabel",
    elementType: "labels.text.fill",
    stylers: {
      color: "#999999ff",
    },
  },
  {
    featureType: "airportlabel",
    elementType: "labels.icon",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "scenicspotslabel",
    elementType: "labels.text.fill",
    stylers: {
      color: "#999999ff",
    },
  },
  {
    featureType: "scenicspotslabel",
    elementType: "labels.icon",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "educationlabel",
    elementType: "labels.text.fill",
    stylers: {
      color: "#999999ff",
    },
  },
  {
    featureType: "educationlabel",
    elementType: "labels.icon",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "medicallabel",
    elementType: "labels.text.fill",
    stylers: {
      color: "#999999ff",
    },
  },
  {
    featureType: "medicallabel",
    elementType: "labels.icon",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "companylabel",
    elementType: "labels.icon",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "restaurantlabel",
    elementType: "labels.icon",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "hotellabel",
    elementType: "labels.icon",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "hotellabel",
    elementType: "labels",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "shoppinglabel",
    elementType: "labels.icon",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "shoppinglabel",
    elementType: "labels",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "lifeservicelabel",
    elementType: "labels.icon",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "carservicelabel",
    elementType: "labels.icon",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "transportationlabel",
    elementType: "labels.icon",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "transportationlabel",
    elementType: "labels",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "financelabel",
    elementType: "labels.icon",
    stylers: {
      visibility: "off",
    },
  },
  {
    featureType: "entertainment",
    elementType: "geometry",
    stylers: {
      color: "#d1dbdbff",
    },
  },
  {
    featureType: "estate",
    elementType: "geometry",
    stylers: {
      color: "#d1dbdbff",
    },
  },
  {
    featureType: "shopping",
    elementType: "geometry",
    stylers: {
      color: "#d1dbdbff",
    },
  },
  {
    featureType: "education",
    elementType: "labels.text.fill",
    stylers: {
      color: "#999999ff",
    },
  },
  {
    featureType: "education",
    elementType: "labels.text.stroke",
    stylers: {
      color: "#ffffffff",
    },
  },
  {
    featureType: "medical",
    elementType: "labels.text.fill",
    stylers: {
      color: "#999999ff",
    },
  },
  {
    featureType: "medical",
    elementType: "labels.text.stroke",
    stylers: {
      color: "#ffffffff",
    },
  },
  {
    featureType: "transportation",
    elementType: "labels.text.fill",
    stylers: {
      color: "#999999ff",
    },
  },
  {
    featureType: "transportation",
    elementType: "labels.text.stroke",
    stylers: {
      color: "#ffffffff",
    },
  },
];
const MAP_CONFIG_BIGSCREEN = [{
  "featureType": "land",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "color": "#0d1b2aff"
  }
}, {
  "featureType": "water",
  "elementType": "labels.text.fill",
  "stylers": {
      "visibility": "on",
      "color": "#0d1b2aff"
  }
}, {
  "featureType": "building",
  "elementType": "geometry.fill",
  "stylers": {
      "visibility": "on",
      "color": "#020f1bff"
  }
}, {
  "featureType": "building",
  "elementType": "geometry.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#000002ff"
  }
}, {
  "featureType": "water",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "color": "#97b9dfff"
  }
}, {
  "featureType": "village",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "town",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "district",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "country",
  "elementType": "labels.text.fill",
  "stylers": {
      "visibility": "on",
      "color": "#e0e1ddff"
  }
}, {
  "featureType": "city",
  "elementType": "labels.text.fill",
  "stylers": {
      "visibility": "on",
      "color": "#e0e1ddff"
  }
}, {
  "featureType": "continent",
  "elementType": "labels.text.fill",
  "stylers": {
      "visibility": "on",
      "color": "#e0e1ddff"
  }
}, {
  "featureType": "poilabel",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "poilabel",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "scenicspotslabel",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "scenicspotslabel",
  "elementType": "labels.text.fill",
  "stylers": {
      "visibility": "on",
      "color": "#e0e1ddff"
  }
}, {
  "featureType": "transportationlabel",
  "elementType": "labels.text.fill",
  "stylers": {
      "visibility": "on",
      "color": "#e0e1ddff"
  }
}, {
  "featureType": "transportationlabel",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "airportlabel",
  "elementType": "labels.text.fill",
  "stylers": {
      "visibility": "on",
      "color": "#e0e1ddff"
  }
}, {
  "featureType": "airportlabel",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "road",
  "elementType": "geometry.fill",
  "stylers": {
      "visibility": "on",
      "color": "#415a77ff"
  }
}, {
  "featureType": "road",
  "elementType": "geometry.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#23374fff"
  }
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": {
      "weight": "3"
  }
}, {
  "featureType": "green",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "color": "#1b263bff"
  }
}, {
  "featureType": "scenicspots",
  "elementType": "geometry",
  "stylers": {
      "visibility": "on",
      "color": "#0d1b2aff"
  }
}, {
  "featureType": "scenicspots",
  "elementType": "labels.text.fill",
  "stylers": {
      "visibility": "on",
      "color": "#e0e1ddff"
  }
}, {
  "featureType": "scenicspots",
  "elementType": "labels.text.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#778da9ff",
      "weight": "1"
  }
}, {
  "featureType": "continent",
  "elementType": "labels.text.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#778da9ff",
      "weight": "1"
  }
}, {
  "featureType": "country",
  "elementType": "labels.text.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#778da9ff",
      "weight": "1"
  }
}, {
  "featureType": "city",
  "elementType": "labels.text.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#778da9ff",
      "weight": "1"
  }
}, {
  "featureType": "city",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "scenicspotslabel",
  "elementType": "labels.text.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#778da9ff",
      "weight": "1"
  }
}, {
  "featureType": "airportlabel",
  "elementType": "labels.text.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#778da9ff",
      "weight": "1"
  }
}, {
  "featureType": "transportationlabel",
  "elementType": "labels.text.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#778da9ff",
      "weight": "1"
  }
}, {
  "featureType": "railway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "subway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "highwaysign",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "nationalwaysign",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "nationalwaysign",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "provincialwaysign",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "provincialwaysign",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "tertiarywaysign",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "tertiarywaysign",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "subwaylabel",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "subwaylabel",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "road",
  "elementType": "labels.text.fill",
  "stylers": {
      "visibility": "on",
      "color": "#e0e1ddff",
      "weight": "90"
  }
}, {
  "featureType": "road",
  "elementType": "labels.text.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#778da9ff",
      "weight": "1"
  }
}, {
  "featureType": "shopping",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "scenicspots",
  "elementType": "labels",
  "stylers": {
      "visibility": "on"
  }
}, {
  "featureType": "scenicspotslabel",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "manmade",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "manmade",
  "elementType": "labels",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "highwaysign",
  "elementType": "labels.icon",
  "stylers": {
      "visibility": "off"
  }
}, {
  "featureType": "water",
  "elementType": "labels.text.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#1b263b00"
  }
}, {
  "featureType": "road",
  "stylers": {
      "level": "6",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "road",
  "stylers": {
      "level": "7",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "road",
  "stylers": {
      "level": "8",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "road",
  "stylers": {
      "level": "9",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "level": "6",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "level": "7",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "level": "8",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "level": "9",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "road",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "level": "6",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "road",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "level": "7",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "road",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "level": "8",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "road",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "level": "9",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "road",
  "elementType": "labels.text",
  "stylers": {
      "fontsize": "24"
  }
}, {
  "featureType": "highway",
  "elementType": "labels.text.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#778da9ff",
      "weight": "1"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry.fill",
  "stylers": {
      "visibility": "on",
      "color": "#415a77ff"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry.stroke",
  "stylers": {
      "color": "#1c4f7eff"
  }
}, {
  "featureType": "highway",
  "elementType": "labels.text.fill",
  "stylers": {
      "visibility": "on",
      "color": "#e0e1ddff"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
      "weight": "3"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry.fill",
  "stylers": {
      "visibility": "on",
      "color": "#415a77ff"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry.stroke",
  "stylers": {
      "color": "#1c4f7eff"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels.text.fill",
  "stylers": {
      "visibility": "on",
      "color": "#e0e1ddff"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels.text.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#778da9ff",
      "weight": "1"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
      "weight": "3"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry.fill",
  "stylers": {
      "visibility": "on",
      "color": "#415a77ff"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry.fill",
  "stylers": {
      "visibility": "on",
      "color": "#415a77ff"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry.fill",
  "stylers": {
      "visibility": "on",
      "color": "#415a77ff"
  }
}, {
  "featureType": "tertiaryway",
  "elementType": "geometry.fill",
  "stylers": {
      "visibility": "on",
      "color": "#415a77ff"
  }
}, {
  "featureType": "fourlevelway",
  "elementType": "geometry.fill",
  "stylers": {
      "visibility": "on",
      "color": "#415a77ff"
  }
}, {
  "featureType": "local",
  "elementType": "geometry.fill",
  "stylers": {
      "visibility": "on",
      "color": "#415a77ff"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#23374fff"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#23374fff"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#23374fff"
  }
}, {
  "featureType": "tertiaryway",
  "elementType": "geometry.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#23374fff"
  }
}, {
  "featureType": "fourlevelway",
  "elementType": "geometry.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#23374fff"
  }
}, {
  "featureType": "local",
  "elementType": "geometry.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#23374fff"
  }
}, {
  "featureType": "local",
  "elementType": "labels.text.fill",
  "stylers": {
      "visibility": "on",
      "color": "#e0e1ddff"
  }
}, {
  "featureType": "local",
  "elementType": "labels.text.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#778da9ff",
      "weight": "1"
  }
}, {
  "featureType": "fourlevelway",
  "elementType": "labels.text.fill",
  "stylers": {
      "visibility": "on",
      "color": "#e0e1ddff"
  }
}, {
  "featureType": "tertiaryway",
  "elementType": "labels.text.fill",
  "stylers": {
      "visibility": "on",
      "color": "#e0e1ddff"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels.text.fill",
  "stylers": {
      "visibility": "on",
      "color": "#e0e1ddff"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels.text.fill",
  "stylers": {
      "visibility": "on",
      "color": "#e0e1ddff"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels.text.fill",
  "stylers": {
      "visibility": "on",
      "color": "#e0e1ddff"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels.text.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#778da9ff",
      "weight": "1"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels.text.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#778da9ff",
      "weight": "1"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels.text.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#778da9ff",
      "weight": "1"
  }
}, {
  "featureType": "tertiaryway",
  "elementType": "labels.text.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#778da9ff",
      "weight": "1"
  }
}, {
  "featureType": "fourlevelway",
  "elementType": "labels.text.stroke",
  "stylers": {
      "visibility": "on",
      "color": "#778da9ff",
      "weight": "1"
  }
}, {
  "featureType": "fourlevelway",
  "elementType": "geometry",
  "stylers": {
      "weight": "1"
  }
}, {
  "featureType": "tertiaryway",
  "elementType": "geometry",
  "stylers": {
      "weight": "1"
  }
}, {
  "featureType": "local",
  "elementType": "geometry",
  "stylers": {
      "weight": "1"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry",
  "stylers": {
      "weight": "3"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
      "weight": "3"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry",
  "stylers": {
      "weight": "3"
  }
}, {
  "featureType": "highway",
  "stylers": {
      "level": "6",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "highway",
  "stylers": {
      "level": "7",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "highway",
  "stylers": {
      "level": "8",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "highway",
  "stylers": {
      "level": "9",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "level": "6",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "level": "7",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "level": "8",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "level": "9",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "level": "6",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "level": "7",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "level": "8",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "level": "9",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
      "level": "6",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
      "level": "7",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
      "level": "8",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
      "level": "9",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "level": "6",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "level": "7",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "level": "8",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "level": "9",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "level": "6",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "level": "7",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "level": "8",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "level": "9",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "provincialway",
  "stylers": {
      "level": "8",
      "curZoomRegionId": "0",
      "curZoomRegion": "8-10"
  }
}, {
  "featureType": "provincialway",
  "stylers": {
      "level": "9",
      "curZoomRegionId": "0",
      "curZoomRegion": "8-10"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "level": "8",
      "curZoomRegionId": "0",
      "curZoomRegion": "8-10"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "level": "9",
      "curZoomRegionId": "0",
      "curZoomRegion": "8-10"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "level": "8",
      "curZoomRegionId": "0",
      "curZoomRegion": "8-10"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "level": "9",
      "curZoomRegionId": "0",
      "curZoomRegion": "8-10"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
      "level": "6",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
      "level": "7",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
      "level": "8",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
      "level": "9",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "level": "6",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "level": "7",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "level": "8",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "level": "9",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "level": "6",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "level": "7",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "level": "8",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "level": "9",
      "curZoomRegionId": "0",
      "curZoomRegion": "6-9"
  }
}, {
  "featureType": "arterial",
  "stylers": {
      "level": "9",
      "curZoomRegionId": "0",
      "curZoomRegion": "9-9"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry",
  "stylers": {
      "visibility": "off",
      "level": "9",
      "curZoomRegionId": "0",
      "curZoomRegion": "9-9"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels",
  "stylers": {
      "visibility": "off",
      "level": "9",
      "curZoomRegionId": "0",
      "curZoomRegion": "9-9"
  }
}]
export default {
  ECHART_COLOR, //echart color
  MAP_CONFIG, //地图 背景color
  MAP_CONFIG_BIGSCREEN
}

//小数位数验证
export const fyNoFun = (n, x, y) => {
  return [
    {
      required: n,
      message: "不能为空",
      trigger: "blur",
    },
    {
      pattern: eval(
        "/^(([1-9]{1}\\d{0," + (x - 1) + "})|(0{1}))(\\.\\d{0," + y + "})?$/"
      ),
      message: `必须为正数，整数不能超过${x}位，小数不能超过${y}位`,
    },
  ];
}




//千分位符合
export const format = (num) => {
  var f = parseFloat(num);
  if (isNaN(f)) {
    return '--';
  }
  num = num.toString().split(".");  // 分隔小数点
  var arr = num[0].split("").reverse();  // 转换成字符数组并且倒序排列
  var res = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    if (i % 3 === 0 && i !== 0) {
      res.push(",");   // 添加分隔符
    }
    res.push(arr[i]);
  }
  res.reverse(); // 再次倒序成为正确的顺序
  if (num[1]) {  // 如果有小数的话添加小数部分
    res = res.join("").concat("." + num[1]);
  } else {
    res = res.join("");
  }
  return res;
}

//格式化数字
export const formatterfun = (item,m,n) => {
  var f = parseFloat(item);
  if (isNaN(f)) {
      return null;
  }
  return fomatFloat(item/m,n)
};

//格式化数字
export const fomatFloat = (num, n) => {
  var f = parseFloat(num);
  if (isNaN(f)) {
    return '--';
  }
  f = Math.round(num * Math.pow(10, n)) / Math.pow(10, n); // n 幂
  var s = f.toString();
  var rs = s.indexOf('.');
  //判定如果是整数，增加小数点再补0    
  if (n == 0) {
    return s;
  } else {
    if (rs < 0) {
      rs = s.length;
      s += '.';
    }
    while (s.length <= rs + n) {
      s += '0';
    }
    return s;
  }

};

//日期格式化
export const dateFormat = (fmt, date) => {
  if (date == undefined) {
    return null
  }
  let ret;
  date = new Date(date);
  let opt = {
    "Y+": date.getFullYear().toString(),        // 年
    "m+": (date.getMonth() + 1).toString(),     // 月
    "d+": date.getDate().toString(),            // 日
    "H+": date.getHours().toString(),           // 时
    "M+": date.getMinutes().toString(),         // 分
    "S+": date.getSeconds().toString()          // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
    };
  };
  return fmt;
};

//文件下载
export const excelDownload = (data, name) => {
  if (!data) {
    return
  }
  let url = window.URL.createObjectURL(new Blob([data]))
  let link = document.createElement('a')
  link.style.display = 'none'
  link.href = url
  link.setAttribute('download', `${name}.xlsx`)

  document.body.appendChild(link)
  link.click()
}

export const formatNumberRgx = (num) => {  //文件下载
  var parts = num.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

export const fydevtpye = (num) => {  //设备类型
  let str = [{
    label: "储能设备",
    value: [100, 111, 121]
  }, {
    label: "发电设备",
    value: [200, 211, 221, 231]
  }, {
    label: "充电桩设备",
    value: [311, 312, 314]
  }, {
    label: "负荷设备",
    value: [300, 313, 351, 352]
  }, {
    label: "测量设备",
    value: [400, 401, 402, 403]
  }, {
    label: "气象类测量设备",
    value: [420, 421, 422, 423, 424, 425, 426]
  }, {
    label: "控制设备",
    value: [500, 501, 502, 503, 504]
  }]

  let name;
  str.map(n => {

    if (n.value.find(m => m == num) != undefined) {
      name = n.label
    }

  })
  return name;
}


export const getArray = (data, name) => {  //递归反查城市
  for (var i in data) {
    if (data[i].value == name) {
      // console.log(data[i].label)
      return data[i].label;
    } else {
      return getArray(data[i].children, name);
    }

  }


}
export const time24 = (data, name) => {  //时间轴   
  return ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00",]


}
export const time96 = (data, name) => {  //15分钟一点时间轴
  // let ss = [];
  // let nn = 0;
  // for (let i = 0; i < 96; i++) {
  //     if ((i * 15) % 60 == 0 && i != 0) {
  //         if (nn < 10) {
  //             ss.push('0' + (nn + 1) + ':00');
  //         } else {
  //             ss.push((nn + 1) + ':00');
  //         }
  //         nn++
  //     } else {
  //         if (nn < 10) {
  //             ss.push('0' + (nn) + ':' + (i * 15) % 60);
  //         } else {
  //             ss.push((nn) + ':' + (i * 15) % 60);
  //         }

  //     }
  // } 
  return ["00:00", "00:15", "00:30", "00:45", "01:00", "01:15", "01:30", "01:45", "02:00", "02:15", "02:30", "02:45", "03:00", "03:15", "03:30", "03:45", "04:00", "04:15", "04:30", "04:45", "05:00", "05:15", "05:30", "05:45", "06:00", "06:15", "06:30", "06:45", "07:00", "07:15", "07:30", "07:45", "08:00", "08:15", "08:30", "08:45", "09:00", "09:15", "09:30", "09:45", "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30", "13:45", "14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45", "17:00", "17:15", "17:30", "17:45", "18:00", "18:15", "18:30", "18:45", "19:00", "19:15", "19:30", "19:45", "20:00", "20:15", "20:30", "20:45", "21:00", "21:15", "21:30", "21:45", "22:00", "22:15", "22:30", "22:45", "23:00", "23:15", "23:30", "23:45"]


}

export const getArrayQy = (data, name) => {  //反查区域name
  let str = [];
  function getArray(data, name, f1name, f2name) {
    //递归反查城市
    for (var i in data) {
      if (data[i].value == name) {
        str.push(f1name, f2name, data[i].label);
        break;
      }

      if (data[i].children != undefined) {
        if (f1name == undefined) {
          getArray(data[i].children, name, data[i].label);
        } else {
          getArray(data[i].children, name, f1name, data[i].label);
        }

      }
    }
  }
  getArray(data, name);
  return str.join(' ');
}
export const getArrayQy2 = (data, name) => {  //反查区域id
  let str = [];
  function getArray(data, name, f1name, f2name) {

    //递归反查城市
    for (var i in data) {
      if (data[i].code == name) {

        str.push(f1name, f2name, data[i].name);
        break;
      }

      if (data[i].children != undefined) {
        if (f1name == undefined) {
          getArray(data[i].children, name, data[i].name);
        } else {
          getArray(data[i].children, name, f1name, data[i].name);
        }

      }
    }
  }
  getArray(data, name);
  return str.join(' ');
}
//电话号码表单验证
export const isPhone = (n) => {
  return [
    {
      required: n,
      message: "不能为空",
      trigger: "blur",
    },
    {
      pattern: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
      message: '请输入正确电话号码',
    },
  ];
}
//邮箱表单验证
export const isEmail = (n) => {
  return [
    {
      required: n,
      message: "不能为空",
      trigger: "blur",
    },
    {
      pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
      message: '请输入正确邮箱',
    },
  ];
}
