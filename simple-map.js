class Map {
    constructor(map) {
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 9.1181882, lng: 76.6885479},
            zoom: 12
        });
    }

    addMarker({...options}) {

        let markerOptions = options['markerOptions'];
        markerOptions.map = this.map;
        let marker = new google.maps.Marker(markerOptions);

        delete options.markerOptions;

        for (let item in options) {
            console.log(options[item].name);
            marker.addListener(options[item].name, options[item]);
        }

        return marker;
    }
}
