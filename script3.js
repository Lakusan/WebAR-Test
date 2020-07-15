window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places);




function staticLoadPlaces() {
    return [
      
        {
            name: 'flower-2',
            location: {
                lat: 49.22420930,
                lng: 8.78599841,
            },
            rotation: '0 0 0',
            scale: '1.5 1.5 1.5',
        },

        {
            name: 'dwyl-info-sign-1', 
            location: {
                lat: 52.371295,
                lng: 4.878753,
            },   
            rotation: '0 180 0',
            scale: '0.5 0.5 0.5',
        },
    ];
}


function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;


        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('gltf-model', './assets/' + place.name + '/scene.gltf');
        model.setAttribute('rotation', place.rotation);
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', place.scale);

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });


        scene.appendChild(model);

    });
}
};