class Map {

    /**
     * Creates a new instance, including a Google Maps map.
     * @param mapOptions
     */
    constructor({...mapOptions}) {
        console.table(mapOptions);
        /**
         * Required options
         */
        let lat = mapOptions.lat;
        let lng = mapOptions.lng;
        let element = mapOptions.id;

        delete mapOptions.lat;
        delete mapOptions.lng;
        delete mapOptions.id;
        mapOptions.center = {lat: parseFloat(lat), lng: parseFloat(lng)};

        /**
         * Creating map object
         * @type {google.maps.Map}
         */
        this.map = new google.maps.Map(document.getElementById(element), mapOptions);

        /**
         * Genarating user events for Map
         * @type {{}|events}
         */
        let events = mapOptions.events;
        for (let item in events) {
            this.map.addListener(events[item].name, events[item]);
        }
    }

    /**
     * Returns map object
     * @returns {google.maps.Map}
     */
    getMap() {
        return this.map;
    }

    /**
     *
     * @param options {object}
     * @returns {google.maps.Marker}
     */
    addMarker({...options}) {
        /**
         * Marker initial options
         */
        let markerOptions = options.options;
        markerOptions.map = this.map;

        /**
         * Creating new marker object
         * @type {google.maps.Marker}
         */
        let marker = new google.maps.Marker(markerOptions);

        /**
         * Deleting marker options from the object
         */
        delete options.options;

        /**
         * Generating user events for Marker
         */
        for (let item in options) {
            marker.addListener(options[item].name, options[item]);
        }

        return marker;
    }

    /**
     * Create new info window object
     * @param infoWindowOptions
     * @returns {google.maps.InfoWindow}
     */
    newInfoWindow({...infoWindowOptions}) {
        /**
         * Marker to which the info window is displayed
         * @type {SVGMarkerElement | string}
         */
        let marker = infoWindowOptions.options.marker;

        /**
         * Deleting the marker from options
         */
        delete infoWindowOptions.options.marker;

        /**
         * Creating new infoWindow object
         * @type {google.maps.InfoWindow}
         */
        let infoWindow = new google.maps.InfoWindow(infoWindowOptions.options);

        /**
         * Deleting options from infoWindowOptions
         */
        delete infoWindowOptions.options;

        /**
         * Adding marker event to open infoWindow
         */
        marker.addListener("click", () => {
            infoWindow.open(this.getMap(), marker);
        });

        /**
         * Generating user events for infoWindow
         */
        for (let item in infoWindowOptions) {
            infowindow.addListener(infoWindowOptions[item].name, infoWindowOptions[item]);
        }

        return infoWindow;
    }

    /**
     * Creating new polygon
     * @param polygonOptions
     */
    drawPolygon({...polygonOptions}) {

        /**
         * Creating new polygon object
         * @type {google.maps.Polygon}
         */
        let polygon = new google.maps.Polygon(polygonOptions.options);

        /**
         * Deleting polygon options
         */
        delete polygonOptions.options;

        /**
         * Setting maap
         */
        polygon.setMap(this.getMap());

        /**
         * Generating user events for Marker
         */
        for (let item in polygonOptions) {
            polygon.addListener(polygonOptions[item].name, polygonOptions[item]);
        }
    }
}
