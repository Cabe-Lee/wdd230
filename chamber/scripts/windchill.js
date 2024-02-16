var apiKey = "88d936f317287eee62e27fd9b0035641";


function getTemperature(city) {
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var temperature = data.main.temp;
            document.getElementById("temperature").innerHTML = `${temperature}°F`;
        })
        .catch(error => console.error("Error:", error));
}
getTemperature("Carlsbad")



function getWindChill(city) {
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var temperature = data.main.temp;
            var windSpeed = data.wind.speed;

            var windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
            windChill = Math.round(windChill * 100) / 100;

            document.getElementById('windChill').innerHTML = `${windChill}°F`;
        })
        .catch(error => console.error('Error:', error));
}
getWindChill('Carlsbad');