class Map {
    constructor(map) {
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 9.1181882, lng: 76.6885479},
            zoom: 12
        });
    }

    addMarker({
                  markerOptions,
                  click = null,
                  drag = null,
                  dblclick = null,
                  animation_changed = null,
                  clickable_changed = null,
                  cursor_changed = null,
                  dragend = null,
                  draggable_changed = null,
                  dragstart = null,
                  flat_changed = null,
                  icon_changed = null,
                  mousedown = null,
                  mouseout = null,
                  mouseover = null,
                  mouseup = null,
                  position_changed = null,
                  rightclick = null,
                  shape_changed = null,
                  title_changed = null,
                  visible_changed = null,
                  zindex_changed = null,

              }) {
        /**
         * Adding
         */
        markerOptions.map = this.map;
        let marker = new google.maps.Marker(markerOptions);

        if (click)
            marker.addListener('click', click);
        if (drag)
            marker.addListener('drag', drag);
        if (dblclick)
            marker.addListener('dblclick', dblclick);
        if (animation_changed)
            marker.addListener('animation_changed', animation_changed);
        if (clickable_changed)
            marker.addListener('clickable_changed', clickable_changed);
        if (cursor_changed)
            marker.addListener('cursor_changed', cursor_changed);
        if (dragend)
            marker.addListener('dragend', dragend);
        if (draggable_changed)
            marker.addListener('draggable_changed', draggable_changed);
        if (dragstart)
            marker.addListener('dragstart', dragstart);
        if (flat_changed)
            marker.addListener('flat_changed', flat_changed);
        if (icon_changed)
            marker.addListener('icon_changed', icon_changed);
        if (mousedown)
            marker.addListener('mousedown', mousedown);
        if (mouseout)
            marker.addListener('mouseout', mouseout);
        if (mouseover)
            marker.addListener('mouseover', mouseover);
        if (mouseup)
            marker.addListener('mouseup', mouseup);
        if (position_changed)
            marker.addListener('position_changed', position_changed);
        if (rightclick)
            marker.addListener('rightclick', rightclick);
        if (shape_changed)
            marker.addListener('shape_changed', shape_changed);
        if (title_changed)
            marker.addListener('title_changed', title_changed);
        if (visible_changed)
            marker.addListener('visible_changed', visible_changed);
        if (zindex_changed)
            marker.addListener('zindex_changed', zindex_changed);


        return marker;
    }
}
