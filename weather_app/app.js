window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/7c23520ba64e9085d69cbc2413ed0b27/${lat},${long}`;

            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                // console.log(data);
                const { temperature, summary } = data.currently;
                // set DOM Elements from the API
                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = summary;
                locationTimezone.textContent = data.timezone;
            });
        });
    } 
    
    function setIcons(icon, iconID){
        const skycons = new skycons({color: 'white'});
    }
});