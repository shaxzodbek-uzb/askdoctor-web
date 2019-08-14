
var map
var marker
var lat = 41.275503
var lng = 69.220421
var ico = new google.maps.MarkerImage('images/icons/marker.png')
var markerList = $('.markers-list')

/* Draw Overlay*/
var overlay = new google.maps.OverlayView()
overlay.draw = function() {}

// Goole Maps SKIN
var styleGrey = [{ featureType: 'administrative', elementType: 'all', stylers: [{ visibility: 'off' }] }, { featureType: 'landscape', elementType: 'all', stylers: [{ hue: '#FFFFFF' }, { saturation: -100 }, { lightness: 100 }, { visibility: 'on' }] }, { featureType: 'poi', elementType: 'all', stylers: [{ visibility: 'off' }] }, { featureType: 'road', elementType: 'all', stylers: [{ visibility: 'on' }, { lightness: -30 }] }, { featureType: 'transit', elementType: 'all', stylers: [{ visibility: 'off' }] }, { featureType: 'water', elementType: 'all', stylers: [{ saturation: -100 }, { lightness: -100 }] }, { featureType: 'all', elementType: 'all', stylers: [{ saturation: -100 }, { lightness: 91 }] }]
// Ref: https://snazzymaps.com/
var routeXL = [{ 'featureType': 'administrative', 'elementType': 'all', 'stylers': [{ 'visibility': 'on' }, { 'saturation': -100 }, { 'lightness': 20 }] }, { 'featureType': 'road', 'elementType': 'all', 'stylers': [{ 'visibility': 'on' }, { 'saturation': -100 }, { 'lightness': 40 }] }, { 'featureType': 'water', 'elementType': 'all', 'stylers': [{ 'visibility': 'on' }, { 'saturation': -10 }, { 'lightness': 30 }] }, { 'featureType': 'landscape.man_made', 'elementType': 'all', 'stylers': [{ 'visibility': 'simplified' }, { 'saturation': -60 }, { 'lightness': 10 }] }, { 'featureType': 'landscape.natural', 'elementType': 'all', 'stylers': [{ 'visibility': 'simplified' }, { 'saturation': -60 }, { 'lightness': 60 }] }, { 'featureType': 'poi', 'elementType': 'all', 'stylers': [{ 'visibility': 'off' }, { 'saturation': -100 }, { 'lightness': 60 }] }, { 'featureType': 'transit', 'elementType': 'all', 'stylers': [{ 'visibility': 'off' }, { 'saturation': -100 }, { 'lightness': 60 }] }]

var styledMapOptions = { name: 'MYTHEME' }
var greyMapType = new google.maps.StyledMapType(styleGrey, styledMapOptions)

var styledSnazzymaps = { name: 'RouteXL' }
var snazzymapsMapType = new google.maps.StyledMapType(routeXL, styledSnazzymaps)

function initialize() {
  var mapCanvas = document.getElementById('map')
  var mapOptions = {
    zoom: 16,
    center: {
      lat: lat,
      lng: lng
    },
    mapTypeControl: false,
    zoomControl: false,
    panControl: false,
    scaleControl: false,
    streetViewControl: false,
    scrollwheel: false
  }

  map = new google.maps.Map(mapCanvas, mapOptions)

  // set overlay map
  overlay.setMap(map)

  // call zoom control
  ZoomControl(map)

  // call add marker
  addMarker(map)

  // call gmap skin
  map.mapTypes.set('MYTHEME', greyMapType)
  map.mapTypes.set('RouteXL', snazzymapsMapType)
}

// Add marker and listeners
function addMarker(map) {
  marker = new google.maps.Marker({
    map: map,
    draggable: false,
    icon: ico,
    position: new google.maps.LatLng(lat, lng)
  })

  mouseOverHandler = function() {
    showMarker(marker)
  }
  mouseClickHandler = function() {
    clickMarker(lat, lng)
  }

  google.maps.event.addListener(marker, 'click', mouseClickHandler)
  google.maps.event.addListener(marker, 'mouseover', mouseOverHandler)
}

// Marker over animation
function showMarker(marker) {
  var name = 'Blleb'
  var projection = overlay.getProjection()
  var pixel = projection.fromLatLngToContainerPixel(marker.getPosition())
  var x = pixel.x - 58
  var y = pixel.y - 84

  markerList.find('li').css({ 'left': x, 'top': y })
  markerList.find('p').html(name)
  markerList.fadeIn()
}

// Marker click function
function clickMarker(lat, lng) {
  var url = 'https://maps.google.com/maps?q=' + lat + ',' + lng + '&z=18'
  window.open(url, '_blank')
}

// Zoom control function
function ZoomControl(map) {
  var zoomIn = document.getElementById('zoomIn')
  var zoomOut = document.getElementById('zoomOut')

  google.maps.event.addDomListener(zoomOut, 'click', function() {
    var currentZoomLevel = map.getZoom()
    if (currentZoomLevel != 0) {
      map.setZoom(currentZoomLevel - 1)
    }
  })

  google.maps.event.addDomListener(zoomIn, 'click', function() {
    var currentZoomLevel = map.getZoom()
    if (currentZoomLevel != 21) {
      map.setZoom(currentZoomLevel + 1)
    }
  })
}

// Map set center
$('#center').on('click', function() {
  map.setZoom(13)
  map.setCenter(new google.maps.LatLng(lat, lng))
  map.setMapTypeId(google.maps.MapTypeId.ROADMAP)
  $('#mapTypeId').val('1').trigger('click')
})

// Change Map TypeId
function TypeIdChange(option) {
  switch (option) {
    case '1':
      map.setMapTypeId(google.maps.MapTypeId.ROADMAP)
      break
    case '2':
      map.setMapTypeId(google.maps.MapTypeId.TERRAIN)
      break
    case '3':
      map.setMapTypeId(google.maps.MapTypeId.SATELLITE)
      break
    case '4':
      map.setMapTypeId('MYTHEME')
      break
    case '5':
      map.setMapTypeId('RouteXL')
      break
    default:
      map.setMapTypeId(google.maps.MapTypeId.ROADMAP)
  }
}

$('#mapTypeId').change(function() {
  var self = $(this)
  TypeIdChange(self.val())
})

google.maps.event.addDomListener(window, 'load', initialize)

