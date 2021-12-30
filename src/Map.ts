/// <reference types="@types/google.maps" />
export class Map {
    googleMap: google.maps.Map

    constructor() {
        this.googleMap = new google.maps.Map(document.getElementById("map"), {
            zoom: 1
            center: {
                lat:,
                lng:
            }
        })
    }
}