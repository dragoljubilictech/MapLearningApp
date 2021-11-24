'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;

      console.log(`https://www.google.rs/maps/@${latitude},${longitude}`);

      const coords = [latitude, longitude];

      const mymap = L.map('map').setView(coords, 13);

      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mymap);

      //   var circle = L.circle(coords, {
      //     color: 'red',
      //     fillColor: '#f03',
      //     fillOpacity: 0.5,
      //     radius: 500,
      //   }).addTo(mymap);

      //   var polygon = L.polygon([coords, [51.503, -0.06], [51.51, -0.047]]).addTo(
      //     mymap
      //   );

      var marker = L.marker(coords).addTo(mymap);
      marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();
      //   circle.bindPopup('I am a circle.');
      //   polygon.bindPopup('I am a polygon.');
    },
    function () {
      alert('Could not get your position');
    }
  );
