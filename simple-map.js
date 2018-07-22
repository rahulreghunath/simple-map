class Map {

    /**
     * Creates a new instance, including a Google Maps map.
     * @param mapOptions
     */
    constructor({...mapOptions}) {

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
     *
     * @param options {object}
     * @returns {google.maps.Marker}
     */
    addMarker({...options}) {
        /**
         * Marker initial options
         */
        let markerOptions = options['markerOptions'];
        markerOptions.map = this.map;

        /**
         * Creating new marker object
         * @type {google.maps.Marker}
         */
        let marker = new google.maps.Marker(markerOptions);

        /**
         * Deleting marker options from the object
         */
        delete options.markerOptions;

        /**
         * Generating user events for Marker
         */
        for (let item in options) {
            console.log(options[item].name);
            marker.addListener(options[item].name, options[item]);
        }

        return marker;
    }
}
