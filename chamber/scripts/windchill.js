var apiKey = "88d936f317287eee62e27fd9b0035641";


function getTemperature(city) {
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .catch(error => console.error("Error:", error));
}
getTemperature("Carlsbad")



function getWindChill(city) {
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var temperature = data.main.temp;
            var windSpeed = data.wind.speed;

            var windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
            windChill = Math.round(windChill * 100) / 100;

            document.getElementById("windChill").innerHTML = `${windChill}°F`;
        })
        .catch(error => console.error("Error:", error));
}
getWindChill('Carlsbad');

const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = `https://api.openweathermap.org/data/2.5/weather?lat=33.21488591565309&lon=-117.25698551472084&units=imperial&appid=88d936f317287eee62e27fd9b0035641`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error (await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}



function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", "Tier Temp here:");
    captionDesc.textContent = `${desc.toUpperCase()}`;
}



apiFetch();